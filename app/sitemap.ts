import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const routes = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/founder', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/services', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/services/web-development', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/services/custom-software-development', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/services/saas-development', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/services/ecommerce-development', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/services/api-integration', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/services/business-automation', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/contact', changeFrequency: 'yearly' as const, priority: 0.7 }
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority
  }));
}
