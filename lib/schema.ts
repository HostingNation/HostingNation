import { siteConfig } from './site';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/images/logo.png`,
    width: 512,
    height: 512
  },
  image: `${siteConfig.url}/images/og-cover.png`,
  email: siteConfig.email,
  foundingDate: siteConfig.founded,
  founder: {
    '@type': 'Person',
    '@id': `${siteConfig.url}/founder#person`,
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.role,
    url: `${siteConfig.url}/founder`,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.github
    ]
  },
  description:
    'Hosting Nation is a software development company founded by Mohd Suhail. We build custom web applications, SaaS platforms, e-commerce stores, API integrations, and business automation tools for startups and businesses worldwide.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressLocality: 'India'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: siteConfig.email,
    availableLanguage: ['English', 'Hindi']
  },
  sameAs: Object.values(siteConfig.social),
  knowsAbout: [
    'Web Development',
    'Custom Software Development',
    'SaaS Development',
    'E-commerce Development',
    'API Integration',
    'Business Automation',
    'Next.js',
    'React',
    'Node.js',
    'MongoDB'
  ]
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteConfig.url}/founder#person`,
  name: siteConfig.founder.name,
  alternateName: siteConfig.founder.altNames,
  givenName: 'Mohd',
  familyName: 'Suhail',
  jobTitle: siteConfig.founder.role,
  description: siteConfig.founder.bio,
  url: `${siteConfig.url}/founder`,
  image: `${siteConfig.url}/images/founder.jpg`,
  email: siteConfig.email,
  knowsAbout: siteConfig.founder.expertise,
  worksFor: {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url
  },
  founderOf: {
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url
  },
  nationality: {
    '@type': 'Country',
    name: 'India'
  },
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.twitter,
    siteConfig.social.github,
    siteConfig.social.instagram
  ]
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  publisher: { '@id': `${siteConfig.url}/#organization` },
  inLanguage: 'en-IN',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is Mohd Suhail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Mohd Suhail is the Founder & CEO of Hosting Nation. He is a full-stack software engineer specializing in React, Next.js, Node.js, MongoDB, SaaS architecture, and business automation. He builds custom web applications and software products for startups and businesses around the world.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is Hosting Nation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Hosting Nation is a software development company founded by Mohd Suhail. It delivers custom web development, SaaS platforms, e-commerce stores, API integrations, dashboards, and business automation solutions for startups and growing businesses globally.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Hosting Nation provide custom software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Hosting Nation builds custom software tailored to each client including internal tools, admin dashboards, CRMs, ERPs, automation systems, and full-stack web applications using modern stacks like Next.js, Node.js, and MongoDB.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can Hosting Nation build SaaS products?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Absolutely. Hosting Nation specializes in end-to-end SaaS product development: multi-tenant architecture, authentication, subscription billing (Stripe / Razorpay), dashboards, role-based access, analytics, and scalable cloud deployment.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Hosting Nation work internationally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Hosting Nation works with clients globally including the US, UK, Canada, UAE, Australia, and across Europe and Asia. Projects are delivered remotely with clear communication, milestone-based timelines, and long-term support.'
      }
    }
  ]
};

export const breadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    item: item.url
  }))
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  url: service.url,
  serviceType: service.serviceType,
  provider: { '@id': `${siteConfig.url}/#organization` },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide'
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Startups, businesses, and entrepreneurs'
  }
});
