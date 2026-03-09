import { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../../../context/LanguageContext'
import { PRACTICE_AREAS_CATEGORIES } from '../../../../pages/PracticeAreasPage/practiceAreasConfig'
import personalInjuryImage from '../../../../assets/Personal-injury.webp'
import workersBenefitsImage from '../../../../assets/workers-benefits.webp'
import autoAccidentsImage from '../../../../assets/Auto Accidents.webp'
import medicalMalpracticeImage from '../../../../assets/Medical Malpractice.webp'
import truckAccidentsImage from '../../../../assets/Truck Accidents.webp'
import wrongfulDeathImage from '../../../../assets/Wrongful Death.webp'
import './PracticeAreasSection.css'

const AUTO_SCROLL_INTERVAL_MS = 4500
const VISIBLE_CARDS = 3

const MAIN_IMAGES: Record<string, string> = {
  'personal-injury': personalInjuryImage,
  'workers-compensation': workersBenefitsImage,
  'medical-malpractice': medicalMalpracticeImage,
  'vehicle-accidents': autoAccidentsImage,
  'transportation-accidents': truckAccidentsImage,
  'catastrophic-abuse-cases': wrongfulDeathImage,
}

const practiceAreas = PRACTICE_AREAS_CATEGORIES.map((cat, i) => ({
  id: i + 1,
  titleKey: `practiceAreas.${cat.slug}`,
  fallbackTitle: cat.title,
  path: cat.path,
  image: MAIN_IMAGES[cat.slug] ?? personalInjuryImage,
}))

/* Duplicated track for seamless loop: [1..N, 1..N, 1, 2] so after N we show 1,2 again */
const trackItems = [
  ...practiceAreas,
  ...practiceAreas,
  practiceAreas[0],
  practiceAreas[1],
]
const TRACK_LENGTH = trackItems.length
const MAX_INDEX = TRACK_LENGTH - VISIBLE_CARDS

const chevronLeft = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M15 18l-6-6 6-6" />
  </svg>
)

const chevronRight = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M9 18l6-6-6-6" />
  </svg>
)

const PracticeAreasSection = () => {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const isRtl = language === 'ar'
  const [index, setIndex] = useState(0)
  const [skipTransition, setSkipTransition] = useState(false)

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? MAX_INDEX : i - 1))
  }, [])
  const goNext = useCallback(() => {
    setIndex((i) => {
      if (i >= MAX_INDEX) {
        setSkipTransition(true)
        return 0
      }
      return i + 1
    })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => {
        if (i >= MAX_INDEX) {
          setSkipTransition(true)
          return 0
        }
        return i + 1
      })
    }, AUTO_SCROLL_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (skipTransition) {
      const id = requestAnimationFrame(() => setSkipTransition(false))
      return () => cancelAnimationFrame(id)
    }
  }, [skipTransition])

  /* One full card scrolls out per step; in RTL use positive % so direction matches reading order */
  const translatePercent = (index / TRACK_LENGTH) * 100
  const logicalIndex = index % practiceAreas.length
  const translateX = isRtl ? `${translatePercent}%` : `-${translatePercent}%`

  return (
    <section className="hp3-practice-section">
      <div className="hp3-practice-container">
        <p className="hp3-practice-label">{t('home.practiceAreasLabel')}</p>
        <h2 className="hp3-practice-heading">
          {t('home.practiceAreasHeading')} <em>{t('home.practiceAreasHeadingEm')}</em>
        </h2>

        <div className="hp3-practice-slider-wrap">
          <button
            type="button"
            className="hp3-practice-arrow hp3-practice-arrow--prev"
            onClick={goPrev}
            aria-label={t('home.prevSlide')}
          >
            {isRtl ? chevronRight : chevronLeft}
          </button>

          <div className="hp3-practice-slider">
            <div
              className="hp3-practice-track"
              style={{
                transform: `translateX(${translateX})`,
                transition: skipTransition ? 'none' : undefined,
              }}
            >
              {trackItems.map((area, i) => (
                <div key={`${area.path}-${i}`} className="hp3-practice-card-wrap">
                  <Link to={area.path} className="hp3-practice-card">
                    <div className="hp3-practice-card-image" style={{ backgroundImage: `url(${area.image})` }} />
                    <span className="hp3-practice-card-title">{t(area.titleKey) || area.fallbackTitle}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="hp3-practice-arrow hp3-practice-arrow--next"
            onClick={goNext}
            aria-label={t('home.nextSlide')}
          >
            {isRtl ? chevronLeft : chevronRight}
          </button>
        </div>

        <div className="hp3-practice-dots">
          {practiceAreas.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hp3-practice-dot ${i === logicalIndex ? 'hp3-practice-dot--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={t('home.goToSlide', { number: i + 1 })}
              aria-current={i === logicalIndex ? 'true' : undefined}
            />
          ))}
        </div>

        <div className="hp3-practice-cta-wrap">
          <Link to="/practice-areas" className="hp3-practice-cta">
            {t('home.viewAllPracticeAreas')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PracticeAreasSection
