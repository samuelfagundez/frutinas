import { content } from "../content";

// Botón flotante hacia el Instagram del negocio — reemplaza al antiguo
// botón de WhatsApp (a pedido del cliente): ahora WhatsApp es un botón
// aparte, por tienda, dentro de la sección Ubicación y contacto.
export default function FloatingInstagram() {
  if (!content.social.instagram) return null;

  return (
    <a
      href={content.social.instagram}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Seguir a Frutinas en Instagram"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white shadow-lg transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d62976]"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M12 2c-2.71 0-3.05.01-4.12.06-1.06.05-1.79.22-2.43.47-.66.26-1.22.6-1.77 1.16-.56.55-.9 1.11-1.16 1.77-.25.64-.42 1.37-.47 2.43C2 8.95 2 9.29 2 12s.01 3.05.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.16 1.77.55.56 1.11.9 1.77 1.16.64.25 1.37.42 2.43.47C8.95 22 9.29 22 12 22s3.05-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47.66-.26 1.22-.6 1.77-1.16.56-.55.9-1.11 1.16-1.77.25-.64.42-1.37.47-2.43.05-1.07.06-1.41.06-4.12s-.01-3.05-.06-4.12c-.05-1.06-.22-1.79-.47-2.43-.26-.66-.6-1.22-1.16-1.77-.55-.56-1.11-.9-1.77-1.16-.64-.25-1.37-.42-2.43-.47C15.05 2.01 14.71 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.97.04 1.5.2 1.85.34.46.18.79.4 1.14.75.35.35.57.68.75 1.14.14.35.3.88.34 1.85.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.97-.2 1.5-.34 1.85-.18.46-.4.79-.75 1.14-.35.35-.68.57-1.14.75-.35.14-.88.3-1.85.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.97-.04-1.5-.2-1.85-.34-.46-.18-.79-.4-1.14-.75-.35-.35-.57-.68-.75-1.14-.14-.35-.3-.88-.34-1.85C3.81 14.99 3.8 14.67 3.8 12s.01-2.99.06-4.04c.04-.97.2-1.5.34-1.85.18-.46.4-.79.75-1.14.35-.35.68-.57 1.14-.75.35-.14.88-.3 1.85-.34C9.01 3.81 9.33 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3Zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm5.35-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
      </svg>
    </a>
  );
}
