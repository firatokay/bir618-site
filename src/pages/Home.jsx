import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe, Target } from 'lucide-react';

const Home = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: 'Strategic Partners in Digital Excellence',
        subtitle: 'We guide organizations through digital transformation with proven expertise in governance, product and service management and project delivery.',
        ctaPrimary: 'Explore Training',
        ctaSecondary: 'Advisory Services'
      },
      services: {
        whyNeedTitle: 'Why do you need this?',
        training: {
          title: 'TRAINING',
          subtitle: 'Build Organizational Capability',
          description: 'Equip your teams with globally recognized frameworks and practical skills. From ITIL® and PRINCE2® Agile to COBIT and custom workshops, we deliver in-house programs tailored to your organizational context.',
          whyNeed: [
            'Teams lack shared language and practices for product and service management',
            'No structured approach on how work gets done',
            'Best practices aren\'t understood well enough to implement',
            'Service quality varies depending on who\'s involved'
          ],
          cta: 'Learn More'
        },
        advisory: {
          title: 'ADVISORY',
          subtitle: 'Strategic Guidance & Implementation',
          description: 'Transform your organization with hands-on consulting support. We partner with leadership teams to design, implement, and optimize digital services, governance frameworks, and transformation initiatives.',
          whyNeed: [
            'Transformation initiatives stall or fail to deliver expected results',
            'Internal teams lack capacity or expertise for large-scale change',
            'External advice doesn\'t stick after engagement ends',
            'Frameworks were adopted but never truly integrated'
          ],
          cta: 'Learn More'
        }
      },
      whyBir618: {
        title: 'Why Bir618?',
        reasons: [
          {
            title: 'PeopleCert Accredited Partner',
            description: 'Globally recognized training credentials backed by practical implementation experience.',
            why: 'Unlike ordinary training providers, we combine certification with real-world application. Our accreditation guarantees quality while our consulting experience ensures relevance.'
          },
          {
            title: 'Battle-Tested Expertise',
            description: 'More than two decades of guiding organizations through their most critical IT transformation moments.',
            why: 'We\'ve seen what works and what doesn\'t across industries, organizations and geographies. Our experience means fewer mistakes, faster results, and proven approaches.'
          },
          {
            title: 'Integrated Approach',
            description: 'ITIL, COBIT, and PRINCE2 Agile work together, not in isolation.',
            why: 'Most consultancies specialize in one framework. We show you how service management, governance, and delivery capabilities integrate to create comprehensive organizational excellence.'
          },
          {
            title: 'Theory Meets Reality',
            description: 'Frameworks adapted through years of hands-on delivery.',
            why: 'Textbooks tell you what should work. We show you what actually works—because we\'ve tested it, refined it, and delivered results with it across industries and organizations.'
          }
        ]
      },
      cta: {
        title: 'Ready to Transform?',
        description: 'Whether you\'re building team capabilities or seeking strategic guidance, we\'re here to help.',
        button: 'Schedule a Conversation'
      }
    },
    tr: {
      hero: {
        title: 'Dijital Mükemmeliyete Ulaşmak İçin Stratejik İş Ortağı',
        subtitle: 'Yönetişim, ürün ve hizmet yönetimi konularında uzmanlığımızla kuruluşları dijital dönüşümde yönlendiriyoruz.',
        ctaPrimary: 'Eğitimleri Keşfedin',
        ctaSecondary: 'Danışmanlık Hizmetleri'
      },
      services: {
        whyNeedTitle: 'Buna neden ihtiyacınız var?',
        training: {
          title: 'EĞİTİM',
          subtitle: 'Kurumsal Yetenek Geliştirme',
          description: 'Ekiplerinizi küresel çapta tanınan çerçeveler ve pratik becerilerle donatın. ITIL® ve PRINCE2® Agile\'dan COBIT ve özel atölyelere kadar, kurumsal bağlamınıza özel şirket içi programlar sunuyoruz.',
          whyNeed: [
            'Ekiplerde ürün ve hizmet yönetimi için ortak dil ve uygulamalar eksik',
            'İşlerin nasıl yapılacağına dair yapılandırılmış bir yaklaşım yok',
            'En iyi yöntemler uygulanabilecek kadar iyi anlaşılmıyor',
            'Hizmet kalitesi kimin dahil olduğuna göre değişiyor'
          ],
          cta: 'Daha Fazla Bilgi'
        },
        advisory: {
          title: 'DANIŞMANLIK',
          subtitle: 'Stratejik Rehberlik & Uygulama',
          description: 'Uygulamalı danışmanlık desteğiyle kuruluşunuzu dönüştürün. Dijital hizmetleri, yönetişim çerçevelerini ve dönüşüm girişimlerini tasarlamak, uygulamak ve optimize etmek için liderlik ekipleriyle ortaklık kuruyoruz.',
          whyNeed: [
            'Dönüşüm girişimleri duraksıyor veya beklenen sonuçları vermiyor',
            'İç ekipler büyük ölçekli değişim için kapasite veya uzmanlıktan yoksun',
            'Dış tavsiyeler çalışma bittikten sonra kalıcı olmuyor',
            'Çerçeveler tam anlamıyla benimsenemiyor, gerçekten entegre edilemiyor'
          ],
          cta: 'Daha Fazla Bilgi'
        }
      },
      whyBir618: {
        title: 'Neden Bir618?',
        reasons: [
          {
            title: 'PeopleCert Akredite İş Ortağı',
            description: 'Pratik uygulama deneyimiyle desteklenen, küresel çapta tanınan eğitim sertifikaları.',
            why: 'Sıradan eğitim sağlayıcılarının aksine, sertifikasyonu gerçek dünya uygulamasıyla birleştiriyoruz. Akreditasyonumuz kaliteyi garanti ederken, danışmanlık deneyimimiz uygunluğu sağlar.'
          },
          {
            title: 'Sahada Test Edilmiş Uzmanlık',
            description: 'Yirmi yıldan fazla süredir kuruluşları en kritik BT dönüşüm anlarında yönlendiriyoruz.',
            why: 'Sektörler, kuruluşlar ve coğrafyalar boyunca neyin işe yarayıp yaramadığını gördük. Deneyimimiz daha az hata, daha hızlı sonuçlar ve kanıtlanmış yaklaşımlar anlamına gelir.'
          },
          {
            title: 'Bütünleşik Yaklaşım',
            description: 'ITIL, COBIT ve PRINCE2 Agile izole değil, birlikte çalışır.',
            why: 'Dijital ürün ve hizmet yönetimi, yönetişim ve teslimat yeteneklerinin kapsamlı kurumsal mükemmeliyet oluşturmak için nasıl entegre olabileceğini gösteriyoruz.'
          },
          {
            title: 'Teori Gerçekle Buluşuyor',
            description: 'Yılların uygulamalı deneyimiyle şekillenmiş çerçeveler.',
            why: 'Ders kitapları neyin işe yaraması gerektiğini söyler. Biz neyin gerçekten işe yaradığını gösteriyoruz—çünkü bunu test ettik, geliştirdik ve farklı sektör ve kuruluşlarda sonuç aldık.'
          }
        ]
      },
      cta: {
        title: 'Dönüşüme Hazır mısınız?',
        description: 'İster ekip yetenekleri geliştiriyor, ister stratejik rehberlik arıyor olun, yardımcı olmak için buradayız.',
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
      {/* Hero Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-tight mb-8">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 max-w-4xl mb-12">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to={createPath('/training')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-light bg-amber-600 text-white hover:bg-amber-700 transition-colors"
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              to={createPath('/advisory')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-light border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Two Core Services */}
      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Training */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-2">{t.services.training.title}</h2>
                <p className="text-xl font-light text-amber-700 mb-6">{t.services.training.subtitle}</p>
              </div>
              <p className="text-lg font-light leading-relaxed text-gray-700">
                {t.services.training.description}
              </p>
              <div className="space-y-3 pt-4">
                <p className="text-base font-medium text-gray-800">{t.services.whyNeedTitle}</p>
                {t.services.training.whyNeed.map((item, index) => (
                  <p key={index} className="text-base font-light text-gray-600 pl-4 border-l-2 border-gray-300">
                    {item}
                  </p>
                ))}
              </div>
              <Link
                to={createPath('/training')}
                className="inline-flex items-center text-lg font-light text-gray-900 hover:opacity-70 transition-opacity group pt-4"
              >
                {t.services.training.cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>

            {/* Advisory */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-2">{t.services.advisory.title}</h2>
                <p className="text-xl font-light text-amber-700 mb-6">{t.services.advisory.subtitle}</p>
              </div>
              <p className="text-lg font-light leading-relaxed text-gray-700">
                {t.services.advisory.description}
              </p>
              <div className="space-y-3 pt-4">
                <p className="text-base font-medium text-gray-800">{t.services.whyNeedTitle}</p>
                {t.services.advisory.whyNeed.map((item, index) => (
                  <p key={index} className="text-base font-light text-gray-600 pl-4 border-l-2 border-gray-300">
                    {item}
                  </p>
                ))}
              </div>
              <Link
                to={createPath('/advisory')}
                className="inline-flex items-center text-lg font-light text-gray-900 hover:opacity-70 transition-opacity group pt-4"
              >
                {t.services.advisory.cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bir618 */}
      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-20">{t.whyBir618.title}</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {t.whyBir618.reasons.map((reason, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  {index === 0 && <Award className="w-6 h-6 text-amber-700" />}
                  {index === 1 && <Globe className="w-6 h-6 text-amber-700" />}
                  {index === 2 && <Target className="w-6 h-6 text-amber-700" />}
                  {index === 3 && <Users className="w-6 h-6 text-amber-700" />}
                </div>
                <h3 className="text-2xl md:text-3xl font-light">{reason.title}</h3>
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  {reason.description}
                </p>
                <p className="text-base font-light leading-relaxed text-gray-600 pl-4 border-l-2 border-amber-600">
                  {reason.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
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

export default Home;
