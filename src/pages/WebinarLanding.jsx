import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

const WebinarLanding = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    questions: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const seo = {
    en: {
      title: 'Webinar Registration | Bir618',
      description: 'Register your interest for our upcoming webinar on IT service management and digital transformation.'
    },
    tr: {
      title: 'Web Semineri Kayıt | Bir618',
      description: 'BT hizmet yönetimi ve dijital dönüşüm konulu web seminerimize ilginizi bildirin.'
    }
  };

  const content = {
    en: {
      hero: {
        title: 'Join Our Upcoming Webinar',
        subtitle: 'Register your interest and we\'ll send you the details as soon as they\'re confirmed.'
      },
      form: {
        title: 'Register Your Interest',
        namePlaceholder: 'Your Name',
        emailPlaceholder: 'Your Email',
        companyPlaceholder: 'Company',
        questionsPlaceholder: 'Any specific topics or questions you\'d like us to cover? (optional)',
        submit: 'Register Interest',
        submitting: 'Registering...',
        success: 'Thank you for your interest! We\'ll be in touch with webinar details soon.',
        error: 'Something went wrong. Please try again.',
        registerAnother: 'Register Another Person'
      },
      footer: {
        copyright: '© 2026 Bir618. All rights reserved.',
        backToSite: 'Back to main site'
      }
    },
    tr: {
      hero: {
        title: 'Yaklaşan Web Seminerimize Katılın',
        subtitle: 'İlginizi bildirin, detaylar kesinleştiğinde size göndereceğiz.'
      },
      form: {
        title: 'İlginizi Bildirin',
        namePlaceholder: 'Adınız Soyadınız',
        emailPlaceholder: 'E-posta Adresiniz',
        companyPlaceholder: 'Şirket',
        questionsPlaceholder: 'Ele almamızı istediğiniz konular veya sorularınız var mı? (isteğe bağlı)',
        submit: 'İlgimi Bildir',
        submitting: 'Kaydediliyor...',
        success: 'İlginiz için teşekkürler! Web semineri detaylarıyla yakında sizinle iletişime geçeceğiz.',
        error: 'Bir hata oluştu. Lütfen tekrar deneyin.',
        registerAnother: 'Başka Kişi Kaydet'
      },
      footer: {
        copyright: '© 2026 Bir618. Tüm hakları saklıdır.',
        backToSite: 'Ana siteye dön'
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
      const response = await fetch('/api/webinar-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          questions: formData.questions,
          language: language
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', questions: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error || t.form.error);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(t.form.error);
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <>
      <SEO
        title={seo[language].title}
        description={seo[language].description}
        lang={language === 'tr' ? 'tr' : 'en'}
        path={language === 'tr' ? '/tr/webinar' : '/webinar'}
      />

      {/* Minimal Header */}
      <header className="py-6 px-6 lg:px-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to={language === 'tr' ? '/tr' : '/'} className="text-2xl font-light tracking-tight text-gray-900">
            Bir618
          </Link>
          <Link
            to={language === 'tr' ? '/tr/webinar' : '/webinar'}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = language === 'tr' ? '/webinar' : '/tr/webinar';
            }}
            className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors"
          >
            {language === 'tr' ? 'EN' : 'TR'}
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl font-light leading-relaxed text-gray-700">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">{t.form.title}</h2>

          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 p-8 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
              <p className="text-lg font-light text-green-800">{t.form.success}</p>
              <button
                onClick={resetForm}
                className="text-base font-light text-green-700 underline hover:no-underline"
              >
                {t.form.registerAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 p-4 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-base font-light text-red-800">{errorMessage || t.form.error}</p>
                </div>
              )}

              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.form.namePlaceholder}
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
                  placeholder={t.form.emailPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:outline-none font-light"
                  required
                  disabled={status === 'submitting'}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t.form.companyPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:outline-none font-light"
                  required
                  disabled={status === 'submitting'}
                />
              </div>
              <div>
                <textarea
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  placeholder={t.form.questionsPlaceholder}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:outline-none font-light resize-none"
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
                    {t.form.submitting}
                  </>
                ) : (
                  t.form.submit
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 px-6 lg:px-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-light text-gray-600">{t.footer.copyright}</p>
          <Link
            to={language === 'tr' ? '/tr' : '/'}
            className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors"
          >
            {t.footer.backToSite}
          </Link>
        </div>
      </footer>
    </>
  );
};

export default WebinarLanding;
