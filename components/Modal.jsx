'use client'
import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'

export default function Modal({ children, title }) {
  const router = useRouter()
  const onClose = () => router.back()
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white dark:bg-zinc-900 w-full max-w-3xl mx-4 rounded-2xl shadow-2xl p-6">
        <button
          aria-label="Bağla"
          onClick={onClose}
          className="absolute -top-3 -right-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-zinc-800 shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* dekorativ blur fond */}
        <div className="pointer-events-none absolute -inset-6 -z-10">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-fuchsia-500 via-rose-400 to-amber-300"></div>
        </div>

        {title ? <h2 className="text-2xl font-semibold mb-4">{title}</h2> : null}
        {children}
      </div>
    </div>
  )
}
