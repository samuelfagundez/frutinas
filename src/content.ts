// ---------------------------------------------------------------------------
// Contenido único del negocio. Editar SOLO este archivo para actualizar
// nombre, dirección, horario, redes, etc. Las fotos de la Galería NO se
// editan acá — se descubren solas desde src/assets/gallery/, ver más abajo.
// ---------------------------------------------------------------------------

import { galleryPhotos } from "./lib/galleryPhotos";

export interface DayHours {
  day: string;
  hours: string;
}

export interface Photo {
  src: string;
  alt: string;
}

export const content = {
  name: "Frutinas",
  shortName: "Frutinas",
  tagline:
    "Ensaladas de frutas, helados y postres colombianos en el centro de València",
  // Descripción tejida a partir de los datos reales de la ficha de Google
  // (categoría, reseñas destacadas y platos que los propios clientes
  // nombran) — sin inventar nada que no esté respaldado por esa ficha.
  description:
    "Frutinas es una heladería y coctelería de frutas en pleno Eixample de València, valorada con 4,7 estrellas por más de 1.100 clientes en Google gracias a sus ensaladas de frutas, helados artesanales y postres colombianos como el chontaduro, la lulada, el merengón, la oblea con queso y el fruticholado. Un local luminoso y apto para toda la familia, con opción de tomar en el local, para llevar o a domicilio, donde cada postre se prepara al momento con fruta fresca y una gran variedad de toppings.",
  metaDescription:
    "Frutinas: heladería y postres colombianos en Ciril Amorós, Eixample, València. Ensaladas de frutas, helados y cholados. 4,7★ en Google con más de 1.100 opiniones.",
  keywords: [
    "Frutinas",
    "València",
    "Eixample",
    "heladería",
    "postres colombianos",
    "ensalada de frutas",
    "helados artesanales",
    "cholados",
  ],

  // Foto de portada para el fondo del Hero — independiente de `gallery`
  // (esa sigue siendo la del carrusel de la sección Galería).
  heroImage: {
    src: "/gallery/banner-frutinas.jpg",
    alt: "Cholado de frutas y helado de vainilla recién preparados en Frutinas",
  } as Photo,

  // Pendiente: la ficha de Google no expone un rango de precios para este
  // negocio (priceLevel vacío) — se deja sin definir en vez de inventarlo;
  // Hours.tsx no muestra la línea de precio medio si esto queda vacío.
  priceRange: "",
  priceRangeDisplay: "",
  // "servesCuisine" (schema.org) aplica a cualquier FoodEstablishment,
  // incluida una heladería — no solo a "Restaurant".
  cuisine: "Postres colombianos y helados artesanales",

  rating: {
    value: 4.7,
    count: 1178,
    countDisplay: "1.178",
  },

  highlights: [
    "Ensaladas de frutas y cholados preparados al momento con fruta fresca.",
    "Gran variedad de postres dulces colombianos: chontaduro, lulada, merengón, oblea y fruticholado.",
    "Atención rápida y muy valorada por los clientes en sus reseñas de Google.",
    "Local apto para niños, con aseos y entrada accesible.",
  ],

  address: {
    streetAddress: "Carrer de Ciril Amorós, 1",
    addressLocality: "València",
    addressRegion: "Comunitat Valenciana",
    postalCode: "46004",
    addressCountry: "ES",
    full: "C/ de Ciril Amorós, 1, L'Eixample, 46004 València",
  },

  // Coordenadas reales de la ficha de Google Places (no estimadas).
  geo: { latitude: 39.4662747, longitude: -0.3742933 } as {
    latitude: number;
    longitude: number;
  } | null,

  phone: "+34 613 22 65 39",
  phoneDisplay: "613 22 65 39",
  // Solo dígitos, con código de país, sin "+" — formato que exige wa.me.
  // Pendiente: el cliente no dio un número de WhatsApp aparte — se usa el
  // teléfono de contacto de la ficha de Google, práctica habitual en
  // negocios de este tamaño; confirmar con el cliente si prefiere otro.
  whatsappNumber: "34613226539",
  // Pendiente: el cliente no dio un correo de contacto público.
  email: "",

  // URL final del sitio en GitHub Pages (repo público "frutinas").
  siteUrl: "https://samuelfagundez.github.io/frutinas/",

  // Única red social encontrada para este negocio (indicada por el
  // cliente) — el resto queda vacío a propósito, no se inventa.
  social: {
    instagram: "https://instagram.com/frutinass",
    facebook: "",
    tiktok: "",
    whatsapp:
      "https://wa.me/34613226539?text=" +
      encodeURIComponent("¡Hola! Vengo de la página web de Frutinas."),
  },

  hours: [
    { day: "Lunes", hours: "14:00–21:30" },
    { day: "Martes", hours: "14:00–21:30" },
    { day: "Miércoles", hours: "14:00–21:30" },
    { day: "Jueves", hours: "14:00–21:30" },
    { day: "Viernes", hours: "14:00–21:30" },
    { day: "Sábado", hours: "14:00–21:30" },
    { day: "Domingo", hours: "14:00–21:30" },
  ] as DayHours[],

  // openingHoursSpecification en formato schema.org (mismo horario los 7
  // días, así que basta con una sola entrada con todos los días).
  openingHoursSchema: [
    {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "14:00",
      closes: "21:30",
    },
  ],

  // Fotos: se descubren SOLAS a partir de src/assets/gallery/ (ver
  // lib/galleryPhotos.ts) — para agregar una foto nueva a la Galería basta
  // con dejar el archivo en esa carpeta, sin tocar este archivo.
  gallery: galleryPhotos,

  // Embed de Google Maps sin API key, geolocalizando por dirección de texto.
  mapEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Frutinas, C/ de Ciril Amorós, 1, 46004 València") +
    "&hl=es&z=16&output=embed",
  mapLinkUrl: "https://maps.app.goo.gl/mL2kqE9QaVhtr9HH8",
};

/** Link de WhatsApp click-to-chat con mensaje predefinido. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_CONTACT_MESSAGE =
  "¡Hola! Vengo de la página web de Frutinas y tengo una consulta.";
export const WHATSAPP_RESERVE_MESSAGE =
  "¡Hola! Vengo de la página web de Frutinas y me gustaría hacer un pedido.";

// Link externo del sistema de pedidos (se abre en pestaña nueva). Mientras
// no se defina, "Hacer un pedido" cae de vuelta a WhatsApp automáticamente.
export const reservationLink = "";

/** Href del botón "Contáctanos": siempre WhatsApp. */
export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE);
}

/** Href del botón "Hacer un pedido": link externo si ya está definido, si no WhatsApp. */
export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE);
}
