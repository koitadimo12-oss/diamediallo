/**
 * @module usePageMeta
 * Injects SEO meta tags into <head> dynamically for each page.
 */
import { useEffect } from 'react';
import { AGENCY_CONFIG } from '../data';

interface MetaOptions {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
}

export function usePageMeta({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noIndex = false,
}: MetaOptions) {
  useEffect(() => {
    // Title
    const fullTitle = `${title} | ${AGENCY_CONFIG.name}`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        if (property) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('robots', noIndex ? 'noindex,nofollow' : 'index,follow');

    // Open Graph
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:site_name', AGENCY_CONFIG.name, true);
    if (canonical) setMeta('og:url', canonical, true);
    if (ogImage) setMeta('og:image', ogImage, true);

    // Canonical
    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, canonical, ogImage, ogType, noIndex]);
}
