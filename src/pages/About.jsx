import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = ({ language }) => {
  const seo = {
    en: {
      title: 'About Bir618 | Partners in IT Transformation Since 2005',
      description: 'Two decades of helping organizations build IT service excellence, governance, and transformation capability. PeopleCert accredited partner.'
    },
    tr: {
      title: 'Hakkımızda | 2005\'ten Beri BT Dönüşümünde İş Ortağı | Bir618',
      description: 'Yirmi yıldır kuruluşların BT hizmet mükemmeliyeti, yönetişim ve dönüşüm yeteneği geliştirmesine yardımcı oluyoruz. PeopleCert akredite iş ortağı.'
    }
  };

  const content = {
    en: {
      hero: {
        title: 'Experience That Delivers',
        subtitle: 'We\'ve spent two decades helping organizations build IT service excellence, governance, and transformation capability.'
      },
      story: {
        title: 'Our Story',
        text: 'We established Bir618 in 2005 with a straightforward conviction: technology exists to support business objectives, not complicate them. What began as a vision to help organizations adopt global IT service management best practices has evolved into a comprehensive partnership model—combining training, consulting, and ongoing advisory to guide organizations through their most critical transformation moments.'
      },
      values: {
        title: 'Our Values',
        items: [
          { label: 'Partnership', desc: 'We work alongside your teams as true collaborators—sharing knowledge, building relationships, and investing in your success as if it were our own.' },
          { label: 'Integrity', desc: 'We tell you what you need to hear, not what you want to hear. Our advice is always honest, even when it\'s difficult, because trust is the foundation of lasting partnerships.' },
          { label: 'Practicality', desc: 'We design solutions that work in the real world, not just on paper. If it can\'t be implemented and sustained by your teams, it doesn\'t leave our desk.' },
          { label: 'Continuous Learning', desc: 'We stay curious and never stop learning. The IT landscape evolves constantly, and we invest in staying at the forefront so our clients benefit from the latest thinking.' },
          { label: 'Respect', desc: 'We value diverse perspectives and treat everyone with dignity. Your organizational context, culture, and constraints matter—we listen before we advise.' },
          { label: 'Courage', desc: 'We challenge assumptions and speak up when we see a better way. Real partnership means having the courage to push back respectfully when it serves your best interests.' },
          { label: 'Simplicity', desc: 'We cut through complexity to find clarity. Jargon-free communication and straightforward solutions are our hallmark—transformation shouldn\'t require a translator.' },
          { label: 'Adaptability', desc: 'We flex our approach to fit your reality, not the other way around. Every organization is unique, and cookie-cutter solutions don\'t create lasting change.' }
        ]
      },
      cta: {
        title: 'Let\'s Start a Conversation',
        description: 'Whether you\'re exploring capability development for your team or considering transformation advisory, we\'d welcome the opportunity to discuss your situation.',
        button: 'Contact Us'
      }
    },
    tr: {
      hero: {
        title: 'Sonuç Üreten Deneyim',
        subtitle: 'Yirmi yıldır kuruluşların BT hizmet mükemmeliyeti, yönetişim ve dönüşüm yeteneği geliştirmelerine yardımcı oluyoruz.'
      },
      story: {
        title: 'Hikayemiz',
        text: 'Bir618\'i 2005\'te basit bir inançla kurduk: teknoloji iş hedeflerini desteklemek için var, karmaşıklaştırmak için değil. Kuruluşların küresel BT hizmet yönetimi en iyi uygulamalarını benimsemelerine yardımcı olma vizyonuyla başlayan süreç, kapsamlı bir ortaklık modeline dönüştü—eğitim, danışmanlık ve sürekli rehberliği birleştirerek kuruluşları en kritik dönüşüm anlarında yönlendiriyoruz.'
      },
      values: {
        title: 'Değerlerimiz',
        items: [
          { label: 'Ortaklık', desc: 'Ekiplerinizle gerçek işbirlikçiler olarak yan yana çalışıyoruz—bilgi paylaşıyor, ilişkiler kuruyor ve başarınıza kendimizinmiş gibi yatırım yapıyoruz.' },
          { label: 'Dürüstlük', desc: 'Size duymak istediğinizi değil, duymanız gerekeni söylüyoruz. Tavsiyelerimiz zor olsa bile her zaman dürüsttür, çünkü güven kalıcı ortaklıkların temelidir.' },
          { label: 'Pratiklik', desc: 'Sadece kağıt üzerinde değil, gerçek dünyada işleyen çözümler tasarlıyoruz. Ekipleriniz tarafından uygulanamaz ve sürdürülemez yöntemler bizim önerilerimiz olamaz.' },
          { label: 'Sürekli Öğrenme', desc: 'Meraklı kalıyor ve öğrenmeyi asla bırakmıyoruz. BT ortamı sürekli gelişiyor ve müşterilerimizin en güncel düşüncelerden faydalanması için ön safta kalmaya yatırım yapıyoruz.' },
          { label: 'Saygı', desc: 'Farklı bakış açılarına değer veriyor ve herkese saygıyla davranıyoruz. Kurumsal bağlamınız, kültürünüz ve kısıtlarınız önemlidir—tavsiye vermeden önce dinliyoruz.' },
          { label: 'Cesaret', desc: 'Varsayımları sorgular ve daha iyi bir yol gördüğümüzde sesimizi çıkarırız. Gerçek ortaklık, sizin çıkarlarınıza hizmet ettiğinde saygılı bir şekilde itiraz etme cesaretini gerektirir.' },
          { label: 'Sadelik', desc: 'Netliği bulmak için karmaşıklığı kesip atıyoruz. Jargonsuz iletişim ve anlaşılır çözümler arıyoruz—dönüşüm için tercümana ihtiyaç olmamalı.' },
          { label: 'Uyum Sağlama', desc: 'Yaklaşımımızı sizin gerçekliğinize uyacak şekilde esnekleştiriyoruz, tam tersi değil. Her kuruluş benzersizdir ve kalıplaşmış çözümler kalıcı değişim yaratmaz.' }
        ]
      },
      cta: {
        title: 'Konuşmaya Başlayalım',
        description: 'Ekibiniz için yetenek geliştirme keşfediyor veya dönüşüm danışmanlığı düşünüyor olabilirsiniz. Durumunuzu konuşma fırsatını memnuniyetle karşılarız.',
        button: 'İletişime Geçin'
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
        path={language === 'tr' ? '/tr/hakkimizda' : '/about'}
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
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-light">{t.story.title}</h2>
          <p className="text-xl font-light leading-relaxed text-gray-700">
            {t.story.text}
          </p>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16">{t.values.title}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {t.values.items.map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-light">{item.label}</h3>
                <p className="text-lg font-light text-gray-600">{item.desc}</p>
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

export default About;
