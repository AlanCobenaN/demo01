import { Camera } from 'lucide-react'
import { gallery } from '../data.js'

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400">
            <Camera className="h-4 w-4" />
            Galería
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
            Un festín para los ojos
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Así se ve lo que se cocina en nuestras parrillas, todos los días.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((img, i) => (
            <figure
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl ${
                i % 3 === 0 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full min-h-56 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm font-semibold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}