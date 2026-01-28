import { useEffect } from 'react';

const BASE_URL = 'https://www.bir618.com';

// Map English paths to Turkish paths
const PATH_MAP = {
  '/': '/tr',
  '/training': '/tr/egitim',
  '/advisory': '/tr/danismanlik',
  '/approach': '/tr/yaklasim',
  '/about': '/tr/hakkimizda',
  '/contact': '/tr/iletisim',
  '/webinar': '/tr/webinar'
};

// Reverse map for Turkish to English
const REVERSE_PATH_MAP = Object.fromEntries(
  Object.entries(PATH_MAP).map(([en, tr]) => [tr, en])
);

const SEO = ({ title, description, lang = 'en', path = '/' }) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    // Determine canonical and alternate URLs
    let canonicalUrl, enUrl, trUrl;

    if (lang === 'tr') {
      // Turkish page
      canonicalUrl = `${BASE_URL}${path}`;
      trUrl = canonicalUrl;
      enUrl = `${BASE_URL}${REVERSE_PATH_MAP[path] || '/'}`;
    } else {
      // English page
      canonicalUrl = `${BASE_URL}${path}`;
      enUrl = canonicalUrl;
      trUrl = `${BASE_URL}${PATH_MAP[path] || '/tr'}`;
    }

    // Update or create canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Update or create hreflang links
    // English hreflang
    let hreflangEn = document.getElementById('hreflang-en');
    if (!hreflangEn) {
      hreflangEn = document.createElement('link');
      hreflangEn.setAttribute('id', 'hreflang-en');
      hreflangEn.setAttribute('rel', 'alternate');
      hreflangEn.setAttribute('hreflang', 'en');
      document.head.appendChild(hreflangEn);
    }
    hreflangEn.setAttribute('href', enUrl);

    // Turkish hreflang
    let hreflangTr = document.getElementById('hreflang-tr');
    if (!hreflangTr) {
      hreflangTr = document.createElement('link');
      hreflangTr.setAttribute('id', 'hreflang-tr');
      hreflangTr.setAttribute('rel', 'alternate');
      hreflangTr.setAttribute('hreflang', 'tr');
      document.head.appendChild(hreflangTr);
    }
    hreflangTr.setAttribute('href', trUrl);

    // x-default hreflang (points to English as default)
    let hreflangDefault = document.getElementById('hreflang-default');
    if (!hreflangDefault) {
      hreflangDefault = document.createElement('link');
      hreflangDefault.setAttribute('id', 'hreflang-default');
      hreflangDefault.setAttribute('rel', 'alternate');
      hreflangDefault.setAttribute('hreflang', 'x-default');
      document.head.appendChild(hreflangDefault);
    }
    hreflangDefault.setAttribute('href', enUrl);

    // Update og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalUrl);

  }, [title, description, lang, path]);

  return null;
};

export default SEO;
