import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Double You',
  description: 'The Second You — Create Anything Instantly',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
