/**
 * Custom hook for managing SEO metadata
 * Sets page title, meta descriptions, keywords, and structured data
 */

import { useEffect } from 'react';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, unknown>;
}

export function useSEO(metadata: SEOMetadata) {
  useEffect(() => {
    // Set page title
    document.title = `${metadata.title} | Talent Boost Academy`;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metadata.description;
      document.head.appendChild(meta);
    }

    // Set keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', metadata.keywords.join(', '));
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = metadata.keywords.join(', ');
      document.head.appendChild(meta);
    }

    // Set OG tags for social sharing
    if (metadata.ogTitle) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', metadata.ogTitle);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:title');
        meta.content = metadata.ogTitle;
        document.head.appendChild(meta);
      }
    }

    if (metadata.ogDescription) {
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', metadata.ogDescription);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:description');
        meta.content = metadata.ogDescription;
        document.head.appendChild(meta);
      }
    }

    if (metadata.ogImage) {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', metadata.ogImage);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:image');
        meta.content = metadata.ogImage;
        document.head.appendChild(meta);
      }
    }

    // Set canonical URL
    if (metadata.canonicalUrl) {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', metadata.canonicalUrl);
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = metadata.canonicalUrl;
        document.head.appendChild(link);
      }
    }

    // Add structured data (JSON-LD)
    if (metadata.structuredData) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(metadata.structuredData);
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(metadata.structuredData);
        document.head.appendChild(script);
      }
    }

    // Cleanup function to remove meta tags when component unmounts
    return () => {
      // Keep meta tags for next page navigation
    };
  }, [metadata]);
}
