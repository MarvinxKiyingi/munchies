import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const sfProText = localFont({
  src: './fonts/SF-Pro.ttf',
  variable: '--font-sf-pro-text',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Munchies',
  description:
    'This web app lets users discover restaurants through a filterable list view. Users can apply and remove multiple filters to customize their search instantly.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${sfProText.variable}`}>{children}</body>
    </html>
  );
}
