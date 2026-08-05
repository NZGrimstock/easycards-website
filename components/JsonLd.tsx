/**
 * Renders a schema.org JSON-LD block.
 *
 * `<` is escaped so no string in the payload can close the script tag early —
 * harmless while all structured data is hardcoded, load-bearing the moment any
 * of it comes from a CMS or user-submitted review.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
