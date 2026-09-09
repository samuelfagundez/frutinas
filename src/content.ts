// ---------------------------------------------------------------------------
// Contenido único del negocio. Editar SOLO este archivo para actualizar
// nombre, tiendas, horario, redes, etc. Las fotos de la Galería NO se
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

/** Una tienda física de Frutinas. Las direcciones SOLO se muestran en la
 * sección "Ubicación y contacto" — el resto del sitio (About, Footer, SEO
 * general) no debe mencionar ninguna calle en concreto, porque el negocio
 * tiene varias sucursales. */
export interface Location {
  id: string;
  city: string;
  neighborhood: string;
  address: string;
  // Teléfono en formato local para mostrar, o null si no se dio uno para
  // esta tienda en concreto (Madrid y Alicante, por ahora) — sin ese dato
  // no se muestra ni el teléfono ni el botón de WhatsApp para esa tienda.
  phoneDisplay: string | null;
  // Solo dígitos, con código de país, sin "+" — formato que exige wa.me.
  whatsappNumber: string | null;
  mapEmbedSrc: string;
  mapLinkUrl: string;
  // Coordenadas reales de la ficha de Google Places — SOLO para la tienda
  // de Ciril Amorós, que es la que trae esos datos verificados. No se
  // inventan coordenadas para el resto de tiendas.
  geo: { latitude: number; longitude: number } | null;
}

function googleMapsEmbed(query: string): string {
  return (
    "https://www.google.com/maps?q=" +
    encodeURIComponent(query) +
    "&hl=es&z=16&output=embed"
  );
}

function googleMapsSearchLink(query: string): string {
  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(query)
  );
}

export const locations: Location[] = [
  {
    id: "extramurs",
    city: "València",
    neighborhood: "Extramurs",
    address: "C/ de Conca, Extramurs, 46008 València, Valencia, España",
    phoneDisplay: "613 22 65 39",
    whatsappNumber: "34613226539",
    mapEmbedSrc: googleMapsEmbed(
      "Frutinas, C/ de Conca, Extramurs, 46008 València",
    ),
    mapLinkUrl: googleMapsSearchLink(
      "Frutinas, C/ de Conca, Extramurs, 46008 València",
    ),
    geo: null,
  },
  {
    id: "ciutat-vella",
    city: "València",
    neighborhood: "Ciutat Vella",
    address:
      "Carrer del Periodista Azzati, 4, Ciutat Vella, 46002 València, Valencia, España",
    phoneDisplay: "613 22 65 39",
    whatsappNumber: "34613226539",
    mapEmbedSrc: googleMapsEmbed(
      "Frutinas, Carrer del Periodista Azzati, 4, Ciutat Vella, 46002 València",
    ),
    mapLinkUrl: googleMapsSearchLink(
      "Frutinas, Carrer del Periodista Azzati, 4, Ciutat Vella, 46002 València",
    ),
    geo: null,
  },
  {
    id: "eixample",
    city: "València",
    neighborhood: "L'Eixample",
    address: "C/ de Ciril Amorós, 1, L'Eixample, 46004 València, Valencia, España",
    phoneDisplay: "613 22 65 39",
    whatsappNumber: "34613226539",
    mapEmbedSrc: googleMapsEmbed(
      "Frutinas, C/ de Ciril Amorós, 1, 46004 València",
    ),
    mapLinkUrl: "https://maps.app.goo.gl/mL2kqE9QaVhtr9HH8",
    geo: { latitude: 39.4662747, longitude: -0.3742933 },
  },
  {
    id: "madrid",
    city: "Madrid",
    neighborhood: "Centro",
    address: "C. de San Bernardo, 20, Centro, 28015 Madrid",
    // Pendiente: el cliente no dio un teléfono para esta tienda.
    phoneDisplay: null,
    whatsappNumber: null,
    mapEmbedSrc: googleMapsEmbed(
      "Frutinas, C. de San Bernardo, 20, Centro, 28015 Madrid",
    ),
    mapLinkUrl: googleMapsSearchLink(
      "Frutinas, C. de San Bernardo, 20, Centro, 28015 Madrid",
    ),
    geo: null,
  },
  {
    id: "alicante",
    city: "Alicante",
    neighborhood: "",
    address: "C. San Vicente, 21, 03004 Alicante",
    // Pendiente: el cliente no dio un teléfono para esta tienda.
    phoneDisplay: null,
    whatsappNumber: null,
    mapEmbedSrc: googleMapsEmbed("Frutinas, C. San Vicente, 21, 03004 Alicante"),
    mapLinkUrl: googleMapsSearchLink("Frutinas, C. San Vicente, 21, 03004 Alicante"),
    geo: null,
  },
];

