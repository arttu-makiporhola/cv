import { MetadataRoute } from 'next';
import { siteConfig } from './lib/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.metadata.title,
    short_name: 'Arttum',
    description: siteConfig.metadata.description,
    start_url: siteConfig.basePath || '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
  };
}

export const dynamic = 'force-static';
