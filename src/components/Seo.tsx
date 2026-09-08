import { Helmet } from "react-helmet-async";
import { content, whatsappLink, WHATSAPP_RESERVE_MESSAGE } from "../content";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
}

export default function Seo({ title, description, path = "" }: SeoProps) {
  const fullTitle = title
    ? `${title} | ${content.name}`
    : `${content.name} | ${content.tagline}`;
  const desc = description || content.metaDescription;
  const url = content.siteUrl.replace(/\/$/, "") + path;
  const base = content.siteUrl.replace(/\/$/, "");
  const image = content.gallery[0]
    ? base + content.gallery[0].src
    : base + "/favicon.svg";

  // Entidad WebSite explícita: le da a Google una señal directa e
  // inequívoca del nombre real del sitio para el "breadcrumb" de resultados
  // (evita que muestre un nombre genérico mientras el sitio es nuevo).
  const websiteEntity = {
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: content.siteUrl,
    name: content.name,
    inLanguage: "es",
  };

  // Tipo de schema.org más específico para el rubro (heladería), subtipo
  // de FoodEstablishment — por eso servesCuisine sigue aplicando.
  const businessEntity: Record<string, unknown> = {
    "@type": "IceCreamShop",
    "@id": `${base}/#business`,
    isPartOf: { "@id": `${base}/#website` },
    name: content.name,
    description: content.description,
    image: content.gallery.map((p) => base + p.src),
    url: content.siteUrl,
    servesCuisine: content.cuisine,
    address: {
      "@type": "PostalAddress",
      streetAddress: content.address.streetAddress,
      addressLocality: content.address.addressLocality,
      addressRegion: content.address.addressRegion,
      postalCode: content.address.postalCode,
      addressCountry: content.address.addressCountry,
    },
    openingHoursSpecification: content.openingHoursSchema.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: s.days,
      opens: s.opens,
      closes: s.closes,
    })),
    // WhatsApp es un canal de chat, no una página de perfil — se excluye
    // de sameAs (que es para identidades) y en cambio se usa como acción
    // de pedido en acceptsReservations.
    sameAs: Object.entries(content.social)
      .filter(([key, value]) => key !== "whatsapp" && value)
      .map(([, value]) => value),
    hasMap: content.mapLinkUrl,
    acceptsReservations: whatsappLink(WHATSAPP_RESERVE_MESSAGE),
    keywords: content.keywords.join(", "),
  };

  if (content.phone) businessEntity.telephone = content.phone;
  if (content.email) businessEntity.email = content.email;
  if (content.priceRange) businessEntity.priceRange = content.priceRange;
  if (content.geo) {
    businessEntity.geo = {
      "@type": "GeoCoordinates",
      latitude: content.geo.latitude,
      longitude: content.geo.longitude,
    };
  }
  // Se incluye aggregateRating porque acá SÍ tenemos ratingValue y
  // ratingCount juntos (ambos vienen de la misma ficha de Google) — Google
  // exige los dos juntos para que el markup sea válido en Search Console.
  if (content.rating) {
    businessEntity.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: content.rating.value,
      reviewCount: content.rating.count,
    };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [websiteEntity, businessEntity],
  };

  return (
    <Helmet>
      <html lang="es" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={content.keywords.join(", ")} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content={content.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