export const content = {
  name: "Frutinas",
  shortName: "Frutinas",
  tagline:
    "Ensaladas de frutas, helados y postres colombianos, con varias tiendas en València, Madrid y Alicante",
  // Descripción tejida a partir de los datos reales de la ficha de Google
  // (categoría, reseñas destacadas y platos que los propios clientes
  // nombran) — sin inventar nada que no esté respaldado por esa ficha.
  // A propósito no menciona valoración/reseñas ni ninguna calle en
  // concreto: el negocio tiene varias tiendas y esos datos solo se
  // muestran en la sección "Ubicación y contacto".
  description:
    "Frutinas es una heladería y coctelería de frutas con varias tiendas, conocida por sus ensaladas de frutas, helados artesanales y postres colombianos como el chontaduro, la lulada, el merengón, la oblea con queso y el fruticholado. Locales luminosos y aptos para toda la familia, con opción de tomar en el local, para llevar o a domicilio, donde cada postre se prepara al momento con fruta fresca y una gran variedad de toppings.",
  metaDescription:
    "Frutinas: heladería y postres colombianos, con tiendas en València, Madrid y Alicante. Ensaladas de frutas, helados y cholados preparados al momento.",
  keywords: [
    "Frutinas",
    "València",
    "Madrid",
    "Alicante",
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

  // Valoración real de la ficha de Google de la tienda de Ciril Amorós
  // (la única de las 5 con ficha propia verificada) — se sigue mostrando
  // como sello de confianza de la marca en "Sobre nosotros", pero ya no
  // se menciona dentro del párrafo largo (varias tiendas, no todas tienen
  // el mismo historial de reseñas).
  rating: {
    value: 4.7,
    count: 1178,
    countDisplay: "1.178",
  },

  highlights: [
    "Ensaladas de frutas y cholados preparados al momento con fruta fresca.",
    "Gran variedad de postres dulces colombianos: chontaduro, lulada, merengón, oblea y fruticholado.",
    "Atención rápida y muy valorada por los clientes en sus reseñas de Google.",
    "Locales aptos para niños, con aseos y entrada accesible.",
  ],

  // Pendiente: el cliente no dio un correo de contacto público.
  email: "",

  // URL final del sitio en GitHub Pages (repo público "frutinas").
  siteUrl: "https://samuelfagundez.github.io/frutinas/",

  // Enlace a la carta digital (Menupp) — usado por el botón flotante de
  // menú y por "Hacer un pedido" en la cabecera.
  menuUrl:
    "https://menupp.co/frutinas/venue/F3J4eKej04PZuqZ4LeKX/menu/XUebb9Idw5Q1N6wpJKNP?utm_source=ig&utm_medium=social&utm_content=link_in_bio",

  // Única red social encontrada para este negocio (indicada por el
  // cliente) — el resto queda vacío a propósito, no se inventa.
  social: {
    instagram: "https://instagram.com/frutinass",
    facebook: "",
    tiktok: "",
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

  locations,
};

/** Link de WhatsApp click-to-chat con mensaje predefinido, para una tienda. */
export function whatsappLink(whatsappNumber: string, message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Mensaje predefinido de WhatsApp para una tienda concreta. */
export function whatsappMessageFor(location: Location): string {
  const place = location.neighborhood
    ? `${location.city} (${location.neighborhood})`
    : location.city;
  return `¡Hola! Vengo de la página web de Frutinas y tengo una consulta sobre la tienda de ${place}.`;
}

/** Href del botón "Contáctanos" de la cabecera: baja a la sección de tiendas. */
export function contactHref(): string {
  return "#ubicacion";
}

/** Href del botón "Hacer un pedido": la carta digital (Menupp). */
export function reservationHref(): string {
  return content.menuUrl;
}
