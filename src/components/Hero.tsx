import { content, contactHref, reservationHref } from "../content";
import { assetUrl } from "../lib/asset";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-[var(--color-brand-dark)] pt-20 text-white sm:pt-24">
      <img
        src={assetUrl(content.heroImage.src)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      {/* Degradado oscuro sobre la foto para que el texto blanco siga
          siendo legible encima de cualquier zona de la imagen. */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-dark)]/85 via-[var(--color-brand-dark)]/55 to-[var(--color-brand-dark)]/85" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="font-display text-4xl font-bold drop-shadow-md sm:text-6xl">
          {content.name}
        </h1>
        <p className="mt-4 text-lg text-white/90 sm:text-xl">
          {content.tagline}
        </p>
        {content.rating && (
          <p className="mt-3 text-sm font-medium text-amber-300">
            ★ {content.rating.value.toFixed(1)} · {content.rating.countDisplay}{" "}
            reseñas en Google
          </p>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={reservationHref()}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-primary"
          >
            Hacer un pedido
          </a>
          <a
            href={contactHref()}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-secondary border-white bg-white text-[var(--color-brand-dark)] hover:bg-white/90 hover:text-[var(--color-brand-dark)]"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
