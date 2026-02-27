import { useEffect, useState } from 'react'
import './ReviewsSection.css'

const AUTO_ROTATE_MS = 6500

const reviews = [
  {
    name: 'Maria Rodriguez',
    text: 'The Ahmed Law Firm helped me recover $450,000 after my car accident. Their team was professional, caring, and fought hard for my rights.',
  },
  {
    name: 'John Thompson',
    text: 'After my slip and fall injury, Ahmed Law got me a $275,000 settlement. They handled everything while I focused on recovery.',
  },
  {
    name: 'Patricia Williams',
    text: 'Medical malpractice case resulted in $850,000 recovery. The team at Ahmed Law Firm are exceptional attorneys who truly care.',
  },
]

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % reviews.length)
    }, AUTO_ROTATE_MS)
    return () => window.clearInterval(id)
  }, [])

  const active = reviews[activeIndex]

  return (
    <section className="hp3-reviews-section" aria-label="Client testimonials">
      <div className="hp3-reviews-container">
        <p className="hp3-reviews-label">TESTIMONIALS</p>
        <h2 className="hp3-reviews-heading">
          What Our Clients <em>Say</em>
        </h2>

        <div className="hp3-reviews-card" role="group" aria-roledescription="carousel" aria-label="Testimonials">
          <p className="hp3-reviews-quote">“{active.text}”</p>
          <p className="hp3-reviews-name">{active.name.toUpperCase()}</p>
        </div>

        <div className="hp3-reviews-dots" role="tablist" aria-label="Choose testimonial">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hp3-reviews-dot ${i === activeIndex ? 'hp3-reviews-dot--active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
