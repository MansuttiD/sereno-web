import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import HeaderPrincipal from '../components/shared/HeaderPrincipal';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SerenoApp',
  description: 'Exchange App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script async defer src="/fb-pixel.js" />
      </head>
      <body className={inter.className}>
      <HeaderPrincipal  />
        {children}
        </body>
    </html>
  );
}
