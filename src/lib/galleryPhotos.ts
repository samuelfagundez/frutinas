import type { Photo } from "../content";

/**
 * Descubre automáticamente TODAS las fotos que haya en src/assets/gallery/
 * — no hay que tocar código para agregar una foto nueva a la Galería, basta
 * con dejar el archivo en esa carpeta (y volver a desplegar). El orden en
 * el carrusel es alfabético por nombre de archivo — por eso los nombres
 * llevan un prefijo numérico de 2 dígitos ("01-...", "02-...") que fija el
 * orden real en el que se quiere mostrar cada foto.
 *
 * Por qué src/assets y no public/gallery: import.meta.glob es una función
 * de Vite que resuelve los archivos en tiempo de build; solo funciona sobre
 * archivos que pasan por el pipeline de Vite (todo lo que está bajo src/).
 * Los archivos de public/ se copian tal cual al sitio final sin pasar por
 * ahí, así que Vite no puede "listarlos" — por eso las fotos nuevas deben
 * agregarse en src/assets/gallery/, no en public/gallery/.
 */
const modules = import.meta.glob<string>(
  "/src/assets/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true, query: "?url", import: "default" },
);

/** "03-copa-de-helado-con-barquillos" → "Copa de helado con barquillos" */
function altFromFilename(path: string): string {
  const base = path
    .split("/")
    .pop()!
    .replace(/\.[^.]+$/, "")
    // Prefijo numérico de 2 dígitos (p. ej. "03-") usado solo para fijar
    // el orden de aparición en la Galería — no debe colarse en el alt.
    .replace(/^\d+-/, "");
  const words = base.replace(/-/g, " ");
  return words.charAt(0).toUpperCase() + words.slice(1);
}

// El resto del sitio (assetUrl(), en lib/asset.ts) trabaja con rutas
// relativas a la raíz del repo (p. ej. "/gallery/foo.jpg") y le agrega el
// base path al vuelo. La URL que devuelve el glob ya viene CON el base
// aplicado (Vite la resuelve así para poder usarla directo); se lo quitamos
// aquí para que quede en el mismo formato que el resto de content.ts y
// Gallery.tsx la pueda pasar por assetUrl() sin duplicarlo.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const galleryPhotos: Photo[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, url]) => ({
    src: url.startsWith(base) ? url.slice(base.length) : url,
    alt: `${altFromFilename(path)} en Frutinas`,
  }));
