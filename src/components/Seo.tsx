import { Helmet } from "react-helmet-async";
import { content } from "../content";

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

  // Negocio con varias tiendas: en vez de una única entidad con una sola
  // dirección, se genera una entidad IceCreamShop por cada tienda (mismo
  // patrón que usa Google para negocios multi-sede) — todas comparten
  // nombre, descripción y sitio, pero cada una con su propia dirección y,
  // si la tiene, su propio teléfono. La valoración real de Google (ficha
  // de origen) pertenece específicamente a la tienda de Ciril Amorós, así
  // que el aggregateRating solo se agrega a esa entidad — no se inventa
  // para el resto.
  const locationEntities = content.locations.map((loc) => {
    const entity: Record<string, unknown> = {
      "@type": "IceCreamShop",
      "@id": `${base}/#location-${loc.id}`,
      isPartOf: { "@id": `${base}/#website` },
      name: `${content.name} ${loc.city}${loc.neighborhood ? ` - ${loc.neighborhood}` : ""}`,
      branchOf: { "@type": "Organization", name: content.name },
      description: content.description,
      image: content.gallery.map((p) => base + p.src),
      url: content.siteUrl,
      servesCuisine: content.cuisine,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressCountry: "ES",
      },
      openingHoursSpecification: content.openingHoursSchema.map((s) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: s.days,
        opens: s.opens,
        closes: s.closes,
      })),
      hasMap: loc.mapLinkUrl,
      keywords: content.keywords.join(", "),
    };
    if (loc.phoneDisplay) entity.telephone = `+${loc.whatsappNumber}`;
    if (loc.geo) {
      entity.geo = {
        "@type": "GeoCoordinates",
        latitude: loc.geo.latitude,
        longitude: loc.geo.longitude,
      };
    }
    if (loc.id === "eixample" && content.rating) {
      entity.aggregateRating = {
        "@type": "AggregateRating",
        ratingValue: content.rating.value,
        reviewCount: content.rating.count,
      };
    }
    return entity;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [websiteEntity, ...locationEntities],
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
