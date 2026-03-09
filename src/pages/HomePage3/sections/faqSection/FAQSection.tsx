import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './FAQSection.css'

const faqKeys = [
  { q: 'sections.faq.q1', a: 'sections.faq.a1' },
  { q: 'sections.faq.q2', a: 'sections.faq.a2' },
  { q: 'sections.faq.q3', a: 'sections.faq.a3' },
  { q: 'sections.faq.q4', a: 'sections.faq.a4' },
]

const FAQSection = () => {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section className="hp3-faq-section">
      <div className="hp3-faq-container">
        <p className="hp3-faq-label">{t('sections.faq.label')}</p>
        <h2 className="hp3-faq-heading">
          {t('sections.faq.heading')} <em>{t('sections.faq.headingEm')}</em>
        </h2>

        <div className="hp3-faq-list">
          {faqKeys.map((faq, index) => (
            <div key={index} className={`hp3-faq-item ${openIndex === index ? 'hp3-faq-item--open' : ''}`}>
              <button
                type="button"
                className="hp3-faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{t(faq.q)}</span>
                <span className={`hp3-faq-icon ${openIndex === index ? 'hp3-faq-icon--open' : ''}`} aria-hidden>▼</span>
              </button>
              {openIndex === index && (
                <>
                  <div className="hp3-faq-separator" />
                  <div className="hp3-faq-answer">
                    <p>{t(faq.a)}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
