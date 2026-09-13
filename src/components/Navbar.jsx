import { useEffect, useState } from 'react'
import { Flame, Menu, Moon, ShoppingCart, Sun, X } from 'lucide-react'
import { RESTAURANT } from '../data.js'
import { whatsappLink } from '../lib/whatsapp.js'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#menu', label: 'Menú' },
  { href: '#galeria', label: 'Galería' },
  { href: '#resenas', label: 'Reseñas' },
  { href: '#ubicacion', label: 'Ubicación' },
]

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-lg shadow-black/5 backdrop-blur-md dark:bg-slate-950/90'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-xl shadow-lg shadow-brand-500/30">
            <Flame className="h-5 w-5 text-white" />
          </span>
          <span className="font-display text-xl font-bold text-slate-900 dark:text-white">
            {RESTAURANT.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:scale-105 hover:border-brand-400 hover:text-brand-600 active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-amber-300 dark:hover:border-amber-400"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <a
            href={whatsappLink(RESTAURANT.whatsappText)}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-4 py-2 font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:brightness-110 active:scale-95 sm:flex"
          >
            <ShoppingCart className="h-4 w-4" />
            Pedir ahora
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink(RESTAURANT.whatsappText)}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-4 py-2.5 font-semibold text-white shadow-lg shadow-brand-500/30"
            >
              <ShoppingCart className="h-4 w-4" />
              Pedir ahora
            </a>
          </div>
        </div>
      )}
    </header>
  )
}