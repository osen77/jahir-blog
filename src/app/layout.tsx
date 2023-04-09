import { Inter, Manrope } from 'next/font/google';
import '@/styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  preload: true,
  variable: '--font-inter',
  display: 'fallback',
});

const manrope = Manrope({
  subsets: ['latin'],
  preload: true,
  variable: '--font-manrope',
  display: 'fallback',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={'en'} className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
