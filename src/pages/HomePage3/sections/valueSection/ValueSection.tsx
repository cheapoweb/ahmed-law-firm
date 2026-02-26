import { Link } from 'react-router-dom'
import './ValueSection.css'

const scalesIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 2L3 7v2h18V7l-9-5zM3 11v8l4-2v-6H3zm6 0v6l4 2v-8H9zm6 0v8l4 2v-8h-4z" fill="currentColor"/>
    <path d="M12 6l6 3v2H6V9l6-3z" fill="currentColor" opacity="0.8"/>
  </svg>
)

const handshakeIcon = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M11 12h2M9 14h6M7 10l2 4 2-4 2 4 2-4M4 12h2a2 2 0 012-2h0a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4a2 2 0 012-2zM20 12h-2a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2v-4a2 2 0 00-2-2z"/>
  </svg>
)

const buildingIcon = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 10h6"/>
  </svg>
)

const scalesCardIcon = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3v18M8 9l4-4 4 4M8 15l4 4 4-4M3 12h4l2-6 2 6h4"/>
  </svg>
)

const arrowLeftIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)

const cards = [
  {
    id: 1,
    title: 'Attention You Deserve',
    description: 'We will allay your anxieties and earn your confidence by giving to you our expert legal advice and guiding you every step.',
    icon: handshakeIcon,
  },
  {
    id: 2,
    title: 'Built on Referrals',
    description: 'By giving our clients, and therefore their cases, the attention they deserve, we get the results that keep our clients happy.',
    icon: buildingIcon,
  },
  {
    id: 3,
    title: 'Results You Expect',
    description: 'Through thorough investigating we will see to it that you get every benefit and every right that you are entitled to by law.',
    icon: scalesCardIcon,
  },
]

const ValueSection = () => {
  return (
    <section className="hp3-value-section">
      <div className="hp3-value-container">
        <h2 className="hp3-value-heading">
          AHMED LAW FIRM PROVIDES THE PERSONAL ATTENTION THAT YOU & YOUR CASE DESERVE!
        </h2>
        <div className="hp3-value-heading-decoration">
          <span className="hp3-value-heading-line" aria-hidden />
          <span className="hp3-value-heading-icon" aria-hidden>
            {scalesIcon}
          </span>
          <span className="hp3-value-heading-line" aria-hidden />
        </div>
        <div className="hp3-value-cards">
          {cards.map((card) => (
            <div key={card.id} className="hp3-value-card">
              <div className="hp3-value-card-icon">{card.icon}</div>
              <h3 className="hp3-value-card-title">{card.title}</h3>
              <p className="hp3-value-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="hp3-value-cta-wrap">
          <Link to="/contact" className="hp3-value-cta">
            <span className="hp3-value-cta-icon">{arrowLeftIcon}</span>
            FREE CASE EVALUATION
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ValueSection
