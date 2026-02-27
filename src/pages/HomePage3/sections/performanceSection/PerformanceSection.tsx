import { useState, useEffect, useRef } from 'react'
import './PerformanceSection.css'

const achievements = [
  { amount: 110174972, description: 'Jury Verdict for Paralyzed Cyclist' },
  { amount: 53500000, description: 'Jury Verdict in Construction Accident Case' },
  { amount: 32756156, description: 'Jury Verdict in Car Accident Case' },
  { amount: 25000000, description: 'Settlement for Victim in Floor Collapse Case' },
]

const formatNumber = (num: number): string => {
  return `$${num.toLocaleString('en-US')}`
}

const PerformanceSection = () => {
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

            achievements.forEach((achievement, index) => {
              const target = achievement.amount
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
            <h3 className="hp3-performance-label">OUR PERFORMANCE</h3>
            <h2 className="hp3-performance-heading">
              Across 1000's Of Cases,<br />
              <span className="hp3-performance-heading-line2">
                <em>A Half-Billion+ Recovered</em>
              </span>
            </h2>
            <div className="hp3-performance-footnote">
              <p className="hp3-performance-footnote-text">
                *INDUSTRY AVERAGES TRACK THE FIELD. OUR 98% RATE REPRESENTS THE STANDARD WITHIN THE COMPLEX LITIGATION WE NAVIGATE.
              </p>
            </div>
          </div>

          <div className="hp3-performance-achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="hp3-performance-achievement-card">
                <div className="hp3-performance-achievement-amount">{formatNumber(counters[index])}</div>
                <p className="hp3-performance-achievement-description">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerformanceSection
