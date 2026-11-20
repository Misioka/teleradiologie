import { messages } from '@/i18n/cs'

import type { Metadata } from 'next'

export const siteDomain = 'vzdalenypopis.cz'
export const heroImage = '/hero.png'
export const leafletImage = '/xray-lupa-hero.jpg'

export function pageMetadata(
  { title, description }: { title: string; description: string },
  pathname: string,
): Metadata {
  const metadataBase = new URL(`https://${siteDomain}`)
  const url = new URL(pathname, metadataBase)

  return {
    metadataBase,
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: messages.brand, type: 'website', locale: 'cs_CZ' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export function contactMailLink() {
  const address = process.env.CONTACT_EMAIL?.trim() || `info@${siteDomain}`
  return `mailto:${address}`
}
