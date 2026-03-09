import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './ValueSection.css'

const YOUTUBE_ID = 'i5Z00p-bHiE'
const EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`

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

const shieldIcon = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const cards = [
  { id: 1, titleKey: 'sections.value.card1Title', descKey: 'sections.value.card1Desc', icon: handshakeIcon },
  { id: 2, titleKey: 'sections.value.card2Title', descKey: 'sections.value.card2Desc', icon: buildingIcon },
  { id: 3, titleKey: 'sections.value.card3Title', descKey: 'sections.value.card3Desc', icon: scalesCardIcon },
  { id: 4, titleKey: 'sections.value.card4Title', descKey: 'sections.value.card4Desc', icon: shieldIcon },
]

const ValueSection = () => {
  const { t } = useTranslation()
  return (
    <section className="hp3-value-section">
      <div className="hp3-value-container">
        <p className="hp3-value-label">{t('sections.value.label')}</p>
        <h2 className="hp3-value-heading">
          {t('sections.value.heading')} <em>{t('sections.value.headingEm')}</em>
        </h2>
        <div className="hp3-value-layout">
          <div className="hp3-value-cards-col">
            {cards.map((card) => (
              <div key={card.id} className="hp3-value-card">
                <div className="hp3-value-card-icon">{card.icon}</div>
                <h3 className="hp3-value-card-title">{t(card.titleKey)}</h3>
                <p className="hp3-value-card-desc">{t(card.descKey)}</p>
              </div>
            ))}
          </div>
          <div className="hp3-value-video-col">
            <div className="hp3-value-video-wrap">
              <div className="hp3-value-video-aspect">
                <iframe
                  src={EMBED_URL}
                  title={t('sections.value.videoTitle')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="hp3-value-video-iframe"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hp3-value-cta-wrap">
          <Link to="/contact" className="hp3-value-cta">
            {t('sections.value.cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ValueSection
