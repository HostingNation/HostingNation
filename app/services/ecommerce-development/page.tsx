import type { Metadata } from 'next';
import ServiceLayoutExpanded from '@/components/ServiceLayoutExpanded';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'E-commerce Development Services',
  description:
    'Custom and headless e-commerce development by Hosting Nation. High-conversion online stores, payment integrations, and scalable storefronts. Founded by Mohd Suhail.',
  alternates: { canonical: `${siteConfig.url}/services/ecommerce-development` },
  openGraph: {
    title: 'E-commerce Development | Hosting Nation',
    description:
      'Custom and headless e-commerce stores with conversion-optimized checkout, payment gateways, and analytics.',
    url: `${siteConfig.url}/services/ecommerce-development`,
    images: ['/images/og-cover.png']
  },
  keywords: [
    'ecommerce development',
    'Hosting Nation ecommerce',
    'custom ecommerce development',
    'headless ecommerce',
    'Shopify Hydrogen developer',
    'Next.js ecommerce',
    'online store development'
  ]
};

export default function EcommercePage() {
  return (
    <ServiceLayoutExpanded
      slug="ecommerce-development"
      eyebrow="E-commerce Development"
      title="E-commerce stores built to convert"
      highlight="E-commerce stores"
      serviceType="E-commerce Development"
      intro="Most e-commerce websites look fine but don't convert. The checkout is clunky, product pages are thin, mobile performance is poor, and the whole thing was built by someone who has never actually bought anything online. Hosting Nation builds e-commerce experiences the way they should be built fast, clean, and focused on getting customers from landing to purchase with as little friction as possible."
      whoFor={[
        'D2C brands launching their first online store or replacing a template Shopify site',
        'Businesses migrating away from Shopify or WooCommerce for better performance and lower fees',
        'Brands that need custom purchasing flows subscriptions, bundles, B2B ordering',
        'Established stores needing a conversion rate and performance overhaul',
      ]}
      whatBuilt={[
        { title: 'Custom Storefronts',   desc: 'Mobile-first storefronts with sub-second loads, smooth UX, and a design that converts.' },
        { title: 'Headless E-commerce',  desc: 'Next.js frontend powered by Shopify, Medusa, or a custom Node.js backend.' },
        { title: 'Payments & Checkout',  desc: 'Stripe, Razorpay, PayPal plus multi-step checkout, discount logic, and abandoned cart recovery.' },
        { title: 'Admin & Inventory',    desc: 'Orders, inventory, customers, discounts, and reports in one unified dashboard.' },
      ]}
      stack={['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Razorpay', 'Tailwind CSS', 'Vercel']}
      outcomes={[
        'Faster store means higher conversion and better ad ROAS',
        'Checkout flows tuned for your customers not a generic template',
        'Full ownership of your storefront code and data',
        'SEO architecture and Core Web Vitals built in from the start',
      ]}
      timeline="Standard e-commerce stores: 4–8 weeks · Complex custom builds: 8–12 weeks"
      longFormSections={[
        {
          heading: 'Build an Online Store That Sells Not Just Sits There',
          body: 'The gap between a store that looks good and a store that converts is almost always in the details: page load speed, checkout flow clarity, mobile experience, and product page quality. These are the things we focus on not just making something that exists. We\'ve built for Cromy, a premium jeans brand in Delhi, and the architecture we used for that project is the same approach we bring to every e-commerce build.',
        },
        {
          heading: 'Custom Build vs. Shopify When to Choose What',
          body: 'Shopify is an excellent platform for straightforward retail. If you need custom purchasing logic, lower per-transaction fees, or a differentiated customer experience that Shopify\'s theme limitations prevent a custom build pays for itself. The break-even point depends on your transaction volume and the cost of Shopify\'s fees, apps, and per-seat costs. We can help you model this comparison on a discovery call.',
        },
        {
          heading: 'What\'s Included in Every E-commerce Project',
          body: 'Custom storefront design and development, product catalog and collection management, shopping cart and multi-step checkout, payment gateway integration (Stripe, Razorpay, PayPal), user accounts and order history, inventory and order management, discount codes and promotional logic, product search and filtering, mobile-optimized UX, Core Web Vitals optimization, and analytics and conversion tracking setup.',
        },
        {
          heading: 'E-commerce SEO: Built Into the Architecture',
          body: 'E-commerce SEO is built into our development process not added on at the end. Structured product data (JSON-LD), fast page loads via server-side rendering, clean URL structures, and automatically generated XML sitemaps give your store the technical foundation to rank for product and category keywords. We also set up Google Search Console and Google Analytics 4 on every project.',
        },
      ]}
      faqs={[
        {
          q: 'Should I use Shopify or a custom build?',
          a: 'Shopify is excellent for straightforward retail. If you need custom logic, lower transaction fees, or a differentiated experience, a custom build almost always pays for itself within 18 months. We can model this comparison on a call based on your specific numbers.',
        },
        {
          q: 'Can you migrate my existing store to a new platform?',
          a: 'Yes. We handle product data migration, order history, and customer accounts. We\'ll scope this specifically based on your current platform and data volume migration complexity varies significantly.',
        },
        {
          q: 'Will my store be optimized for search engines?',
          a: 'Yes. E-commerce SEO is built into our development process structured product data, fast page loads, clean URL structure, and XML sitemaps are all standard on every project.',
        },
      ]}
    />
  );
}
