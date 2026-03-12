import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useCurrencyFormat } from '../../../../hooks/useCurrencyFormat'
import './ReviewsSection.css'

const AUTO_ROTATE_MS = 6500

const reviewKeys = [
  { textKey: 'sections.reviews.review1Text', nameKey: 'sections.reviews.review1Name', amountUsd: 450000 },
  { textKey: 'sections.reviews.review2Text', nameKey: 'sections.reviews.review2Name', amountUsd: 275000 },
  { textKey: 'sections.reviews.review3Text', nameKey: 'sections.reviews.review3Name', amountUsd: 850000 },
]

const ReviewsSection = () => {
  const { t } = useTranslation()
  const { formatAmount } = useCurrencyFormat()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % reviewKeys.length)
    }, AUTO_ROTATE_MS)
    return () => window.clearInterval(id)
  }, [])

  const active = reviewKeys[activeIndex]

  return (
    <section className="hp3-reviews-section" aria-label={t('sections.reviews.heading')}>
      <div className="hp3-reviews-container">
        <p className="hp3-reviews-label">{t('sections.reviews.label')}</p>
        <h2 className="hp3-reviews-heading">
          {t('sections.reviews.heading')} <em>{t('sections.reviews.headingEm')}</em>
        </h2>

        <div className="hp3-reviews-card" role="group" aria-roledescription="carousel">
          <p className="hp3-reviews-quote">"{t(active.textKey, { amount: formatAmount(active.amountUsd) })}"</p>
          <p className="hp3-reviews-name">{t(active.nameKey).toUpperCase()}</p>
        </div>

        <div className="hp3-reviews-dots" role="tablist">
          {reviewKeys.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hp3-reviews-dot ${i === activeIndex ? 'hp3-reviews-dot--active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={t('sections.reviews.showTestimonial', { n: i + 1 })}
              aria-current={i === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
