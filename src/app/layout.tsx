import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Logo from './icons/Logo/Logo';

const sfProText = localFont({
  src: [
    {
      path: './fonts/SF-Pro.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SF-Pro.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-sf-pro-text',
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
      <body className={`${sfProText.variable} `}>
        <section className='flex pt-40 px-24 lg:px-40'>
          <Logo />
        </section>
        {children}
      </body>
    </html>
  );
}
