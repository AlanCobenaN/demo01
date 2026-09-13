import { Clock, MapPin, MessageCircle, ShoppingCart, Star } from 'lucide-react'
import { RESTAURANT } from '../data.js'
import { whatsappLink } from '../lib/whatsapp.js'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=2000&auto=format&fit=crop"
          alt="Ceviche fresco de camarón"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-24 pt-32 sm:px-6">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-sm font-medium text-amber-300 backdrop-blur-sm">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            4.9 · +1,800 reseñas · Puerto de Manta
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            Sabores del Pacífico,
            <span className="block bg-gradient-to-r from-amber-300 via-brand-400 to-brand-600 bg-clip-text text-transparent">
              frescos cada día
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300 sm:text-xl">
            {RESTAURANT.tagline}. Ceviches, encebollado y cocina manabita con
            fuego real, directo del puerto a tu mesa.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={whatsappLink(RESTAURANT.whatsappText)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-brand-500/40 transition hover:-translate-y-0.5 hover:brightness-110 active:scale-95"
            >
              <ShoppingCart className="h-5 w-5" />
              Pedir ahora
            </a>
            <a
              href="#menu"
              className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-95"
            >
              Ver menú
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-400" />
              {RESTAURANT.address}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-400" />
              Hoy 10:00 – 22:00
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-brand-400" />
              Pedidos por WhatsApp
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-brand-500 to-brand-700" />
    </section>
  )
}