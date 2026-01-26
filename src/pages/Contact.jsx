import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

const WEB3FORMS_ACCESS_KEY = '1bd0b69b-0e0c-41e4-b29f-eff16ef2e7f7';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const seo = {
    en: {
      title: 'Contact Us | Schedule a Conversation | Bir618',
      description: 'Get in touch to discuss your IT transformation, training needs, or advisory requirements. We respond within one business day.'
    },
    tr: {
      title: 'İletişim | Görüşme Planlayın | Bir618',
      description: 'BT dönüşümünüz, eğitim ihtiyaçlarınız veya danışmanlık gereksinimlerinizi görüşmek için bizimle iletişime geçin. Bir iş günü içinde yanıt veriyoruz.'
    }
  };

  const content = {
    en: {
      hero: {
        title: 'Let\'s Talk About Your Transformation',
        subtitle: 'Whether you\'re exploring training options, considering advisory support, or just want to discuss your challenges—we\'re here to help.'
      },
      contactInfo: {
        title: 'Contact Information',
        email: 'info@bir618.com'
      },
      message: {
        title: 'Send Us a Message',
        description: 'We\'ll respond to your inquiry within one business day.',
        namePlaceholder: 'Your Name',
        emailPlaceholder: 'Your Email',
        organizationPlaceholder: 'Your Organization',
        messagePlaceholder: 'Tell us about your needs...',
        submit: 'Send Message',
        submitting: 'Sending...',
        success: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
        error: 'Something went wrong. Please try again or email us directly.',
        sendAnother: 'Send Another Message'
      },
      social: {
        title: 'Connect with Us',
        linkedin: 'Find us on LinkedIn'
      }
    },
    tr: {
      hero: {
        title: 'Dönüşümünüz Hakkında Konuşalım',
        subtitle: 'Eğitim seçeneklerini keşfetmek, danışmanlık desteği almak veya sadece zorluklarınızı konuşmak için — kısaca yardımcı olmak için buradayız.'
      },
      contactInfo: {
        title: 'İletişim Bilgileri',
        email: 'info@bir618.com'
      },
      message: {
        title: 'Bize Mesaj Gönderin',
        description: 'Talebinize bir iş günü içinde yanıt vereceğiz.',
        namePlaceholder: 'Adınız',
        emailPlaceholder: 'E-posta Adresiniz',
        organizationPlaceholder: 'Kuruluşunuz',
        messagePlaceholder: 'İhtiyaçlarınızı anlatın...',
        submit: 'Mesaj Gönder',
        submitting: 'Gönderiliyor...',
        success: 'Teşekkürler! Mesajınız başarıyla gönderildi. En kısa sürede size geri döneceğiz.',
        error: 'Bir şeyler yanlış gitti. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.',
        sendAnother: 'Başka Mesaj Gönder'
      },
      social: {
        title: 'Bağlantı Kurun',
        linkedin: 'LinkedIn\'de Bizi Bulun'
      }
    }
  };

  const t = content[language];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: 'Bir618 Website',
          botcheck: '' // Honeypot field - Web3Forms will reject if this has a value
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || t.message.error);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(t.message.error);
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  // Obfuscated email to prevent bot scraping
  const getEmail = () => {
    const user = 'info';
    const domain = 'bir618';
    const tld = 'com';
    return `${user}@${domain}.${tld}`;
  };

  return (
    <>
      <SEO
        title={seo[language].title}
        description={seo[language].description}
        lang={language === 'tr' ? 'tr' : 'en'}
        path={language === 'tr' ? '/tr/iletisim' : '/contact'}
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8">{t.contactInfo.title}</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="text-lg font-light text-gray-600 mb-1">Email</p>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `mailto:${getEmail()}`;
                      }}
                      className="text-xl font-light text-gray-900 hover:opacity-70 transition-opacity"
                    >
                      {getEmail()}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl md:text-3xl font-light mb-4">{t.social.title}</h3>
              <a
                href="https://www.linkedin.com/company/bir618"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg font-light text-gray-900 hover:opacity-70 transition-opacity"
              >
                {t.social.linkedin}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-4">{t.message.title}</h2>
            <p className="text-base font-light text-gray-600 mb-8">{t.message.description}</p>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 p-8 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
                <p className="text-lg font-light text-green-800">{t.message.success}</p>
                <button
                  onClick={resetForm}
                  className="text-base font-light text-green-700 underline hover:no-underline"
                >
                  {t.message.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users, catches bots */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                />

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-base font-light text-red-800">{errorMessage || t.message.error}</p>
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.message.namePlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:outline-none font-light"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.message.emailPlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:outline-none font-light"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder={t.message.organizationPlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:outline-none font-light"
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.message.messagePlaceholder}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:outline-none font-light resize-none"
                    required
                    disabled={status === 'submitting'}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full px-8 py-4 text-lg font-light bg-amber-600 text-white hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      {t.message.submitting}
                    </>
                  ) : (
                    t.message.submit
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
