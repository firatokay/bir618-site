import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, MapPin, RefreshCw, Eye, Waypoints, Minimize2, Zap } from 'lucide-react';

const Approach = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: 'Built on What Works',
        subtitle: 'Practical principles and hands-on partnership for change that actually sticks.'
      },
      philosophy: {
        title: 'Our Philosophy',
        text: 'Frameworks alone don\'t transform organizations—people do, with the right guidance, support, and strategic approach. Since 2005, we\'ve learned that lasting change requires partnership, not just advice—working alongside your teams, not observing from a distance.'
      },
      principles: [
        {
          title: 'Focus on Value',
          description: 'Every decision and activity must contribute to value creation. We help you identify what truly matters to your stakeholders and align service delivery accordingly.'
        },
        {
          title: 'Start Where You Are',
          description: 'Build on what already exists rather than starting from scratch. We assess your current capabilities and leverage them as the foundation for improvement.'
        },
        {
          title: 'Progress Iteratively with Feedback',
          description: 'Transformation happens through incremental steps, not big-bang approaches. We break complex changes into manageable iterations, learning and adapting along the way.'
        },
        {
          title: 'Collaborate and Promote Visibility',
          description: 'Success requires engagement across the organization. We work transparently with your teams, ensuring everyone understands the why, how, and progress.'
        },
        {
          title: 'Think and Work Holistically',
          description: 'Services don\'t exist in isolation. We consider the full context—people, processes, technology, and partners—to ensure changes work within your ecosystem.'
        },
        {
          title: 'Keep It Simple and Practical',
          description: 'Complexity is the enemy of adoption. We design solutions that are straightforward to understand, implement, and sustain without unnecessary overhead.'
        },
        {
          title: 'Optimize and Automate',
          description: 'Work smarter, not harder. We identify opportunities to eliminate waste, streamline processes, and leverage automation where it adds genuine value.'
        }
      ],
      cta: {
        title: 'Ready to Partner with Us?',
        description: 'Let\'s discuss how our approach can help transform your organization.',
        button: 'Schedule a Conversation'
      }
    },
    tr: {
      hero: {
        title: 'İşe Yarayan Temeller Üzerine',
        subtitle: 'Gerçekten kalıcı değişim için pratik ilkeler ve uygulamalı ortaklık.'
      },
      philosophy: {
        title: 'Felsefemiz',
        text: 'Çerçeveler tek başına kuruluşları dönüştürmez—doğru rehberlik, destek ve stratejik yaklaşımla insanlar kuruluşları dönüştürür. 2005\'ten beri kalıcı değişimin sadece tavsiye değil, ortaklık gerektirdiğini—ekiplerinizle birlikte çalışmayı, sadece uzaktan gözlemlememeyi—bilerek çalışıyoruz.'
      },
      principles: [
        {
          title: 'Değere Odaklan',
          description: 'Her karar ve faaliyet değer yaratmaya katkıda bulunmalıdır. Paydaşlarınız için gerçekten neyin önemli olduğunu belirlemenize ve hizmet sunumunu buna göre hizalamanıza yardımcı oluyoruz.'
        },
        {
          title: 'Olduğun Yerden Başla',
          description: 'Sıfırdan başlamak yerine mevcut olanın üzerine inşa etmek daha anlamlı olabilir. Mevcut yeteneklerinizi değerlendiriyor ve bunları iyileştirme temeli olarak kullanıyoruz.'
        },
        {
          title: 'Geri Bildirimle Yinelemeli İlerle',
          description: 'Dönüşüm büyük patlama yaklaşımlarıyla değil, artımlı adımlarla gerçekleşir. Karmaşık değişiklikleri yönetilebilir iterasyonlara böler, yol boyunca öğrenir ve adapte oluruz.'
        },
        {
          title: 'İşbirliği Yap ve Görünürlüğü Artır',
          description: 'Başarı organizasyon genelinde katılım gerektirir. Ekiplerinizle şeffaf çalışıyor, herkesin neden, nasıl ve kaydedilen ilerlemeyi anlamasını sağlıyoruz.'
        },
        {
          title: 'Bütünsel Düşün ve Çalış',
          description: 'Hizmetler izole bir biçimde çalışmaz. Değişikliklerin ekosisteminiz içinde başarılı olmasını sağlamak için tüm unsurları—insanlar, süreçler, teknoloji ve ortaklar—göz önünde bulunduruyoruz.'
        },
        {
          title: 'Basit ve Pratik Tut',
          description: 'Karmaşıklık benimsemeyi engeller. Gereksiz ek yük getirmeyen; anlaşılması, uygulanması ve sürdürülmesi kolay çözümler tasarlıyoruz.'
        },
        {
          title: 'Optimize Et ve Otomatikleştir',
          description: 'Daha zor değil, daha akıllı çalışın. İsrafı ortadan kaldırmak, süreçleri kolaylaştırmak ve gerçek değer kattığı yerlerde otomasyondan yararlanmak için fırsatları belirliyoruz.'
        }
      ],
      cta: {
        title: 'Bizimle Ortaklık Kurmaya Hazır mısınız?',
        description: 'Yaklaşımımızın kuruluşunuzu dönüştürmeye nasıl yardımcı olabileceğini konuşalım.',
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
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-light">{t.philosophy.title}</h2>
          <p className="text-xl font-light leading-relaxed text-gray-700">
            {t.philosophy.text}
          </p>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {t.principles.map((principle, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                  {index === 0 && <Gem className="w-6 h-6 text-amber-700" />}
                  {index === 1 && <MapPin className="w-6 h-6 text-amber-700" />}
                  {index === 2 && <RefreshCw className="w-6 h-6 text-amber-700" />}
                  {index === 3 && <Eye className="w-6 h-6 text-amber-700" />}
                  {index === 4 && <Waypoints className="w-6 h-6 text-amber-700" />}
                  {index === 5 && <Minimize2 className="w-6 h-6 text-amber-700" />}
                  {index === 6 && <Zap className="w-6 h-6 text-amber-700" />}
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-gray-900">
                  {principle.title}
                </h3>
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  {principle.description}
                </p>
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

export default Approach;
