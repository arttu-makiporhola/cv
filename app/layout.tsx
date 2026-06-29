import type { Metadata } from 'next'
import './globals.scss'
import { LanguageProvider } from './contexts/LanguageContext'
import { themeInitScript } from './scripts/theme-init'
import { siteConfig } from './lib/config'
import type { Viewport } from 'next'

export const viewport: Viewport = {
    themeColor: 'black',
}

export const metadata: Metadata = {
    title: {
        default: siteConfig.metadata.title,
        template: `%s | ${siteConfig.metadata.title}`,
    },
    description: siteConfig.metadata.description + ' (' + siteConfig.metadata.keywords.join(', ') + ')',
    keywords: siteConfig.metadata.keywords,
    authors: [{ name: siteConfig.metadata.author }],
    creator: siteConfig.metadata.author,
    publisher: siteConfig.metadata.author,
    metadataBase: new URL(siteConfig.url),
    alternates: {
        canonical: '/',
        languages: {
            en: '/',
            fi: '/',
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        alternateLocale: ['fi_FI'],
        url: siteConfig.basePath || '/',
        title: siteConfig.metadata.title,
        description: siteConfig.metadata.description,
        siteName: siteConfig.metadata.title,
        images: [
            {
                url: siteConfig.metadata.ogImage.url,
                width: siteConfig.metadata.ogImage.width,
                height: siteConfig.metadata.ogImage.height,
                alt: siteConfig.metadata.ogImage.alt,
                type: siteConfig.metadata.ogImage.type,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.metadata.title,
        description: siteConfig.metadata.description,
        images: [siteConfig.metadata.ogImage.url],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
                <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(siteConfig.schema) }} />
            </head>
            <body>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    )
}
