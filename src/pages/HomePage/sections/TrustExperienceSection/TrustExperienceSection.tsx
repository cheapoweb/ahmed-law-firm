import { useState, useEffect } from 'react'
import ShapeDivider from '../../../../components/ShapeDivider'
import './TrustExperienceSection.css'

export const TrustExperienceSection = () => {
  const words = ['conversation', 'process', 'system']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Reset displayed text when word changes
  useEffect(() => {
    setDisplayedText('')
    setIsDeleting(false)
  }, [currentWordIndex])

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let timeout: number

    if (!isDeleting && displayedText.length < currentWord.length) {
      // Typing: add one letter at a time
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1))
      }, 100) // Speed of typing
    } else if (!isDeleting && displayedText.length === currentWord.length) {
      // Finished typing, wait then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000) // Wait 2 seconds before deleting
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting: remove one letter at a time from the end
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1))
      }, 50) // Speed of deleting
    } else if (isDeleting && displayedText.length === 0) {
      // Finished deleting, move to next word
      setIsDeleting(false)
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [displayedText, isDeleting, currentWordIndex])

  return (
    <section className="trust-experience-section">
      <ShapeDivider color="#FAFAFA" />
      <div className="trust-experience-container">
        <div className="trust-experience-header">
          <div className="established-header">
            <span className="established-line"></span>
            <span className="established-year">ESTABLISHED 1981</span>
            <span className="established-line"></span>
          </div>
          
          <div className="experience-statement">
            <p className="statement-text">
              When you choose <span className="highlight-firm">Ahmed Law Firm</span>, you receive 40 years of experience engineered for one purpose, maximizing your recovery while minimizing your stress.
            </p>
          </div>
          
          <div className="investment-statement">
            <p className="investment-text">
              We've invested continuously<br />
              into every <em className="dynamic-word">{displayedText}</em> to deliver exceptional outcomes.<br />
              Both in the courtroom and in each interaction you have with us.
            </p>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="18" x2="7" y2="18"></line>
                <line x1="3" y1="12" x2="9" y2="12"></line>
                <line x1="3" y1="6" x2="11" y2="6"></line>
                <line x1="7" y1="18" x2="7" y2="12"></line>
                <line x1="9" y1="12" x2="9" y2="6"></line>
                <line x1="11" y1="6" x2="11" y2="3"></line>
                <polyline points="13 18, 17 14, 19 16, 21 12"></polyline>
                <line x1="13" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
            <h3 className="feature-heading">The Numbers Speak Louder Than Words</h3>
            <p className="feature-description">
              $100M+ recovered, 40+ years of proven results, zero upfront costs, &lt;2 hour response time. A track record you can trust.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="feature-heading">Smart Tech, Personal Touch</h3>
            <p className="feature-description">
              You'll never wonder about your case status again. We've built systems to keep you updated every step of the way.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                <path d="M12 11h4"></path>
                <path d="M10 9v4"></path>
                <path d="M14 9v4"></path>
              </svg>
            </div>
            <h3 className="feature-heading">Specialized Excellence Across Every Case Type</h3>
            <p className="feature-description">
              Board-certified attorneys who master specific niches, not generalists trying to cover everything.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
                <line x1="8" y1="11" x2="14" y2="11"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
              </svg>
            </div>
            <h3 className="feature-heading">Your Recovery, Our Investment</h3>
            <p className="feature-description">
              We advance all costs (experts, records, medical reports) to match insurance companies dollar-for-dollar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
