export const RESTAURANT = {
  name: 'Mar & Brasa',
  tagline: 'Pescados y mariscos frescos del Pacífico',
  whatsapp: '593981234567',
  whatsappText: 'Hola Mar & Brasa! Quiero hacer un pedido.',
  address: 'Av. Flavio Reyes y Calle 24, Manta, Ecuador',
  phone: '+593 98 123 4567',
  email: 'hola@marybrasa.com',
  instagram: 'marybrasa',
  facebook: 'marybrasa',
}

export const menus = [
  {
    id: 'ceviches',
    label: 'Ceviches',
    icon: 'Fish',
    items: [
      {
        name: 'Ceviche de Camarón',
        description:
          'Camarón fresco de Manta marinado en limón, cebolla morada y ajo. Con chifles crujientes.',
        price: 8.5,
        tags: ['Más pedido'],
      },
      {
        name: 'Ceviche Mixto',
        description: 'Camarón, corvina y concha, con el sello manabita.',
        price: 10,
        tags: ['Estrella'],
      },
      {
        name: 'Ceviche de Corvina',
        description: 'Pescado del día en leche de tigre de limón y cilantro.',
        price: 7.5,
        tags: [],
      },
      {
        name: 'Ceviche de Concha',
        description: 'Concha prieta fresca, receta tradicional de la costa.',
        price: 7,
        tags: ['Manabita'],
      },
      {
        name: 'Ceviche en Canoa',
        description: 'En mitad de aguacate, con chifles y ají.',
        price: 5,
        tags: [],
      },
    ],
  },
  {
    id: 'fuertes',
    label: 'Platos Fuertes',
    icon: 'Utensils',
    items: [
      {
        name: 'Encebollado de Pescado',
        description: 'La sopa manabita por excelencia, con yuca, cebolla y ají.',
        price: 4.5,
        tags: ['Más pedido'],
      },
      {
        name: 'Corvina a la Plancha',
        description: 'Con arroz, patacones y ensalada fresca.',
        price: 9.5,
        tags: [],
      },
      {
        name: 'Pescado Frito Entero',
        description: 'Corvina frita crujiente, con patacones y curtido.',
        price: 10,
        tags: [],
      },
      {
        name: 'Arroz con Mariscos',
        description: 'Camarón, concha y calamar en arroz criollo.',
        price: 8.5,
        tags: ['Especialidad'],
      },
      {
        name: 'Cangrejo Estofado',
        description: 'Cangrejo manaba en salsa de tomate y especias.',
        price: 12.5,
        tags: ['Para compartir'],
      },
      {
        name: 'Bolón de Verde',
        description: 'Con chicharrón y queso, salsa de maní.',
        price: 4,
        tags: ['Manabita'],
      },
    ],
  },
  {
    id: 'parrilla',
    label: 'Parrilla',
    icon: 'Flame',
    items: [
      {
        name: 'Pulpo a la Brasa',
        description: 'Tierno y ahumado, con alioli de ajo y papas.',
        price: 11,
        tags: ['Premium'],
      },
      {
        name: 'Camarones a la Parrilla',
        description: 'Con mantequilla de ajo y un toque de limón.',
        price: 9.5,
        tags: [],
      },
      {
        name: 'Brocheta de Corvina',
        description: 'Con pimientos, cebolla y chimichurri.',
        price: 8,
        tags: [],
      },
      {
        name: 'Churrasco',
        description: 'Con patacones, huevo frito y arroz.',
        price: 8,
        tags: [],
      },
      {
        name: 'Pollo a la Brasa',
        description: 'Media pieza con papas al romero.',
        price: 6,
        tags: [],
      },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    icon: 'CupSoda',
    items: [
      {
        name: 'Agua de Coco',
        description: 'Directo del coco, servida bien fría.',
        price: 2.5,
        tags: [],
      },
      {
        name: 'Jugo de Maracuyá',
        description: 'Natural, endulzado a punto.',
        price: 3,
        tags: ['Nacional'],
      },
      {
        name: 'Limonada con Hierbabuena',
        description: 'Refrescante y natural.',
        price: 3,
        tags: [],
      },
      {
        name: 'Cerveza Pilsener',
        description: 'La clásica cerveza ecuatoriana.',
        price: 2.75,
        tags: ['Nacional'],
      },
      {
        name: 'Cóctel de Frutas',
        description: 'Frutas tropicales de temporada.',
        price: 3.5,
        tags: [],
      },
      {
        name: 'Café de la Casa',
        description: 'Café ecuatoriano recién colado.',
        price: 1.5,
        tags: [],
      },
    ],
  },
  {
    id: 'postres',
    label: 'Postres',
    icon: 'IceCreamBowl',
    items: [
      {
        name: 'Espumilla de Guayaba',
        description: 'Merengue suave con guayaba, tradición de Manta.',
        price: 2.5,
        tags: ['Manabita'],
      },
      {
        name: 'Helado de Coco',
        description: 'Hecho en casa, cremoso y refrescante.',
        price: 2,
        tags: [],
      },
      {
        name: 'Dulce de Higos con Queso',
        description: 'Clásico de la costa ecuatoriana.',
        price: 2.5,
        tags: [],
      },
      {
        name: 'Tres Leches',
        description: 'Bizcocho húmedo con tres leches y canela.',
        price: 3,
        tags: ['Favorito'],
      },
      {
        name: 'Babaco con Miel',
        description: 'Cocido con panela y toques de especias.',
        price: 2,
        tags: [],
      },
    ],
  },
]

export const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=800&auto=format&fit=crop',
    alt: 'Ceviche fresco de camarón',
    label: 'Ceviche de camarón',
  },
  {
    src: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=800&auto=format&fit=crop',
    alt: 'Corvina a la plancha',
    label: 'Corvina a la plancha',
  },
  {
    src: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=800&auto=format&fit=crop',
    alt: 'Camarones a la parrilla',
    label: 'Camarones a la parrilla',
  },
  {
    src: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=800&auto=format&fit=crop',
    alt: 'Pescado del día braseado',
    label: 'Pescado del día',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    alt: 'Terraza con ambiente marino',
    label: 'Nuestra terraza',
  },
  {
    src: 'https://images.unsplash.com/photo-1560053608-13721e0d69e8?q=80&w=800&auto=format&fit=crop',
    alt: 'Coctelería tropical',
    label: 'Coctelería fresca',
  },
  {
    src: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop',
    alt: 'Especialidades del mar',
    label: 'Especialidades de mar',
  },
  {
    src: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=800&auto=format&fit=crop',
    alt: 'Recetas de la costa',
    label: 'Recetas de la costa',
  },
]

