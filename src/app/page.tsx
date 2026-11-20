import {
  ArrowDown,
  ArrowUpRight,
  CalendarClock,
  Check,
  Cloud,
  FileSpreadsheet,
  KeyRound,
  Lock,
  MonitorSmartphone,
  Moon,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Sun,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { buttonClass } from '@/components/button-styles'
import { messages } from '@/i18n/cs'
import { contactMailLink, heroImage, pageMetadata, siteDomain } from '@/lib/site'

const { home, modalities } = messages
const useIcons = [Sun, CalendarClock, Moon, Stethoscope] as const
const pillarIcons = [MonitorSmartphone, Smartphone, ShieldCheck, FileSpreadsheet] as const
const platformIcons = [Cloud, Lock, KeyRound] as const

export const metadata = pageMetadata(home, '/')

function BrandLink() {
  return (
    <Link className="site-brand" href="/">
      <ScanLine aria-hidden />
      <span>{messages.brand}</span>
    </Link>
  )
}

function SectionHeading({ label, lines, intro }: { label: string; lines: readonly [string, string]; intro?: string }) {
  return (
    <>
      <p className="site-eyebrow">{label}</p>
      <h2>
        {lines[0]}
        <br />
        {lines[1]}
      </h2>
      {intro && <p>{intro}</p>}
    </>
  )
}

export default function HomePage() {
  const mail = contactMailLink()

  return (
    <div className="modern-site">
      <header className="site-header">
        <div className="site-container header-inner">
          <BrandLink />
          <nav aria-label={home.navLabel} className="site-nav">
            <a className={buttonClass()} href={mail}>
              {home.contact} <ArrowUpRight aria-hidden />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="site-hero">
          <div className="site-container hero-inner">
            <p className="site-eyebrow hero-eyebrow">
              <span />
              {home.eyebrow}
            </p>
            <h1>
              {home.headline[0]}
              <br />
              {home.headline[1]}
              <br />
              {home.headline[2]}
              <span className="hero-period">.</span>
            </h1>
            <p className="hero-modalities">{home.modalityIntro}</p>
            <p className="hero-copy">{home.intro}</p>
            <div className="hero-actions">
              <a className={buttonClass('primary', true)} href={mail}>
                {home.contact} <ArrowUpRight aria-hidden />
              </a>
            </div>
            <div className="hero-bottom">
              <span>{home.heroFooter}</span>
              <ArrowDown aria-hidden size={20} />
            </div>
          </div>
          <div className="site-hero-artwork">
            <Image alt={home.imageAlt} className="site-hero-photo" fill preload src={heroImage} unoptimized />
            <div className="site-hero-shade" />
          </div>
        </section>

        <div className="modality-band">
          <div className="site-container modality-inner">
            <span>
              {home.oneSystem}
              <br />
              <strong>{home.allModalities}</strong>
            </span>
            <div>
              {modalities.map((modality) => (
                <span key={modality}>{modality}</span>
              ))}
            </div>
            <ScanLine aria-hidden />
          </div>
        </div>

        <section className="site-container site-section">
          <div className="section-heading">
            <SectionHeading label={home.usesLabel} lines={home.usesTitle} />
          </div>
          <div className="use-grid">
            {home.uses.map(([title, detail], index) => {
              const Icon = useIcons[index]
              return (
                <article className="use-item" key={title}>
                  <Icon aria-hidden size={30} />
                  <span className="item-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="reasons-band">
          <div className="site-container site-section">
            <div className="section-heading">
              <SectionHeading label={home.reasonsLabel} lines={home.reasonsTitle} />
            </div>
            <div className="reason-list">
              {home.reasons.map(([title, problem, solution], index) => (
                <article className="reason-row" key={title}>
                  <span className="reason-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{problem}</p>
                  </div>
                  <div className="reason-solution">
                    <span>
                      <Check aria-hidden size={18} /> {home.solution}
                    </span>
                    <p>{solution}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="platform-band">
          <div className="site-container site-section">
            <div className="section-heading">
              <SectionHeading label={home.platformLabel} lines={home.platformTitle} />
              <div className="platform-labels">
                {home.platformTags.map((tag, index) => {
                  const Icon = platformIcons[index]
                  return (
                    <span key={tag}>
                      <Icon aria-hidden /> {tag}
                    </span>
                  )
                })}
              </div>
            </div>
            <div className="pillar-grid">
              {home.pillars.map(([title, detail], index) => {
                const Icon = pillarIcons[index]
                return (
                  <article key={title}>
                    <Icon aria-hidden size={30} />
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </article>
                )
              })}
            </div>
            <div className="responsibility-note">
              <ShieldCheck aria-hidden size={32} />
              <div>
                <h3>{home.responsibilityTitle}</h3>
                <p>{home.responsibility}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="site-container site-section comparison-section" id="srovnani">
          <div className="section-heading">
            <SectionHeading intro={home.comparisonIntro} label={home.comparisonLabel} lines={home.comparisonTitle} />
          </div>
          <div className="comparison-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">{home.columns[0]}</th>
                  <th scope="col">{home.columns[1]}</th>
                  <th scope="col">
                    {home.columns[2]} <ArrowUpRight aria-hidden size={20} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {home.rows.map(([area, external, software]) => (
                  <tr key={area}>
                    <th scope="row">{area}</th>
                    <td>{external}</td>
                    <td>
                      <Check aria-hidden size={16} />
                      <span>{software}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="contact-band">
          <div className="site-container contact-inner">
            <p className="site-eyebrow">{home.contactLabel}</p>
            <h2>{home.contactTitle}</h2>
            <p>{home.contactIntro}</p>
            <a className={buttonClass('primary', true)} href={mail}>
              {home.bookDemo} <ArrowUpRight aria-hidden />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer site-container">
        <BrandLink />
        <span>{siteDomain}</span>
      </footer>
    </div>
  )
}
