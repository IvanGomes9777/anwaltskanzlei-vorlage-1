// Rendert schema.org-Daten als JSON-LD. Die Daten stammen ausschließlich aus
// statischen Inhalten (src/lib/jsonld.ts) — kein Nutzer-Input.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
