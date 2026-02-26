import { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import personalInjuryImage from '../../../../assets/Personal-injury.webp'
import workersBenefitsImage from '../../../../assets/workers-benefits.webp'
import './PracticeAreasSection.css'

const AUTO_SCROLL_INTERVAL_MS = 4500
const VISIBLE_CARDS = 3

/* All practice areas we deal in – no divorce, no immigration */
const practiceAreas = [
  { id: 1, title: 'Auto Accidents', image: personalInjuryImage, path: '/practice-areas' },
  { id: 2, title: 'Construction Accidents', image: workersBenefitsImage, path: '/practice-areas' },
  { id: 3, title: 'Medical Malpractice', image: personalInjuryImage, path: '/practice-areas' },
  { id: 4, title: 'Slip & Fall', image: personalInjuryImage, path: '/practice-areas' },
  { id: 5, title: 'Wrongful Death', image: personalInjuryImage, path: '/practice-areas' },
  { id: 6, title: 'Pedestrian Accidents', image: personalInjuryImage, path: '/practice-areas' },
  { id: 7, title: 'Truck Accidents', image: personalInjuryImage, path: '/practice-areas' },
  { id: 8, title: 'Premises Liability', image: personalInjuryImage, path: '/practice-areas' },
  { id: 9, title: 'Workplace Injuries', image: workersBenefitsImage, path: '/practice-areas' },
  { id: 10, title: 'Birth Injury', image: personalInjuryImage, path: '/practice-areas' },
  { id: 11, title: 'Motorcycle Accidents', image: personalInjuryImage, path: '/practice-areas' },
  { id: 12, title: 'Nursing Home Abuse', image: personalInjuryImage, path: '/practice-areas' },
]

/* Duplicated track for seamless loop: [1..12, 1..12, 1, 2] so after 12 we show 1,2 again */
const trackItems = [
  ...practiceAreas,
  ...practiceAreas,
  practiceAreas[0],
  practiceAreas[1],
]
const TRACK_LENGTH = trackItems.length
const MAX_INDEX = TRACK_LENGTH - VISIBLE_CARDS

const scalesIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3v18M8 9l4-4 4 4M8 15l4 4 4-4M3 12h4l2-6 2 6h4" />
  </svg>
)

const gavelIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14 12l-4 4 2 2 4-4M4 8l4 4-2 2-4-4M4 16l4-4 2 2 4 4" />
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)

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

  /* One full card scrolls out per step: move by (index / TRACK_LENGTH) of track = index card widths */
  const translatePercent = (index / TRACK_LENGTH) * 100
  const logicalIndex = index % practiceAreas.length

  return (
    <section className="hp3-practice-section">
      <div className="hp3-practice-container">
        <p className="hp3-practice-subtitle">Practicing Law Since 1992</p>
        <h2 className="hp3-practice-heading">OUR PRACTICE AREAS</h2>
        <div className="hp3-practice-heading-decoration">
          <span className="hp3-practice-heading-line" aria-hidden />
          <span className="hp3-practice-heading-icon" aria-hidden>
            {scalesIcon}
          </span>
          <span className="hp3-practice-heading-line" aria-hidden />
        </div>

        <div className="hp3-practice-slider-wrap">
          <button
            type="button"
            className="hp3-practice-arrow hp3-practice-arrow--prev"
            onClick={goPrev}
            aria-label="Previous practice areas"
          >
            {chevronLeft}
          </button>

          <div className="hp3-practice-slider">
            <div
              className="hp3-practice-track"
              style={{
                transform: `translateX(-${translatePercent}%)`,
                transition: skipTransition ? 'none' : undefined,
              }}
            >
              {trackItems.map((area, i) => (
                <div key={`${area.id}-${i}`} className="hp3-practice-card-wrap">
                  <Link to={area.path} className="hp3-practice-card">
                    <div className="hp3-practice-card-image" style={{ backgroundImage: `url(${area.image})` }} />
                    <span className="hp3-practice-card-title">{area.title}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="hp3-practice-arrow hp3-practice-arrow--next"
            onClick={goNext}
            aria-label="Next practice areas"
          >
            {chevronRight}
          </button>
        </div>

        <div className="hp3-practice-dots">
          {practiceAreas.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hp3-practice-dot ${i === logicalIndex ? 'hp3-practice-dot--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === logicalIndex ? 'true' : undefined}
            />
          ))}
        </div>

        <div className="hp3-practice-cta-wrap">
          <Link to="/practice-areas" className="hp3-practice-cta">
            <span className="hp3-practice-cta-icon">{gavelIcon}</span>
            VIEW ALL PRACTICE AREAS
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PracticeAreasSection
