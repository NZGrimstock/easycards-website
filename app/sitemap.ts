import type { MetadataRoute } from 'next'

// Bump when page content meaningfully changes. A build-time `new Date()` here would
// report every page as freshly modified on every deploy, which crawlers learn to ignore.
const lastModified = new Date('2026-08-06')

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.easycards.co.nz'

  return [
    { url: base, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
