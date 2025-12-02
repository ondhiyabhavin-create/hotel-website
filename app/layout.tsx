import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Avyay Group of Hotels - Luxury Hotels',
  description: 'Discover your perfect getaway at our collection of luxury hotels',
  icons: {
    icon: '/hotel.jpg',
    apple: '/hotel.jpg',
    shortcut: '/hotel.jpg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

