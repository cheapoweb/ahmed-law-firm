import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import './FAQPage.css'

const faqKeys = [
  { q: 'pages.faq.q1', a: 'pages.faq.a1' },
  { q: 'pages.faq.q2', a: 'pages.faq.a2' },
  { q: 'pages.faq.q3', a: 'pages.faq.a3' },
  { q: 'pages.faq.q4', a: 'pages.faq.a4' },
  { q: 'pages.faq.q5', a: 'pages.faq.a5' },
  { q: 'pages.faq.q6', a: 'pages.faq.a6' },
]

const FAQPage = () => {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <div className="faq-page">
      <PageBanner
        title={t('pages.faq.bannerTitle')}
        subtitle={t('pages.faq.bannerSubtitle')}
      />

      <section className="faq-page-section">
        <div className="faq-page-container">
          <p className="faq-page-intro">{t('pages.faq.intro')}</p>
          <div className="faq-page-list">
            {faqKeys.map((faq, index) => (
              <div key={index} className={`faq-page-item ${openIndex === index ? 'open' : ''}`}>
                <button className="faq-page-question" onClick={() => toggle(index)}>
                  <span>{t(faq.q)}</span>
                  <span className={`faq-page-icon ${openIndex === index ? 'open' : ''}`}>▼</span>
                </button>
                {openIndex === index && (
                  <>
                    <div className="faq-page-separator" />
                    <div className="faq-page-answer">
                      <p>{t(faq.a)}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="faq-page-footer">
            <p className="faq-page-footer-text">{t('pages.faq.footerText')}</p>
            <div className="faq-page-buttons">
              <button className="faq-page-cta-primary">{t('pages.faq.scheduleCta')}</button>
              <a href="tel:7188489595" className="faq-page-cta-secondary">{t('pages.faq.callCta')}</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FAQPage
