import { useState } from 'react'
import {
  CupSoda,
  Fish,
  Flame,
  IceCreamBowl,
  ShoppingCart,
  Tag,
  Utensils,
} from 'lucide-react'
import { menus, RESTAURANT } from '../data.js'
import { whatsappLink } from '../lib/whatsapp.js'

const categoryIcons = {
  Fish,
  Utensils,
  Flame,
  CupSoda,
  IceCreamBowl,
}

function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}

export default function Menu() {
  const [active, setActive] = useState(menus[0].id)
  const category = menus.find((c) => c.id === active)

  return (
    <section id="menu" className="bg-slate-50 py-20 sm:py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400">
            <Flame className="h-4 w-4" />
            Nuestro menú
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
            Sabores que se preparan al momento
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Pescado y marisco fresco del día. Elige tu platillo y ordénalo por
            WhatsApp. Precios en dólares.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {menus.map((c) => {
            const Icon = categoryIcons[c.icon]
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition active:scale-95 ${
                  active === c.id
                    ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/30'
                    : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="h-5 w-5" />
                {c.label}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-brand-500/50"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  {item.name}
                </h3>
                <span className="shrink-0 rounded-full bg-brand-500/10 px-3 py-1 font-bold text-brand-600 dark:bg-brand-400/10 dark:text-brand-400">
                  {formatPrice(item.price)}
                </span>
              </div>

              {item.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                    >
                      <Tag className="h-3 w-3" />
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.description}
              </p>

              <button
                onClick={() =>
                  window.open(
                    whatsappLink(
                      `Hola ${RESTAURANT.name}! Quiero ordenar: ${item.name} (${formatPrice(item.price)})`
                    ),
                    '_blank'
                  )
                }
                className="mt-5 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-900 py-2.5 text-sm font-semibold text-white transition group-hover:bg-gradient-to-r group-hover:from-brand-500 group-hover:to-brand-600 active:scale-95 dark:bg-slate-700"
              >
                <ShoppingCart className="h-4 w-4" />
                Ordenar por WhatsApp
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}