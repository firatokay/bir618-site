import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Advisory = ({ language }) => {
  const seo = {
    en: {
      title: 'Strategic IT Consulting Services | Governance & Transformation | Bir618',
      description: 'Hands-on consulting for digital strategy, IT governance, and transformation delivery. Partner with executive teams on strategic IT initiatives.'
    },
    tr: {
      title: 'Stratejik BT Danışmanlık Hizmetleri | Yönetişim & Dönüşüm | Bir618',
      description: 'Dijital strateji, BT yönetişimi ve dönüşüm uygulaması için uygulamalı danışmanlık. Stratejik BT girişimlerinde yönetici ekiplerle ortaklık.'
    }
  };

  const content = {
    en: {
      hero: {
        title: 'Transform with Strategic Partnership',
        subtitle: 'Hands-on consulting support for digital services, IT governance, and transformation delivery.'
      },
      opening: 'Frameworks alone don\'t transform organizations—people do, with the right guidance, support, and strategic approach.',
      whyNeedTitle: 'Why do you need this?',
      expertise: {
        areas: [
          {
            title: 'Digital Product & Service Management',
            description: 'Design and deliver digital products that create value for customers and drive business growth.',
            whyMatters: [
              'Product teams operating without clear governance or accountability...',
              'Manual processes consuming time better spent on innovation...',
              'Products and services failing to meet evolving customer expectations...',
              'Digital initiatives not delivering expected business outcomes...'
            ]
          },
          {
            title: 'IT Governance & Value Optimization',
            description: 'Establish strategic oversight and measurable ROI from technology investments.',
            whyMatters: [
              'IT spending disconnected from business outcomes...',
              'Unclear accountability and decision-making...',
              'Regulatory compliance gaps and audit failures...',
              'Board-level frustration with IT value delivery...'
            ]
          },
          {
            title: 'Transformation and Project Delivery',
            description: 'Execute complex change initiatives with structure, agility, and confidence.',
            whyMatters: [
              'Projects over budget, behind schedule, or cancelled...',
              'Lack of structure creating chaos...',
              'Too much process slowing change...',
              'Change fatigue from initiatives that don\'t stick...'
            ]
          },
          {
            title: 'AI Strategy & Governance',
            description: 'Build AI capabilities that deliver business value while managing risk and maintaining ethical standards.',
            whyMatters: [
              'AI investments failing to deliver expected business value...',
              'No governance framework for responsible AI adoption...',
              'Scattered pilots without strategic direction...',
              'Regulatory and ethical risks going unmanaged...'
            ]
          }
        ]
      },
      cta: {
        title: 'Ready to Start Your Transformation?',
        description: 'Let\'s discuss your challenges and explore how we can help.',
        button: 'Schedule a Conversation'
      }
    },
    tr: {
      hero: {
        title: 'Stratejik Ortaklıkla Dönüşün',
        subtitle: 'Dijital hizmetler, BT yönetişimi ve dönüşüm uygulaması için uygulamalı danışmanlık desteği.'
      },
      opening: 'Çerçeveler tek başına kuruluşları dönüştürmez—doğru rehberlik, destek ve stratejik yaklaşımla insanlar dönüştürür.',
      whyNeedTitle: 'Buna neden ihtiyacınız var?',
      expertise: {
        areas: [
          {
            title: 'Dijital Ürün & Hizmet Yönetimi',
            description: 'Müşteriler için değer yaratan ve iş büyümesini destekleyen dijital ürünler tasarlayın ve sunun.',
            whyMatters: [
              'Net bir yöntem veya yaklaşım olmadan çalışan ekipler...',
              'Daha anlamlı işlere ayrılabilecek zamanı tüketen hantal süreçler...',
              'Değişen müşteri beklentilerini karşılayamayan ürünler ve hizmetler...',
              'Beklenen iş sonuçlarını üretemeyen dijital girişimler...'
            ]
          },
          {
            title: 'BT Yönetişimi & Değer Optimizasyonu',
            description: 'Stratejik gözetim ve teknoloji yatırımlarından ölçülebilir getiri sağlayın.',
            whyMatters: [
              'Doğru önceliklendirilemeyen BT harcamaları...',
              'Sorumluluk ve karar verme ile ilgili belirsizlikler...',
              'Düzenleyici uyum boşlukları ve denetim hataları...',
              'BT yatırımlarından duyulan hayal kırıklığı...'
            ]
          },
          {
            title: 'Dönüşüm ve Proje Yönetimi',
            description: 'Karmaşık değişim girişimlerini yapı, çeviklik ve güvenle gerçekleştirin.',
            whyMatters: [
              'Bütçe aşan, gecikmeli veya iptal edilen projeler...',
              'Kaos ve kafa karışıklığı yaratan yöntemler...',
              'Değişimi yavaşlatan bürokratik süreçler...',
              'Kalıcı olmayan girişimlerden kaynaklanan değişim yorgunluğu...'
            ]
          },
          {
            title: 'Yapay Zeka Stratejisi & Yönetişimi',
            description: 'Riskleri ve etik standartları göz önünde bulundurarak değer yaratan yapay zeka yetenekleri geliştirin.',
            whyMatters: [
              'Beklenen iş değerini üretemeyen yapay zeka yatırımları...',
              'Sorumlu yapay zeka benimsemesi için eksik yönetişim çerçevesi...',
              'Stratejik yönelimden yoksun dağınık pilot projeler...',
              'Yönetilmeyen düzenleyici ve etik riskler...'
            ]
          }
        ]
      },
      cta: {
        title: 'Dönüşümünüze Başlamaya Hazır mısınız?',
        description: 'Zorluklarınızı konuşalım ve nasıl yardımcı olabileceğimizi keşfedelim.',
        button: 'Görüşme Planlayın'
      }
    }
  };

  const t = content[language];

  // Helper function to create proper paths
  const createPath = (path) => {
    if (language === 'en') {
      return path;
    }
    // Map English paths to Turkish paths
    const pathMap = {
      '/': '/tr',
      '/training': '/tr/egitim',
      '/advisory': '/tr/danismanlik',
      '/approach': '/tr/yaklasim',
      '/about': '/tr/hakkimizda',
      '/contact': '/tr/iletisim'
    };
    return pathMap[path] || '/tr';
  };

  return (
    <>
      <SEO
        title={seo[language].title}
        description={seo[language].description}
        lang={language === 'tr' ? 'tr' : 'en'}
      />
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight mb-8">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 max-w-4xl">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
            {t.opening}
          </p>
        </div>
      </section>

      {/* Three Capability Areas */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {t.expertise.areas.map((area, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-light">{area.title}</h3>
                <p className="text-xl font-light leading-relaxed text-gray-700 max-w-3xl">
                  {area.description}
                </p>
                <div className="space-y-3 pt-4">
                  <p className="text-base font-medium text-gray-800">{t.whyNeedTitle}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {area.whyMatters.map((item, idx) => (
                      <p key={idx} className="text-base font-light text-gray-600 pl-4 border-l-2 border-amber-600">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-light">{t.cta.title}</h2>
          <p className="text-xl md:text-2xl font-light opacity-90">{t.cta.description}</p>
          <Link
            to={createPath('/contact')}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-light bg-white text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Advisory;
