import { ArrowLeft, FileSpreadsheet, ScanLine, ShieldCheck, Smartphone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { buttonClass } from '@/components/button-styles'
import { messages } from '@/i18n/cs'
import { leafletImage, pageMetadata, siteDomain } from '@/lib/site'

import { PrintButton } from './print-button'

const { leaflet, modalities } = messages
const benefitIcons = [ScanLine, Smartphone, ShieldCheck, FileSpreadsheet] as const

export const metadata = {
  ...pageMetadata(leaflet, '/letak'),
  robots: { index: false },
}

export default function LeafletPage() {
  return (
    <main className="leaflet-page">
      <nav aria-label={leaflet.navLabel} className="leaflet-toolbar">
        <Link className={buttonClass('ghost')} href="/">
          <ArrowLeft aria-hidden /> {leaflet.back}
        </Link>
        <span className="font-mono text-xs text-muted-foreground">{leaflet.dimensions}</span>
        <PrintButton label={leaflet.print} />
      </nav>
      <article aria-label={leaflet.label} className="a5-leaflet">
        <header className="leaflet-header">
          <Image alt={leaflet.imageAlt} fill preload src={leafletImage} unoptimized />
          <div className="leaflet-header-content">
            <div className="leaflet-brand">
              <ScanLine aria-hidden size={19} /> {messages.brand}
            </div>
            <p className="leaflet-eyebrow">{leaflet.eyebrow}</p>
            <h1>
              {leaflet.headline[0]}
              <br />
              <span>{leaflet.headline[1]}</span>
            </h1>
            <p className="leaflet-intro">{leaflet.intro}</p>
          </div>
        </header>
        <div className="leaflet-modalities">
          {modalities.map((modality) => (
            <span key={modality}>{modality}</span>
          ))}
          <span className="leaflet-modality-caption">{leaflet.modalityCaption}</span>
        </div>
        <section className="leaflet-benefits">
          <p className="leaflet-eyebrow">{leaflet.benefitsLabel}</p>
          <h2>{leaflet.benefitsTitle}</h2>
          <div className="leaflet-benefit-grid">
            {leaflet.benefits.map(([title, detail], index) => {
              const Icon = benefitIcons[index]
              return (
                <div className="leaflet-benefit" key={title}>
                  <Icon aria-hidden size={24} />
                  <div>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
        <section className="leaflet-responsibility">
          <ShieldCheck aria-hidden size={23} />
          <p>
            <strong>{leaflet.responsibilityTitle}</strong>
            <br />
            {leaflet.responsibility}
          </p>
        </section>
        <footer className="leaflet-footer">
          <div className="leaflet-footer-detail">
            <p>
              {leaflet.footerDetail[0]}
              <br />
              {leaflet.footerDetail[1]}
            </p>
            <span>{siteDomain}</span>
          </div>
        </footer>
      </article>
    </main>
  )
}
