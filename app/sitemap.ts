import { MetadataRoute } from 'next'
import { siteConfig } from './lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
    const { baseUrl } = siteConfig

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}

export const dynamic = 'force-static'
