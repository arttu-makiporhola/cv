import { MetadataRoute } from 'next';
import { siteConfig } from './lib/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.metadata.title,
    short_name: 'Arttu M CV',
    description: siteConfig.metadata.description,
    start_url: siteConfig.basePath || '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
  };
}

export const dynamic = 'force-static';
