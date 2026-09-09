import { content } from "../content";

// Botón flotante hacia la carta digital (Menupp) — va apilado justo
// encima del de Instagram (mismo tamaño/estilo, bottom-22 en vez de
// bottom-5 para dejar el hueco de ese otro botón + un pequeño margen).
export default function FloatingMenu() {
  return (
    <a
      href={content.menuUrl}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Ver la carta de Frutinas"
      className="fixed right-5 bottom-22 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand)] text-white shadow-lg transition hover:scale-105 hover:bg-[var(--color-brand-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
    >
      {/* Ícono "restaurant menu" (Material Symbols) */}
      <svg viewBox="0 -960 960 960" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M160-120v-670q0-12.75 8.63-21.38Q177.25-820 190-820t21.38 8.62Q220-802.75 220-790v670h-60Zm190 0v-350q-45-13-72.5-49.5T250-604v-186q0-12.75 8.63-21.38Q267.25-820 280-820t21.38 8.62Q310-802.75 310-790v186h40v-186q0-12.75 8.63-21.38Q367.25-820 380-820t21.38 8.62Q410-802.75 410-790v186h40v-186q0-12.75 8.63-21.38Q467.25-820 480-820t21.38 8.62Q510-802.75 510-790v186q0 41-27.5 77.5T410-470v350h-60Zm300 0v-300h-90v-208q0-70 49-121t121-51v680h-80Z" />
      </svg>
    </a>
  );
}
