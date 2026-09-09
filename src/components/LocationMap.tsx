import { useState } from "react";
import { content, whatsappLink, whatsappMessageFor } from "../content";

// Ícono oficial de WhatsApp (mismo path que el antiguo botón flotante),
// en tamaño pequeño para ir al lado del teléfono de cada tienda.
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.39.66 4.63 1.82 6.54L4 29l7.62-1.79a11.9 11.9 0 0 0 4.39.83h.01c6.63 0 12-5.38 12-12.01C28.02 8.38 22.64 3 16.01 3Zm0 21.82h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.79.89.9-3.7-.24-.38a9.83 9.83 0 0 1-1.52-5.23c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.46-4.44 9.9-9.9 9.9Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function LocationMap() {
  const [selected, setSelected] = useState(0);
  const location = content.locations[selected];

  return (
    <section id="ubicacion" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="section-title text-center">Ubicación y contacto</h2>
        <p className="mt-2 text-center text-[var(--color-ink)]/70">
          {content.locations.length} tiendas en València, Madrid y Alicante —
          elige la tuya para ver su dirección, teléfono y mapa.
        </p>

        {/* Selector de tienda */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {content.locations.map((loc, i) => (
            <button
              key={loc.id}
              type="button"
              onClick={() => setSelected(i)}
              aria-pressed={i === selected}
              className={`rounded-full border-2 px-4 py-2 text-sm font-medium transition ${
                i === selected
                  ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white"
                  : "border-black/10 text-[var(--color-ink)] hover:border-[var(--color-brand)]"
              }`}
            >
              {loc.city}
              {loc.neighborhood ? ` · ${loc.neighborhood}` : ""}
            </button>
          ))}
        </div>

        {/* Tienda seleccionada: dirección, teléfono/WhatsApp y mapa */}
        <div className="mt-8 rounded-xl border border-black/10 bg-[var(--color-paper)] p-4 sm:p-6">
          <p className="text-lg font-semibold text-[var(--color-brand-dark)]">
            Frutinas {location.city}
            {location.neighborhood ? ` — ${location.neighborhood}` : ""}
          </p>
          <p className="mt-1 text-[var(--color-ink)]/80">{location.address}</p>
          {location.phoneDisplay && location.whatsappNumber ? (
            <p className="mt-2 flex items-center gap-2 text-[var(--color-ink)]/80">
              <a href={`tel:+${location.whatsappNumber}`} className="hover:underline">
                {location.phoneDisplay}
              </a>
              <a
                href={whatsappLink(
                  location.whatsappNumber,
                  whatsappMessageFor(location),
                )}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Escribir por WhatsApp a la tienda de ${location.city}`}
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105 hover:bg-[#20bd5a]"
              >
                <WhatsAppIcon />
              </a>
            </p>
          ) : (
            <p className="mt-2 text-sm text-[var(--color-ink)]/50 italic">
              Teléfono próximamente.
            </p>
          )}

          <div className="mt-6 overflow-hidden rounded-xl border border-black/10">
            <iframe
              key={location.id}
              title={`Mapa de ubicación de Frutinas ${location.city}${location.neighborhood ? ` (${location.neighborhood})` : ""}`}
              src={location.mapEmbedSrc}
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href={location.mapLinkUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium text-[var(--color-brand)] hover:underline"
            >
              Ver en Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
