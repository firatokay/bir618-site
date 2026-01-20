import React from 'react';
import { Link } from 'react-router-dom';

const Advisory = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: 'Transform with Strategic Partnership',
        subtitle: 'Hands-on consulting support for digital services, IT governance, and transformation delivery.'
      },
      opening: 'Frameworks alone don\'t transform organizations—people do, with the right guidance, support, and strategic approach.',
      expertise: {
        areas: [
          {
            title: 'Digital Product & Service Management',
            description: 'Design and deliver digital products that create value for customers and drive business growth.',
            whyMatters: [
              'Disconnected product strategy from business objectives',
              'Poor customer experience leading to lost opportunities',
              'Inefficient operating models slowing innovation',
              'Inability to measure and optimize product value'
            ]
          },
          {
            title: 'IT Governance & Value Optimization',
            description: 'Establish strategic oversight and measurable ROI from technology investments.',
            whyMatters: [
              'IT spending disconnected from business outcomes',
              'Unclear accountability and decision-making',
              'Regulatory compliance gaps and audit failures',
              'Board-level frustration with IT value delivery'
            ]
          },
          {
            title: 'Transformation and Project Delivery',
            description: 'Execute complex change initiatives with structure, agility, and confidence.',
            whyMatters: [
              'Projects over budget, behind schedule, or cancelled',
              'Lack of structure creating chaos',
              'Too much process slowing change',
              'Change fatigue from initiatives that don\'t stick'
            ]
          },
          {
            title: 'AI Strategy & Governance',
            description: 'Turn AI potential into business results. We guide organizations through AI strategy, governance, and implementation—ensuring investments deliver measurable value while maintaining ethical standards.',
            whyMatters: [
              'AI investments failing to deliver expected business value',
              'No governance framework for responsible AI adoption',
              'Scattered pilots without strategic direction',
              'Regulatory and ethical risks going unmanaged'
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
      expertise: {
        areas: [
          {
            title: 'Dijital Ürün & Hizmet Yönetimi',
            description: 'Müşteriler için değer yaratan ve iş büyümesini destekleyen dijital ürünler tasarlayın ve sunun.',
            whyMatters: [
              'Ürün stratejisinin iş hedeflerinden kopuk olması',
              'Zayıf müşteri deneyimi fırsatların kaybedilmesine yol açar',
              'Verimsiz işletim modelleri inovasyonu yavaşlatır',
              'Ürün değerini ölçme ve optimize etme yetersizliği'
            ]
          },
          {
            title: 'BT Yönetişimi & Değer Optimizasyonu',
            description: 'Stratejik gözetim ve teknoloji yatırımlarından ölçülebilir getiri sağlayın.',
            whyMatters: [
              'BT harcamalarının iş sonuçlarından kopuk olması',
              'Belirsiz sorumluluk ve karar verme',
              'Düzenleyici uyum boşlukları ve denetim hataları',
              'Yönetim kurulunun BT değer sunumundan duyduğu hayal kırıklığı'
            ]
          },
          {
            title: 'Dönüşüm ve Proje Yönetimi',
            description: 'Karmaşık değişim girişimlerini yapı, çeviklik ve güvenle gerçekleştirin.',
            whyMatters: [
              'Bütçe aşan, gecikmeli veya iptal edilen projeler',
              'Yapı eksikliği kaos ve kafa karışıklığı yaratır',
              'Çok fazla süreç gerekli değişimi yavaşlatır',
              'Kalıcı olmayan girişimlerden kaynaklanan değişim yorgunluğu'
            ]
          },
          {
            title: 'Yapay Zeka Stratejisi & Yönetişimi',
            description: 'Yapay zeka potansiyelini iş sonuçlarına dönüştürün. Kuruluşları yapay zeka stratejisi, yönetişimi ve uygulaması konusunda yönlendiriyoruz—yatırımların etik standartları korurken ölçülebilir değer sunmasını sağlıyoruz.',
            whyMatters: [
              'Yapay zeka yatırımları beklenen iş değerini üretemiyor',
              'Sorumlu yapay zeka benimsemesi için yönetişim çerçevesi yok',
              'Stratejik yönelimden yoksun dağınık pilot projeler',
              'Yönetilmeyen düzenleyici ve etik riskler'
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
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {area.whyMatters.map((item, idx) => (
                    <p key={idx} className="text-base font-light text-gray-600 pl-4 border-l-2 border-amber-600">
                      {item}
                    </p>
                  ))}
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
