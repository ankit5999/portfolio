import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/scroll.css";
import "@/styles/shadow.css";
import "@/styles/animation.css";
import { GoogleFonts } from "@/fonts";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";
import { NavContextProvider } from "@/context/navContext";
import Cursor from "@/components/layout/cursor";
import ChatBot from "@/components/bot/chat";
import BotWarning from "@/components/bot/warning";
import PWANotification from "@/components/notifications/pwa-notifications";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Ankit Kumar",
  description: "Hi 👋, I'm Ankit Kumar, a results-driven Product Manager dedicated to creating applications that simplify life. Specializing in healthcare, education, and fitness, I thrive on solving real-world challenges.",
  generator: 'ankit.workforwin.com',
  applicationName: 'Ankit Kumar',
  referrer: 'origin-when-cross-origin',
  keywords: ['Ankit', 'Ankit Kumar', 'Ankit Yadav', 'Google', 'Portfolio', 'Ankit Kumar Portfolio', 'Ankit Kumar Product Manager', 'Ankit Kumar Linkedin', 'Workforwin', 'Founder of Workforwin'],
  authors: [{ name: 'Ankit Kumar', url: 'https://ankit.workforwin.com' }],
  creator: 'Ankit Kumar',
  publisher: 'Ankit Kumar',
  metadataBase: new URL('https://ankit.workforwin.com'),
  manifest: "/manifest.json",
  icons: {
    icon: '/icon.svg',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    },
  },
  openGraph: {
    title: "Ankit Kumar",
    description: "Hi 👋, I'm Ankit Kumar, a results-driven Product Manager dedicated to creating applications that simplify life. Specializing in healthcare, education, and fitness, I thrive on solving real-world challenges.",
    url: "https://ankit.workforwin.com", // Add your website URL
    type: "website", // Defines the type of content
    images: [
      {
        url: "https://ankit.workforwin.com/assets/images/social_banner.png", // Use an absolute URL
        width: 1200, // Standard for social previews
        height: 630, // Ensures proper aspect ratio
        alt: "Ankit Kumar - Product Manager" // Accessibility benefit
      }
    ]
  }

};

// ✅ Export viewport separately
export const viewport = {
  themeColor: "#f4f5ef",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${GoogleFonts.inter.className} antialiased`} style={{ scrollBehavior: 'smooth' }}
        id="gray_scroll"
      >
        <NavContextProvider>
          <BotWarning />
          <Cursor />
          <Header />
          {children}
          <Toaster />
          <ChatBot />
          <PWANotification />
          <Analytics />
          <SpeedInsights />
        </NavContextProvider>
      </body>
    </html>
  );
}
