import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useCurrencyFormat } from '../../../../hooks/useCurrencyFormat'
import './PerformanceSection.css'

const achievementKeys = [
  'sections.performance.achievement1',
  'sections.performance.achievement2',
  'sections.performance.achievement3',
  'sections.performance.achievement4',
]

const amounts = [3500000, 2000000, 950000, 800000]

const PerformanceSection = () => {
  const { t } = useTranslation()
  const { formatAmount } = useCurrencyFormat()
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0])
  const hasAnimatedRef = useRef(false)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalsRef = useRef<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true

            amounts.forEach((target, index) => {
              const duration = 2000
              const startTime = Date.now()

              const updateCounter = () => {
                const elapsed = Date.now() - startTime
                const progress = Math.min(elapsed / duration, 1)
                const easeOutQuart = 1 - Math.pow(1 - progress, 4)
                const current = Math.floor(target * easeOutQuart)

                setCounters((prev) => {
                  const newCounters = [...prev]
                  newCounters[index] = current
                  return newCounters
                })

                if (progress < 1) {
                  const timer = setTimeout(updateCounter, 16)
                  intervalsRef.current.push(timer)
                } else {
                  setCounters((prev) => {
                    const newCounters = [...prev]
                    newCounters[index] = target
                    return newCounters
                  })
                }
              }

              updateCounter()
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      intervalsRef.current.forEach((timer) => clearTimeout(timer))
      intervalsRef.current = []
    }
  }, [])

  return (
    <section ref={sectionRef} className="hp3-performance-section">
      <div className="hp3-performance-container">
        <div className="hp3-performance-content">
          <div className="hp3-performance-text">
            <h3 className="hp3-performance-label">{t('sections.performance.label')}</h3>
            <h2 className="hp3-performance-heading">
              {t('sections.performance.heading1')}<br />
              <span className="hp3-performance-heading-line2">
                <em>{t('sections.performance.heading2')}</em>
              </span>
            </h2>
            <div className="hp3-performance-footnote">
              <p className="hp3-performance-footnote-text">
                {t('sections.performance.footnote')}
              </p>
            </div>
          </div>

          <div className="hp3-performance-achievements-grid">
            {achievementKeys.map((key, index) => (
              <div key={index} className="hp3-performance-achievement-card">
                <div className="hp3-performance-achievement-amount">{formatAmount(counters[index])}</div>
                <p className="hp3-performance-achievement-description">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerformanceSection
