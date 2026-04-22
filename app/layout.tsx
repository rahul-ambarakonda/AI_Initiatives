import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Initiatives - Digital Engineering & Quality',
  description: 'Transform complex digital implementations with our Digital Engineering and Quality (DEQ) team. AI-powered solutions for design, CAD, code quality, document management, and vendor performance.',
  keywords: 'Digital Engineering, Quality, DEQ, AI, Transformation, CAD, CodeLens, Document Management',
  creator: 'AI Initiatives',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'DEQ - Digital Engineering & Quality',
    description: 'AI-powered transformation for complex digital implementations',
    type: 'website',
    siteName: 'AI Initiatives',
    images: [
      {
        url: '/logo.png',
        width: 400,
        height: 320,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
