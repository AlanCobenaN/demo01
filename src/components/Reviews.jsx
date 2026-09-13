import { Quote, Star } from 'lucide-react'
import { reviews } from '../data.js'

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'text-slate-300 dark:text-slate-600'
          }`}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section
      id="resenas"
      className="bg-slate-50 py-20 sm:py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400">
            <Quote className="h-4 w-4" />
            Reseñas
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
            Lo que dicen nuestros clientes
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-lg text-slate-600 dark:text-slate-400">
            <Stars rating={5} />
            <span className="font-bold text-slate-900 dark:text-white">4.9</span>
            · +2,500 reseñas en Google y Facebook
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 font-bold text-white">
                  {r.avatar}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {r.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {r.date}
                  </p>
                </div>
                <span className="ml-auto">
                  <Stars rating={r.rating} />
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {r.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}