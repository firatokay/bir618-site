import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const Training = ({ language }) => {
  const seo = {
    en: {
      title: 'ITIL, PRINCE2, COBIT Training | Strategic Capability Building | Bir618',
      description: 'PeopleCert-accredited capability building programs. In-house ITIL, PRINCE2, COBIT training customized to your transformation objectives.'
    },
    tr: {
      title: 'ITIL, PRINCE2, COBIT Eğitimi | Stratejik Yetenek Geliştirme | Bir618',
      description: 'PeopleCert akredite yetenek geliştirme programları. Dönüşüm hedeflerinize özel kurum içi ITIL, PRINCE2, COBIT eğitimleri.'
    }
  };

  const content = {
    en: {
      hero: {
        title: 'Build Capabilities That Last',
        subtitle: 'PeopleCert-accredited training programs that go beyond certification to build practical, applicable skills.'
      },
      opening: 'We understand the frustration when training investments don\'t translate into real change. That\'s why we partner with you to understand your challenges first, then design programs that address what your teams actually need—not just what\'s on the exam.',
      whyNeedTitle: 'Why do you need this?',
      programs: [
        {
          title: 'ITIL®',
          subtitle: 'Digital Product and Service Management Excellence',
          description: 'From Foundation to Master, build comprehensive digital product and service management capability.',
          whyNeed: [
            'Services feel disconnected from business value...',
            'Can\'t manage incidents, problems, and changes effectively...',
            'Teams work in silos without shared practices...',
            'Customer satisfaction suffers from inconsistent delivery...'
          ],
          link: 'Learn More'
        },
        {
          title: 'PRINCE2® Agile',
          subtitle: 'Agile Project Delivery',
          description: 'Master project management combining PRINCE2 structure with speed and flexibility.',
          whyNeed: [
            'Projects lack clear governance and accountability...',
            'Traditional methods feel too rigid for changing requirements...',
            'Agile approaches lack strategic oversight...',
            'Stakeholders struggle to see progress and value...'
          ],
          link: 'Learn More'
        },
        {
          title: 'COBIT',
          subtitle: 'IT Governance',
          description: 'Establish strategic IT governance aligned with business objectives.',
          whyNeed: [
            'IT investments lack clear business justification...',
            'Governance feels like overhead, not enablement...',
            'Risk management is inconsistent or missing...',
            'Compliance requirements create confusion...'
          ],
          link: 'Learn More'
        },
        {
          title: 'Custom Workshops',
          subtitle: 'Tailored to Your Needs',
          description: 'Customized programs addressing your specific organizational challenges and goals.',
          whyNeed: [
            'Standard training doesn\'t address your context...',
            'Teams need practical application, not just theory...',
            'Multiple frameworks need to work together...',
            'Specific organizational challenges require focused attention...'
          ],
          link: 'Learn More'
        }
      ],
      cta: {
        title: 'Ready to Build Your Team\'s Capabilities?',
        description: 'Let\'s discuss your training needs and design a program that fits your organization.',
        button: 'Schedule a Conversation'
      }
    },
    tr: {
      hero: {
        title: 'Kalıcı Yetenekler Geliştirin',
        subtitle: 'Sertifikanın ötesine geçerek pratik, uygulanabilir beceriler kazandıran PeopleCert-akredite eğitim programları.'
      },
      opening: 'Eğitim yatırımlarının gerçek değişime dönüşmediğinde yaşanan hayal kırıklığını anlıyoruz. Bu yüzden önce sizinle birlikte, zorluklarınızı anlamak için çalışıyor, ardından ekiplerinizin gerçekten ihtiyaç duyduğu—sadece sınav içeriğine dayalı olmayan—becerileri kazandıran programlar tasarlıyoruz.',
      whyNeedTitle: 'Buna neden ihtiyacınız var?',
      programs: [
        {
          title: 'ITIL®',
          subtitle: 'Dijital Ürün ve Hizmet Yönetimi Mükemmeliyeti',
          description: 'Foundation\'dan Master\'a, kapsamlı dijital ürün ve hizmet yönetimi yeteneği geliştirin.',
          whyNeed: [
            'Hizmetlerin değer yaratmadığı hissediliyor...',
            'Arızalar, problemler ve değişiklikler etkili bir şekilde yönetilemiyor...',
            'Ekipler birbirlerinden habersiz, uzak çalışıyor...',
            'Tutarsızlıklar müşteri memnuniyetini düşürüyor...'
          ],
          link: 'Daha Fazla Bilgi'
        },
        {
          title: 'PRINCE2® Agile',
          subtitle: 'Çevik Proje Yönetimi',
          description: 'PRINCE2 yapısını hız ve esneklikle birleştiren proje yönetiminde ustalaşın.',
          whyNeed: [
            'Projelerde net yönetişim ve hesap verebilirlik eksik...',
            'Geleneksel yöntemler değişen gereksinimler için çok katı...',
            'Çevik yaklaşımlar stratejik gözetimden yoksun...',
            'Paydaşlar ilerlemeyi ve değeri görmekte zorlanıyor...'
          ],
          link: 'Daha Fazla Bilgi'
        },
        {
          title: 'COBIT',
          subtitle: 'BT Yönetişimi',
          description: 'İş hedefleriyle uyumlu stratejik BT yönetişimini öğrenin.',
          whyNeed: [
            'BT yatırımları için geçerli iş dayanakları eksik...',
            'Yönetişim kolaylaştırıcı değil, ek yük gibi hissediliyor...',
            'Risk yönetimi tutarsız veya eksik...',
            'Uyum gereksinimleri kafa karışıklığı yaratıyor...'
          ],
          link: 'Daha Fazla Bilgi'
        },
        {
          title: 'Özel Atölyeler',
          subtitle: 'İhtiyaçlarınıza Özel',
          description: 'Kurumsal zorluklarınıza ve hedeflerinize göre eğitim programlarını özelleştirin.',
          whyNeed: [
            'Standart eğitimler içinde bulunduğumuz ortama hitap etmiyor...',
            'Ekipler sadece teori değil, pratik uygulama istiyor...',
            'Birden fazla çerçevenin birlikte çalışması gerekiyor...',
            'Belirli kurumsal zorluklar odak ve ilgi gerektiriyor...'
          ],
          link: 'Daha Fazla Bilgi'
        }
      ],
      cta: {
        title: 'Ekibinizin Yeteneklerini Geliştirmeye Hazır mısınız?',
        description: 'Eğitim ihtiyaçlarınızı konuşalım ve kuruluşunuza uygun bir program tasarlayalım.',
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
      {/* Hero Section */}
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

      {/* Opening Statement */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
            {t.opening}
          </p>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {t.programs.map((program, index) => (
              <div key={index} className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light mb-2">{program.title}</h2>
                  <p className="text-xl font-light text-amber-700 mb-6">{program.subtitle}</p>
                </div>
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  {program.description}
                </p>
                <div className="space-y-3 pt-4">
                  <p className="text-base font-medium text-gray-800">{t.whyNeedTitle}</p>
                  {program.whyNeed.map((item, idx) => (
                    <p key={idx} className="text-base font-light text-gray-600 pl-4 border-l-2 border-gray-300">
                      {item}
                    </p>
                  ))}
                </div>
                <Link
                  to={createPath('/contact')}
                  className="inline-flex items-center text-lg font-light text-gray-900 hover:opacity-70 transition-opacity group pt-4"
                >
                  {program.link}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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

export default Training;
