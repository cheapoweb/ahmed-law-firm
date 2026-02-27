import { Link } from 'react-router-dom'
import './ValueSection.css'

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
        <p className="hp3-value-label">WHY CHOOSE US</p>
        <h2 className="hp3-value-heading">
          We Give You <em>Personal Attention</em>
        </h2>
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
            FREE CASE EVALUATION
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ValueSection
