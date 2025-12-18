import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Menu, X } from 'lucide-react';

const App = () => {
  const [language, setLanguage] = useState('en');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        approach: 'Approach',
        connect: 'Connect'
      },
      hero: {
        line1: 'Consultancy.',
        line2: 'Strategy.',
        line3: 'Excellence.',
        tagline: 'Guiding Organizations Through IT Transformation.',
        description: 'We help IT organizations find clarity, build service excellence, and transform with confidence.',
        subdesc: 'Whether defining IT service strategy, implementing ITSM frameworks, or building capable teams, our work is about guiding organizations through their most critical transformation moments.'
      },
      services: {
        consultancy: 'Consultancy',
        training: 'Training',
        assessment: 'Assessment'
      },
      note: {
        title: 'A Note from Us:',
        p1: 'After spending two decades building IT service capabilities for leading organizations across Turkey and Europe, we founded Bir618 in 2007 with a simple belief: IT services should enable business success, not hinder it.',
        p2: 'On that day, we didn\'t know exactly where this journey would take us. What we did know was our passion for service excellence and our desire to work with organizations that truly want to transform.',
        p3: 'Maybe it\'s the power of genuine partnerships, but our path has always aligned with remarkable teams and challenging transformation journeys.',
        p4: 'Even the organizations we no longer work with remain a special part of our story, and we continue to care deeply about their success.',
        p5: 'We hesitate to call ourselves just \'consultants\' because, in truth, we become part of the teams we work with. We don\'t just advise from the sidelines. We design service strategies, build ITSM capabilities, and guide implementation. And when needed, we work alongside teams in their daily operations.',
        p6: 'We often invest more energy in our clients\' transformations than in growing our own business.',
        p7: 'Maybe that\'s not conventional, but since 2007, our work has been filled with purpose, challenging problems to solve, and meaningful progress, both for the organizations we serve and ourselves.',
        p8: 'If you\'ve read this far, thank you. And if we haven\'t connected yet, we\'d welcome the conversation.',
        signature: 'With respect,'
      },
      approach: {
        title: 'How We Work',
        intro: 'With two decades of experience transforming IT service organizations, we take a hands-on, strategic approach by working closely with IT leaders and their teams.',
        focus: 'We work with a select number of organizations at a time, ensuring each one receives the depth of attention and expertise it deserves. This focused approach allows us to go deeper, delivering work that\'s thoughtful, strategic, and built to last.',
        principles: [
          {
            title: 'Strategy First, Always.',
            description: 'Every engagement begins with understanding your business context and defining the service strategy. Because strategy is the foundation for sustainable transformation.'
          },
          {
            title: 'Partners, Not Clients.',
            description: 'We don\'t just work for organizations — we work with them. Our role is to be trusted advisors, bringing collaborative expertise to every transformation.'
          },
          {
            title: 'Practical, Not Theoretical.',
            description: 'ITIL and COBIT are frameworks, not rulebooks. We adapt best practices to your reality, focusing on what will actually work in your environment.'
          },
          {
            title: 'Simplicity with Depth.',
            description: 'The best service designs are elegant and focused. We provide clear, actionable guidance grounded in years of implementation experience.'
          },
          {
            title: 'Open, Honest Dialogue.',
            description: 'IT leaders rarely get unfiltered perspectives from their teams. We provide candid insights, free from internal politics and organizational bias.'
          }
        ]
      },
      services_detail: {
        title: 'What We Offer',
        consultancy: {
          title: 'IT Service Consultancy',
          description: 'Strategic guidance for building service excellence. From current state assessment to transformation roadmap, we work with your team to design and implement ITSM and IT governance frameworks that align with business objectives.',
          focus: ['Service Strategy & Design', 'ITSM Implementation', 'Process Improvement', 'Organizational Change', 'Vendor Selection & Management']
        },
        training: {
          title: 'Professional Training',
          description: 'PeopleCert accredited training that goes beyond certification. We bring real-world experience into the classroom, helping professionals understand not just the "what" but the "how" and "why" of service management.',
          focus: ['ITIL® 4 Foundation to Expert', 'COBIT 2019 Framework', 'PRINCE2® Agile', 'Custom Workshops', 'Executive Briefings']
        },
        assessment: {
          title: 'Capability Assessment',
          description: 'Objective evaluation of your IT service maturity. We assess your current capabilities against industry frameworks and provide actionable recommendations for improvement.',
          focus: ['Service Maturity Assessment', 'Process Gap Analysis', 'Organizational Readiness', 'Tool Evaluation', 'Benchmarking']
        }
      },
      expertise: {
        title: 'Areas of Expertise',
        items: [
          'IT Service Management (ITIL®)',
          'IT Governance (COBIT)',
          'Service Design & Strategy',
          'Digital Transformation',
          'Process Optimization',
          'Organizational Change Management',
          'Project Management (PRINCE2®)',
          'Service Tool Selection & Implementation'
        ]
      },
      cta: {
        title: 'Let\'s Talk',
        description: 'If you\'re facing IT service challenges or considering a transformation journey, we\'d welcome the conversation.',
        email: 'Connect via Email'
      },
      footer: {
        copyright: '© 2025 Bir618 Consulting.',
        trademark: 'ITIL® is a registered trademark of AXELOS Limited. COBIT® is a registered trademark of ISACA.'
      }
    },
    tr: {
      nav: {
        home: 'Ana Sayfa',
        services: 'Hizmetler',
        approach: 'Yaklaşım',
        connect: 'İletişim'
      },
      hero: {
        line1: 'Danışmanlık.',
        line2: 'Strateji.',
        line3: 'Mükemmellik.',
        tagline: 'Kuruluşları BT Dönüşümü Yolunda Yönlendiriyoruz.',
        description: 'BT organizasyonlarının netlik bulmasına, hizmet mükemmeliyeti inşa etmesine ve güvenle dönüşmesine yardımcı oluyoruz.',
        subdesc: 'BT hizmet stratejisi tanımlamadan, ITSM çerçevelerini uygulamaya veya yetenekli ekipler kurmaya kadar, işimiz organizasyonları en kritik dönüşüm anlarında yönlendirmekle ilgili.'
      },
      services: {
        consultancy: 'Danışmanlık',
        training: 'Eğitim',
        assessment: 'Değerlendirme'
      },
      note: {
        title: 'Bizden Bir Not:',
        p1: 'Türkiye ve Avrupa\'daki önde gelen kuruluşlar için yirmi yılımızı BT hizmet yetenekleri inşa ederek geçirdikten sonra, 2007\'de Bir618\'i basit bir inançla kurduk: BT hizmetleri iş başarısını engellemek değil, desteklemek için var olmalı.',
        p2: 'O gün, bu yolculuğun bizi nereye götüreceğini tam olarak bilmiyorduk. Bildiğimiz şey, hizmet mükemmeliyetine olan tutkumuz ve gerçekten dönüşmek isteyen kuruluşlarla çalışma arzumuzdu.',
        p3: 'Belki de gerçek ortaklıkların gücüdür, ama yolumuz her zaman olağanüstü ekipler ve zorlayıcı dönüşüm yolculuklarıyla kesişti.',
        p4: 'Artık birlikte çalışmadığımız kuruluşlar bile hikayemizin özel bir parçası olmaya devam ediyor ve başarılarını derinden önemsemeye devam ediyoruz.',
        p5: 'Kendimize sadece \'danışman\' demekten çekiniyoruz çünkü aslında birlikte çalıştığımız ekiplerin bir parçası oluyoruz. Sadece kenarda tavsiye vermiyoruz. Hizmet stratejileri tasarlıyor, ITSM yetenekleri inşa ediyor ve uygulamayı yönlendiriyoruz. Gerektiğinde ekiplerle günlük operasyonlarında yan yana çalışıyoruz.',
        p6: 'Genellikle müşterilerimizin dönüşümlerine kendi işimizi büyütmekten daha fazla enerji yatırıyoruz.',
        p7: 'Belki bu geleneksel değil, ama 2007\'den beri çalışmamız anlam, çözülecek zorlayıcı problemler ve hem hizmet verdiğimiz kuruluşlar hem de kendimiz için anlamlı ilerleme ile dolu.',
        p8: 'Buraya kadar okuduysanız, teşekkür ederiz. Ve henüz bağlantı kurmadıysak, konuşmayı memnuniyetle karşılarız.',
        signature: 'Saygılarımızla,'
      },
      approach: {
        title: 'Nasıl Çalışıyoruz',
        intro: 'BT hizmet organizasyonlarını dönüştürmede yirmi yıllık deneyimle, BT liderleri ve ekipleriyle yakından çalışarak uygulamalı, stratejik bir yaklaşım benimsiyoruz.',
        focus: 'Aynı anda seçkin sayıda kuruluşla çalışıyoruz, böylece her birine hak ettiği derinlikte dikkat ve uzmanlık sağlıyoruz. Bu odaklı yaklaşım daha derine inmemizi, düşünceli, stratejik ve kalıcı çalışmalar sunmamızı sağlıyor.',
        principles: [
          {
            title: 'Önce Strateji, Her Zaman.',
            description: 'Her çalışma iş bağlamınızı anlamak ve hizmet stratejisini tanımlamakla başlar. Çünkü strateji sürdürülebilir dönüşümün temelidir.'
          },
          {
            title: 'Ortak, Müşteri Değil.',
            description: 'Sadece kuruluşlar için değil — onlarla birlikte çalışıyoruz. Rolümüz güvenilir danışmanlar olmak, her dönüşüme işbirlikçi uzmanlık getirmek.'
          },
          {
            title: 'Pratik, Teorik Değil.',
            description: 'ITIL ve COBIT çerçevelerdir, kural kitapları değil. En iyi uygulamaları gerçeğinize uyarlıyoruz, ortamınızda gerçekten işe yarayacak olana odaklanarak.'
          },
          {
            title: 'Derinlikle Basitlik.',
            description: 'En iyi hizmet tasarımları zarif ve odaklıdır. Yıllarca uygulama deneyimine dayanan net, uygulanabilir rehberlik sağlıyoruz.'
          },
          {
            title: 'Açık, Dürüst Diyalog.',
            description: 'BT liderleri ekiplerinden nadiren filtresiz perspektifler alır. İç politikalardan ve örgütsel önyargılardan uzak, samimi görüşler sunuyoruz.'
          }
        ]
      },
      services_detail: {
        title: 'Sunduğumuz Hizmetler',
        consultancy: {
          title: 'BT Hizmet Danışmanlığı',
          description: 'Hizmet mükemmeliyeti inşa etmek için stratejik rehberlik. Mevcut durum değerlendirmesinden dönüşüm yol haritasına kadar, iş hedeflerine uyumlu ITSM ve BT yönetişim çerçeveleri tasarlamak ve uygulamak için ekibinizle çalışıyoruz.',
          focus: ['Hizmet Stratejisi ve Tasarım', 'ITSM Uygulaması', 'Süreç İyileştirme', 'Örgütsel Değişim', 'Tedarikçi Seçimi ve Yönetimi']
        },
        training: {
          title: 'Profesyonel Eğitim',
          description: 'Sertifikasyonun ötesine geçen PeopleCert akredite eğitim. Gerçek dünya deneyimini sınıfa taşıyor, profesyonellerin hizmet yönetiminin sadece "ne"sini değil, "nasıl"ını ve "neden"ini anlamalarına yardımcı oluyoruz.',
          focus: ['ITIL® 4 Foundation\'dan Expert\'e', 'COBIT 2019 Çerçevesi', 'PRINCE2® Agile', 'Özel Atölyeler', 'Yönetici Brifingleri']
        },
        assessment: {
          title: 'Yetenek Değerlendirmesi',
          description: 'BT hizmet olgunluğunuzun objektif değerlendirmesi. Mevcut yeteneklerinizi endüstri çerçevelerine göre değerlendiriyor ve iyileştirme için uygulanabilir öneriler sunuyoruz.',
          focus: ['Hizmet Olgunluk Değerlendirmesi', 'Süreç Boşluk Analizi', 'Örgütsel Hazırlık', 'Araç Değerlendirmesi', 'Kıyaslama']
        }
      },
      expertise: {
        title: 'Uzmanlık Alanları',
        items: [
          'BT Hizmet Yönetimi (ITIL®)',
          'BT Yönetişimi (COBIT)',
          'Hizmet Tasarımı ve Stratejisi',
          'Dijital Dönüşüm',
          'Süreç Optimizasyonu',
          'Örgütsel Değişim Yönetimi',
          'Proje Yönetimi (PRINCE2®)',
          'Hizmet Aracı Seçimi ve Uygulaması'
        ]
      },
      cta: {
        title: 'Konuşalım',
        description: 'BT hizmet zorlukları yaşıyorsanız veya bir dönüşüm yolculuğu düşünüyorsanız, konuşmayı memnuniyetle karşılarız.',
        email: 'E-posta ile Bağlantı Kur'
      },
      footer: {
        copyright: '© 2025 Bir618 Danışmanlık.',
        trademark: 'ITIL® AXELOS Limited\'in tescilli markasıdır. COBIT® ISACA\'nın tescilli markasıdır.'
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="hover:opacity-70 transition-opacity">
              <img src="/logo.png" alt="Bir618" className="h-8" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#home" className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity">
                {t.nav.home}
              </a>
              <a href="#services" className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity">
                {t.nav.services}
              </a>
              <a href="#approach" className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity">
                {t.nav.approach}
              </a>
              <a href="#connect" className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity">
                {t.nav.connect}
              </a>

              <button
                onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                className="text-sm font-light tracking-wide hover:opacity-70 transition-opacity border-l border-gray-300 pl-10"
              >
                {language === 'en' ? 'TR' : 'EN'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-4 space-y-4">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-light tracking-wide hover:opacity-70 transition-opacity py-2"
              >
                {t.nav.home}
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-light tracking-wide hover:opacity-70 transition-opacity py-2"
              >
                {t.nav.services}
              </a>
              <a
                href="#approach"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-light tracking-wide hover:opacity-70 transition-opacity py-2"
              >
                {t.nav.approach}
              </a>
              <a
                href="#connect"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-light tracking-wide hover:opacity-70 transition-opacity py-2"
              >
                {t.nav.connect}
              </a>
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'tr' : 'en');
                  setMobileMenuOpen(false);
                }}
                className="block text-sm font-light tracking-wide hover:opacity-70 transition-opacity py-2 border-t border-gray-200 pt-4 w-full text-left"
              >
                {language === 'en' ? 'TR' : 'EN'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none">
              {t.hero.line1}
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none">
              {t.hero.line2}
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none">
              {t.hero.line3}
            </h1>
          </div>

          <div className="max-w-2xl space-y-6 text-lg md:text-xl font-light leading-relaxed text-gray-700">
            <p className="text-2xl md:text-3xl font-light text-gray-900">
              {t.hero.tagline}
            </p>
            <p>{t.hero.description}</p>
            <p>{t.hero.subdesc}</p>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="border-t border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <a href="#consultancy" className="text-xl md:text-2xl font-light hover:opacity-70 transition-opacity">
              {t.services.consultancy}
            </a>
            <a href="#training" className="text-xl md:text-2xl font-light hover:opacity-70 transition-opacity">
              {t.services.training}
            </a>
            <a href="#assessment" className="text-xl md:text-2xl font-light hover:opacity-70 transition-opacity">
              {t.services.assessment}
            </a>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            {t.note.title}
          </h2>

          <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
            <p>{t.note.p1}</p>
            <p>{t.note.p2}</p>
            <p>{t.note.p3}</p>
            <p>{t.note.p4}</p>
            <p>{t.note.p5}</p>
            <p>{t.note.p6}</p>
            <p>{t.note.p7}</p>
            <p>{t.note.p8}</p>
          </div>

          <div className="pt-8 space-y-2">
            <p className="text-lg font-light text-gray-700">{t.note.signature}</p>
            <p className="text-2xl font-light">The Bir618 Team</p>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section id="approach" className="py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16">
            {t.approach.title}
          </h2>

          <div className="space-y-12 mb-20">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 max-w-3xl">
              {t.approach.intro}
            </p>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 max-w-3xl">
              {t.approach.focus}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
            {t.approach.principles.map((principle, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-light">
                  {principle.title}
                </h3>
                <p className="text-lg font-light leading-relaxed text-gray-600">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section id="services" className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-20">
            {t.services_detail.title}
          </h2>

          <div className="space-y-24">
            {/* Consultancy */}
            <div id="consultancy" className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-light mb-6">
                  {t.services_detail.consultancy.title}
                </h3>
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  {t.services_detail.consultancy.description}
                </p>
              </div>
              <div className="space-y-4">
                {t.services_detail.consultancy.focus.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg font-light text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Training */}
            <div id="training" className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-light mb-6">
                  {t.services_detail.training.title}
                </h3>
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  {t.services_detail.training.description}
                </p>
              </div>
              <div className="space-y-4">
                {t.services_detail.training.focus.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg font-light text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment */}
            <div id="assessment" className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-light mb-6">
                  {t.services_detail.assessment.title}
                </h3>
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  {t.services_detail.assessment.description}
                </p>
              </div>
              <div className="space-y-4">
                {t.services_detail.assessment.focus.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg font-light text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-32 px-6 lg:px-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16">
            {t.expertise.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            {t.expertise.items.map((item, index) => (
              <div key={index} className="text-xl font-light text-gray-700 pb-6 border-b border-gray-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="connect" className="py-32 px-6 lg:px-12 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-light">
            {t.cta.title}
          </h2>

          <p className="text-xl md:text-2xl font-light opacity-80">
            {t.cta.description}
          </p>

          <a
            href="mailto:info@bir618.com"
            className="inline-flex items-center text-xl font-light hover:opacity-70 transition-opacity group"
          >
            {t.cta.email}
            <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <a href="https://www.linkedin.com/company/bir618" target="_blank" rel="noopener noreferrer" className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="text-center mt-8 space-y-2">
            <p className="text-xs font-light text-gray-500">{t.footer.copyright}</p>
            <p className="text-xs font-light text-gray-400">{t.footer.trademark}</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        ::selection {
          background-color: #f3f4f6;
          color: #111827;
        }

        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
