import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Satyam Trader - Premium Binary Trading Journal',
  description: 'Advanced trading journal with OCR analysis, psychological tracking, and AI coaching',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gradient-to-br from-glass-dark via-glass-light to-glass-dark min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-glass-dark via-glass-light to-glass-dark blur-3xl opacity-40 pointer-events-none" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
