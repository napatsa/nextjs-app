import './globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Providers from '@/utils/providers';
import { headers } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const headersList = headers();
  // const pathname = headersList.get('x-invoke-path') || '';

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* {pathname === '/' ? (
            <nav className="bg-white text-black text-opacity-80 p-5 flex justify-between items-center mb-5">
              navigation bar
            </nav>
          ) : (
            <nav className="bg-white text-black text-opacity-80 p-5 flex justify-between items-center mb-5">
              dashboard navigation bar
            </nav>
          )} */}
          <div className="m-auto max-w-screen-xl">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
