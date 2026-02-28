import { NextRequest, NextResponse } from 'next/server'

const PAGE_ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN!
const VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN!
const CLICKUP_TOKEN = process.env.CLICKUP_TOKEN!
const CLICKUP_LIST_ID = '187709500'

// ── In-memory session state (resets on cold start — fine for MVP) ──────────
const sessions: Record<string, { step: number; data: Record<string, string> }> = {}

const STEPS = [
  'name',
  'role',
  'experience',
  'onsite',
  'salary',
  'cv_prompt',
  'done',
]

const QUESTIONS: Record<string, string> = {
  name: `Hi there! 👋 I'm Unika, Head of People & Culture at ShoreAgents.\n\nWe connect talented Filipinos with amazing clients from Australia and New Zealand — full-time, office-based roles in Clark Freeport Zone with great pay! 🧡\n\nFirst up — what's your name?`,
  role: `Nice to meet you! 🌟 What kind of role are you interested in? (e.g. Virtual Assistant, Customer Service, Accounting, Marketing, IT, Admin...)`,
  experience: `Great choice! How many years of experience do you have in that field?`,
  onsite: `Our roles are based at our office in Clark Freeport Zone, Pampanga. Are you able to work on-site? (Yes / No)`,
  salary: `Perfect! 💰 What's your expected monthly salary in Philippine Pesos? (e.g. ₱25,000)`,
  cv_prompt: `Almost there! 📄 Please upload your CV or resume as a file, or paste a link to your LinkedIn profile or online CV.\n\nWe'll review it and get back to you within 1-2 business days!`,
  done: `🎉 You're all set! I've received your application and it's been sent to our recruitment team.\n\nHere's what happens next:\n✅ Our team reviews your profile\n📞 If you're a match, we'll reach out to schedule an interview\n⏱️ Typical turnaround: 1-2 business days\n\nIn the meantime, check out our careers site: https://shoreagents-careers.com\n\nTake care and good luck! 🧡 — Unika`,
}

// ── Helpers ────────────────────────────────────────────────────────────────
async function sendMessage(psid: string, text: string) {
  await fetch(
    `https://graph.facebook.com/v19.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        recipient: { id: psid },
        message: { text },
        messaging_type: 'RESPONSE',
      }),
    }
  )
}

async function pushToClickUp(data: Record<string, string>, psid: string) {
  const description = `
📋 NEW CANDIDATE — Facebook Messenger

👤 Name: ${data.name || 'N/A'}
💼 Role Interest: ${data.role || 'N/A'}
📅 Experience: ${data.experience || 'N/A'} years
📍 On-site (Clark): ${data.onsite || 'N/A'}
💰 Expected Salary: ${data.salary || 'N/A'}
📄 CV/LinkedIn: ${data.cv || 'Not provided'}

🔗 Facebook PSID: ${psid}
📅 Applied: ${new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' })}

Source: ShoreAgents Careers Facebook Messenger Bot
  `.trim()

  await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`, {
    method: 'POST',
    headers: {
      Authorization: CLICKUP_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: `FB Messenger — ${data.name || 'Unknown'} — ${data.role || 'General'}`,
      description,
      status: 'to do',
      priority: 2,
      tags: ['facebook', 'messenger', 'careers'],
    }),
  })
}

function getSession(psid: string) {
  if (!sessions[psid]) {
    sessions[psid] = { step: 0, data: {} }
  }
  return sessions[psid]
}

// ── GET — Facebook webhook verification ───────────────────────────────────
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Webhook verified!')
    return new NextResponse(challenge, { status: 200 })
  }
  return new NextResponse('Forbidden', { status: 403 })
}

// ── POST — Handle incoming messages ───────────────────────────────────────
export async function POST(req: NextRequest) {
  const body = await req.json()

  if (body.object !== 'page') {
    return NextResponse.json({ status: 'not a page event' }, { status: 200 })
  }

  for (const entry of body.entry || []) {
    for (const event of entry.messaging || []) {
      const psid = event.sender?.id
      if (!psid) continue

      // Handle postback (Get Started button)
      if (event.postback?.payload === 'GET_STARTED') {
        sessions[psid] = { step: 0, data: {} }
        await sendMessage(psid, QUESTIONS.name)
        continue
      }

      // Handle message
      if (event.message) {
        const session = getSession(psid)
        const step = STEPS[session.step]
        const msg = event.message

        // Handle CV file attachment
        if (step === 'cv_prompt' && msg.attachments?.length > 0) {
          const url = msg.attachments[0]?.payload?.url || 'File attached'
          session.data.cv = url
          session.step++
          await sendMessage(psid, QUESTIONS.done)
          await pushToClickUp(session.data, psid)
          continue
        }

        // Handle text
        const text = msg.text?.trim()
        if (!text) continue

        // Store answer for current step
        if (step === 'name') session.data.name = text
        else if (step === 'role') session.data.role = text
        else if (step === 'experience') session.data.experience = text
        else if (step === 'onsite') {
          // Gate on onsite — if no, politely exit
          if (text.toLowerCase().startsWith('n')) {
            await sendMessage(
              psid,
              `Thanks for your interest ${session.data.name}! 🧡 Unfortunately our current roles require on-site work in Clark Freeport Zone. We'll keep you in mind if remote roles become available. Check our site for updates: https://shoreagents-careers.com`
            )
            delete sessions[psid]
            continue
          }
          session.data.onsite = 'Yes'
        } else if (step === 'salary') session.data.salary = text
        else if (step === 'cv_prompt') session.data.cv = text // they pasted a link

        session.step++
        const nextStep = STEPS[session.step]

        if (nextStep === 'done') {
          await sendMessage(psid, QUESTIONS.done)
          await pushToClickUp(session.data, psid)
        } else {
          await sendMessage(psid, QUESTIONS[nextStep])
        }
      }
    }
  }

  return NextResponse.json({ status: 'ok' }, { status: 200 })
}
