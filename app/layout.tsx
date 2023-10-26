import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
// import { font } from '@/lib/font'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ModalProvider } from '@/components/providers/modal-provider'

const font = Open_Sans({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Team Chat Application',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html
        lang='en'
        suppressHydrationWarning={true}
      >
        <body className={cn(font.className, 'bg-white dark:bg-[#313338]')}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem={true}
            storageKey='voxhub-theme'
          >
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
