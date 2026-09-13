export function whatsappLink(message) {
  return `https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent(message)}`
}

import { RESTAURANT } from '../data.js'