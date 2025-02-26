import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankit Kumar Resume",
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
    canonical: '/resume',
    languages: {
      'en-US': '/en-US'
    },
  },
  openGraph: {
    title: "Ankit Kumar Resume",
    description: "Hi 👋, I'm Ankit Kumar, a results-driven Product Manager dedicated to creating applications that simplify life. Specializing in healthcare, education, and fitness, I thrive on solving real-world challenges.",
    url: "https://ankit.workforwin.com", // Add your website URL
    type: "website", // Defines the type of content
    images: [
      {
        url: "https://ankit.workforwin.com/assets/images/resume_banner.png", // Use an absolute URL
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
   <>
      {children}
    </>
  );
}
