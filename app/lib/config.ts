/**
 * Centralized site configuration
 */
export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  
  get baseUrl() {
    return this.url;
  },
  
  metadata: {
    title: 'Arttu Mäkipörhölä - CV / Online Resume',
    description: 'A simple CV / Online Resume built with Next.js, TypeScript, and Tailwind CSS.',
    keywords: [
      'portfolio',
      'next.js',
      'react',
      'typescript',
      'tailwind',
      'multilingual',
      'theme toggle',
      'dark mode',
      'static site',
      'web development',
      'cv',
      'resume',
    ] as string[],
    author: 'Arttu Mäkipörhölä',
    ogImage: {
      type: 'image/webp',
      url: '/og-image.webp',
      width: 1200,
      height: 630,
      alt: 'Arttu Mäkipörhölä - CV / Online Resume',
    },
  },
};
