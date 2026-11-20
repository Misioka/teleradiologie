'use client'

import { Printer } from 'lucide-react'

import { buttonClass } from '@/components/button-styles'

export function PrintButton({ label }: { label: string }) {
  return (
    <button className={buttonClass()} onClick={() => window.print()} type="button">
      <Printer aria-hidden /> {label}
    </button>
  )
}