export const reviews = [
  {
    name: 'María Fernanda',
    avatar: 'MF',
    rating: 5,
    date: 'hace 2 días',
    text: 'El ceviche de camarón es de otro nivel. El camarón tamaño Manta y el limón recién exprimido. El servicio fue rapidísimo.',
  },
  {
    name: 'Carlos Gómez',
    avatar: 'CG',
    rating: 5,
    date: 'hace 1 semana',
    text: 'El encebollado es EL encebollado: bien achiotado, yuca al punto y bastante pescado. Ambiente frente a la avenida muy rico.',
  },
  {
    name: 'Andrea Reyes',
    avatar: 'AR',
    rating: 4,
    date: 'hace 2 semanas',
    text: 'Pedimos cangrejo estofado y arroz con mariscos por WhatsApp, llegó todo caliente y delicioso. La espumilla de guayaba es adictiva.',
  },
  {
    name: 'Jorge Martínez',
    avatar: 'JM',
    rating: 5,
    date: 'hace 3 semanas',
    text: 'El mejor lugar para celebrar en Manta. El pulpo a la brasa y los cócteles son una combinación ganadora. Precios justos.',
  },
  {
    name: 'Lucía Zambrano',
    avatar: 'LZ',
    rating: 5,
    date: 'hace 1 mes',
    text: 'Auténtica cocina manabita. El bolón con chicharrón y la limonada con hierbabuena me hicieron volver. La terraza es preciosa.',
  },
  {
    name: 'Pedro Sánchez',
    avatar: 'PS',
    rating: 4,
    date: 'hace 1 mes',
    text: 'El ceviche mixto vale cada centavo. Porciones generosas y un equipo súper atento. Perfecto para ir en familia.',
  },
]

export const hours = [
  { day: 'Lunes a Jueves', time: '10:00 – 22:00' },
  { day: 'Viernes y Sábado', time: '10:00 – 00:00' },
  { day: 'Domingo', time: '10:00 – 20:00' },
]