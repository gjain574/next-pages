'use client';

import "./globals.css";
import Sidebar from '@/components/sidebar/Sidebar'
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isBlogPost = pathname?.startsWith('/blog/') && pathname !== '/blog';

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {!isBlogPost && <Sidebar />}
          <main className={`flex-1 overflow-y-auto h-screen flex flex-col items-center p-2 ${!isBlogPost ? 'px-24' : 'px-4 bg-gray-light'}`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
