import { content, contactHref, reservationHref } from "../content";
import { assetUrl } from "../lib/asset";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-[var(--color-brand-dark)] pt-20 text-white sm:items-center sm:pt-24">
      <img
        src={assetUrl(content.heroImage.src)}
        alt={content.heroImage.alt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      {/* Sin velo oscuro sobre toda la foto (a pedido del cliente, para que
          se vea nítida y con todo su color) — el texto va sobre un panel
          propio semitransparente, no sobre la imagen directamente. */}

      <div className="relative z-10 mx-auto max-w-3xl px-4 pb-10 text-center sm:pb-4">
        <div className="rounded-2xl bg-[var(--color-brand-dark)]/80 px-6 py-8 shadow-xl backdrop-blur-sm sm:px-10 sm:py-10">
          <h1 className="font-display text-4xl font-bold sm:text-6xl">
            {content.name}
          </h1>
          <p className="mt-4 text-lg text-white/90 sm:text-xl">
            {content.tagline}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
              className="btn-secondary border-white bg-white text-[var(--color-brand-dark)] hover:bg-white/90 hover:text-[var(--color-brand-dark)]"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
