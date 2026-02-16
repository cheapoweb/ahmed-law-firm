import { useState, useEffect, useRef } from 'react'
import ShapeDivider from '../../../../components/ShapeDivider'
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

export const PerformanceSection = () => {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0])
  const hasAnimatedRef = useRef(false)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalsRef = useRef<NodeJS.Timeout[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true
            
            achievements.forEach((achievement, index) => {
              const target = achievement.amount
              const duration = 2000 // 2 seconds
              const startTime = Date.now()
              
              const updateCounter = () => {
                const elapsed = Date.now() - startTime
                const progress = Math.min(elapsed / duration, 1)
                
                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4)
                const current = Math.floor(target * easeOutQuart)
                
                setCounters((prev) => {
                  const newCounters = [...prev]
                  newCounters[index] = current
                  return newCounters
                })
                
                if (progress < 1) {
                  const timer = setTimeout(updateCounter, 16) // ~60fps
                  intervalsRef.current.push(timer)
                } else {
                  // Ensure final value is exact
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
      // Clean up any running timers
      intervalsRef.current.forEach(timer => clearTimeout(timer))
      intervalsRef.current = []
    }
  }, [])

  return (
    <section ref={sectionRef} className="performance-section">
      <ShapeDivider color="#233041" />
      <div className="performance-container">
        <div className="performance-content">
          <div className="performance-text">
            <h3 className="performance-label">OUR PERFORMANCE</h3>
            <h2 className="performance-heading">
              Across 1000's of cases,<br />
              <em>a half-billion+ recovered.</em>
            </h2>
            <div className="performance-footnote">
              <p className="footnote-text">
                *INDUSTRY AVERAGES TRACK THE FIELD. OUR 98% RATE REPRESENTS THE STANDARD WITHIN THE COMPLEX LITIGATION WE NAVIGATE.
              </p>
            </div>
          </div>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-amount">{formatNumber(counters[index])}</div>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
