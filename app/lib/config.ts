/**
 * Centralized site configuration
 */
const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const fullUrl = url + basePath

export const siteConfig = {
    url,
    basePath,

    get baseUrl() {
        return this.url
    },

    metadata: {
        title: 'Arttu Mäkipörhölä - CV / Online Resume',
        description: 'A simple CV / Online Resume built with Next.js and hosted on Github Pages.',
        keywords: ['portfolio', 'next.js', 'react', 'typescript', 'tailwind', 'multilingual', 'theme toggle', 'dark mode', 'static site', 'web development', 'cv', 'resume'] as string[],
        author: 'Arttu Mäkipörhölä',
        ogImage: {
            type: 'image/webp',
            url: '/og-image.webp',
            width: 1200,
            height: 630,
            alt: 'Arttu Mäkipörhölä - CV / Online Resume',
        },
    },

    schema: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': `${fullUrl}/#website`,
                url: `${fullUrl}/`,
                name: 'Arttu Mäkipörhölä - CV / Online Resume',
                publisher: {
                    '@id': `${fullUrl}/#person`,
                },
            },
            {
                '@type': 'Person',
                '@id': `${fullUrl}/#person`,
                name: 'Arttu Mäkipörhölä',
                url: `${fullUrl}/`,
                image: `${fullUrl}/picture.webp`,
                jobTitle: 'Developer',
                description: "I'm a long-time (10-y) Full-stack developer. Nowadays, I'm more on the DevOps & infra side.",
                hasOccupation: {
                    '@type': 'Occupation',
                    name: 'Developer',
                    skills: ['DevOps Engineering', 'Cloud Infrastructure', 'System Architecture', 'Backend Engineering', 'System Integration'],
                },
                knowsAbout: ['DevOps', 'Cloud Computing', 'Infrastructure as Code', 'System Integration', 'Backend Engineering', 'Web Application Architecture'],
                worksFor: {
                    '@id': `${fullUrl}/#hion`,
                },
                workExample: [
                    {
                        '@type': 'SoftwareSourceCode',
                        name: 'podcast-auto-clean-cli',
                        programmingLanguage: 'JavaScript',
                        codeRepository: 'https://github.com/arttu-makiporhola/podcast-auto-clean-cli',
                        license: 'https://opensource.org/licenses/MIT',
                    },
                    {
                        '@type': 'SoftwareSourceCode',
                        name: 'dustpress-debugger',
                        programmingLanguage: 'JavaScript',
                        codeRepository: 'https://github.com/devgeniem/dustpress-debugger',
                        license: 'https://www.gnu.org/licenses/gpl-3.0.en.html',
                    },
                    {
                        '@type': 'SoftwareSourceCode',
                        name: 'cv.a-m.fi',
                        programmingLanguage: 'TypeScript',
                        codeRepository: 'https://github.com/arttu-makiporhola/cv',
                        license: 'https://opensource.org/licenses/MIT',
                    },
                    {
                        '@type': 'SoftwareSourceCode',
                        name: 'game',
                        programmingLanguage: 'Rust',
                        codeRepository: 'https://github.com/arttu-makiporhola/game',
                        license: 'https://opensource.org/licenses/MIT',
                    },
                ],
                sameAs: ['https://www.linkedin.com/in/arttu-m/', 'https://github.com/arttu-makiporhola'],
            },
            {
                '@type': 'Organization',
                '@id': `${fullUrl}/#hion`,
                name: 'Hion Digital Oy',
                url: 'https://www.hiondigital.com/',
            },
        ],
    },
}
