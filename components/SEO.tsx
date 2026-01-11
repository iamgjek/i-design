import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SEO: React.FC = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    // 更新 document title
    const title = t('seo.title');
    if (title) {
      document.title = title;
    }

    // 更新或創建 meta 標籤
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      if (!content) return;
      
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 更新 HTML lang 屬性
    const htmlElement = document.documentElement;
    const langMap: { [key: string]: string } = {
      'zh-TW': 'zh-Hant',
      'zh-CN': 'zh-Hans',
      'en': 'en'
    };
    htmlElement.setAttribute('lang', langMap[i18n.language] || 'zh-Hant');

    // 更新 Primary Meta Tags
    updateMetaTag('title', t('seo.title'));
    updateMetaTag('description', t('seo.description'));
    updateMetaTag('keywords', t('seo.keywords'));
    updateMetaTag('language', langMap[i18n.language] || 'zh-Hant');

    // 更新 Open Graph Meta Tags
    updateMetaTag('og:title', t('seo.ogTitle'), true);
    updateMetaTag('og:description', t('seo.ogDescription'), true);
    
    const ogLocaleMap: { [key: string]: string } = {
      'zh-TW': 'zh_TW',
      'zh-CN': 'zh_CN',
      'en': 'en_US'
    };
    updateMetaTag('og:locale', ogLocaleMap[i18n.language] || 'zh_TW', true);

    // 更新 Twitter Meta Tags
    updateMetaTag('twitter:title', t('seo.twitterTitle'));
    updateMetaTag('twitter:description', t('seo.twitterDescription'));

    // 更新 JSON-LD 結構化數據
    const jsonLd = t('seo.jsonLd', { returnObjects: true }) as any;
    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: jsonLd.name,
      description: jsonLd.description,
      url: 'https://i-design.com/',
      logo: 'https://i-design.com/logo.png',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
      telephone: '',
      address: {
        '@type': 'PostalAddress',
        addressCountry: i18n.language === 'en' ? 'US' : 'TW'
      },
      areaServed: {
        '@type': 'Country',
        name: i18n.language === 'en' ? 'United States' : 'Taiwan'
      },
      serviceType: jsonLd.serviceType,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: jsonLd.catalogName,
        itemListElement: jsonLd.services.map((service: any, index: number) => ({
          '@type': 'Offer',
          position: index + 1,
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description
          }
        }))
      }
    };

    jsonLdScript.textContent = JSON.stringify(structuredData);

    // 更新 canonical URL
    // 對於 SPA，所有語言版本都使用同一個 URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const baseUrl = 'https://i-design.com';
    // 所有語言版本都指向同一個 URL（因為這是 SPA）
    canonicalLink.setAttribute('href', `${baseUrl}/`);

    // 更新 alternate hreflang 標籤
    // 對於 SPA，所有語言版本都使用同一個 URL，但標示不同的語言
    const languages = ['zh-TW', 'en', 'zh-CN'];
    const hreflangMap: { [key: string]: string } = {
      'zh-TW': 'zh-Hant',
      'zh-CN': 'zh-Hans',
      'en': 'en'
    };
    
    languages.forEach((lang) => {
      let hreflangLink = document.querySelector(`link[rel="alternate"][hreflang="${hreflangMap[lang]}"]`);
      if (!hreflangLink) {
        hreflangLink = document.createElement('link');
        hreflangLink.setAttribute('rel', 'alternate');
        hreflangLink.setAttribute('hreflang', hreflangMap[lang]);
        document.head.appendChild(hreflangLink);
      }
      // 所有語言版本都指向同一個 URL
      hreflangLink.setAttribute('href', `${baseUrl}/`);
    });

    // 添加 x-default hreflang
    let defaultHreflang = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (!defaultHreflang) {
      defaultHreflang = document.createElement('link');
      defaultHreflang.setAttribute('rel', 'alternate');
      defaultHreflang.setAttribute('hreflang', 'x-default');
      document.head.appendChild(defaultHreflang);
    }
    defaultHreflang.setAttribute('href', `${baseUrl}/`);

  }, [i18n.language, t]);

  return null; // 此元件不渲染任何內容
};

export default SEO;
