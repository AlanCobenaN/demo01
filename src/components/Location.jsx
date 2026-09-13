import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { hours, RESTAURANT } from '../data.js'

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400">
            <MapPin className="h-4 w-4" />
            Ubicación & horarios
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
            Visítanos o pide a domicilio
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Estamos en el corazón de la ciudad. Contáctanos y encuentra cómo
            llegar.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-slate-900 dark:text-white">
                <Clock className="h-5 w-5 text-brand-500" />
                Horarios
              </h3>
              <ul className="mt-4 divide-y divide-slate-100 dark:divide-slate-700">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-3 text-sm"
                  >
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {h.day}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-xl bg-brand-500/10 px-4 py-2.5 text-sm font-medium text-brand-700 dark:text-brand-400">
                Abierto hoy — pide ya por WhatsApp
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Contacto
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <MapPin className="h-4 w-4" />
                  </span>
                  {RESTAURANT.address}
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <Phone className="h-4 w-4" />
                  </span>
                  {RESTAURANT.phone}
                </li>
                <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <Mail className="h-4 w-4" />
                  </span>
                  {RESTAURANT.email}
                </li>
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm lg:col-span-3 dark:border-slate-700">
            <iframe
              title="Mapa de Sabor & Brasa"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-99.1600%2C19.4200%2C-99.1300%2C19.4400&layer=mapnik&marker=19.4300%2C-99.1450"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}