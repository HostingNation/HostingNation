import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Custom Web Development, SaaS & Software`,
    short_name: siteConfig.name,
    description:
      'Hosting Nation builds custom web applications, SaaS platforms, e-commerce stores, and business automation for startups and businesses worldwide.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#dc3545',
    icons: [
      {
        src: '/Logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
