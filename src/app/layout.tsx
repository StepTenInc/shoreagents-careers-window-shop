import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "ShoreAgents Careers - Building Brighter Futures",
  description: "Join the ShoreAgents team in Clark Freeport Zone, Philippines. Explore exciting career opportunities in real estate, healthcare, legal, and more.",
  keywords: "ShoreAgents, careers, jobs, BPO, Philippines, Clark, Pampanga, remote work",
  openGraph: {
    title: "ShoreAgents Careers - Building Brighter Futures",
    description: "Join the ShoreAgents team. Explore exciting career opportunities in Clark Freeport Zone, Philippines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#070a12] text-white`}>
        <Header />
        <main className="min-h-screen pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
