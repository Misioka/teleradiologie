import { locale } from '@/i18n/cs'

import type { ReactNode } from 'react'
import '@fontsource-variable/manrope'
import '@fontsource/ibm-plex-mono/500.css'
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/500.css'
import '@fontsource/ibm-plex-sans/600.css'
import '@fontsource/ibm-plex-sans/700.css'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  )
}
