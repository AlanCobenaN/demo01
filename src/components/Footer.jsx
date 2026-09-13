import { RESTAURANT } from '../data.js'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#menu', label: 'Menú' },
  { href: '#galeria', label: 'Galería' },
  { href: '#resenas', label: 'Reseñas' },
  { href: '#ubicacion', label: 'Ubicación' },
]

const socials = [
  {
    href: `https://instagram.com/${RESTAURANT.instagram}`,
    label: 'Instagram',
    Icon: InstagramIcon,
  },
  {
    href: `https://facebook.com/${RESTAURANT.facebook}`,
    label: 'Facebook',
    Icon: FacebookIcon,
  },
  { href: '#inicio', label: 'X', Icon: XIcon },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-8">
          <a href="#inicio" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-xl shadow-lg shadow-brand-500/30">
              🔥
            </span>
            <span className="font-display text-xl font-bold text-slate-900 dark:text-white">
              {RESTAURANT.name}
            </span>
          </a>

          <p className="max-w-xl text-center text-sm text-slate-600 dark:text-slate-400">
            {RESTAURANT.tagline}. Demo de portafolio — Creado con Vite, React y
            Tailwind CSS.
          </p>

          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-500 hover:text-white dark:bg-slate-800 dark:text-slate-300"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
          © {new Date().getFullYear()} {RESTAURANT.name}. Todos los derechos
          reservados. Demo 01 — Restaurante.
        </div>
      </div>
    </footer>
  )
}