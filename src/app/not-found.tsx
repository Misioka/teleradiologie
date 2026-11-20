import Link from 'next/link'

import { buttonClass } from '@/components/button-styles'
import { messages } from '@/i18n/cs'

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="text-6xl font-bold">404</p>
        <h1 className="mt-4 text-xl font-semibold">{messages.notFound.title}</h1>
        <Link className={`mt-6 ${buttonClass()}`} href="/">
          {messages.notFound.home}
        </Link>
      </div>
    </main>
  )
}
