import { NextRequest, NextResponse } from 'next/server';

const CLICKUP_TOKEN = 'pk_12704501_FTWRQ2IXJ7NJX5WOPDXKAI5DQAXM5KQO';
const CLICKUP_LIST_ID = '187709500'; // Matchmakers — ShoreAgents Careers Cycle

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, position, experience, message } = body;

    if (!name || !email || !position) {
      return NextResponse.json({ error: 'Name, email and position are required.' }, { status: 400 });
    }

    const description = `
**📋 Website Application — ShoreAgents Careers**

**Name:** ${name}
**Email:** ${email}
**Phone:** ${phone || 'Not provided'}
**Position Applied For:** ${position}
**Years of Experience:** ${experience || 'Not specified'}

**Cover Message:**
${message || 'No message provided.'}

---
*Submitted via shoreagents-careers website*
    `.trim();

    const task = {
      name: `[Website] ${name} — ${position}`,
      description,
      status: 'to do',
      priority: 3,
      tags: ['website-application'],
      custom_fields: [],
    };

    const response = await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`, {
      method: 'POST',
      headers: {
        Authorization: CLICKUP_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('ClickUp error:', data);
      return NextResponse.json({ error: 'Failed to submit application. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Application submitted successfully!' });
  } catch (err) {
    console.error('Apply API error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
