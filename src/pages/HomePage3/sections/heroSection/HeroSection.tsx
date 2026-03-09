import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import teamImage from '../../../../assets/team-full.webp'
import bgHeroSection from '../../../../assets/BG_HEROSECTION.png'
import './HeroSection.css'

const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <section className="hp3-hero">
      <div className="hp3-hero-bg" style={{ backgroundImage: `url(${bgHeroSection})` }} aria-hidden />
      <div className="hp3-hero-overlay" />
      <div className="hp3-hero-inner">
        <div className="hp3-hero-right">
          <img src={teamImage} alt={t('hero.teamImgAlt')} className="hp3-hero-team-img" />
        </div>
        <div className="hp3-hero-left">
          <h1 className="hp3-hero-headline">
            <span className="hp3-hero-headline-italic">{t('hero.injured')}</span>
            <span className="hp3-hero-headline-bold">{t('hero.getJustice')}</span>
          </h1>
          <p className="hp3-hero-desc">
            {t('hero.description')}
          </p>
          <div className="hp3-hero-buttons">
            <Link to="/contact" className="hp3-hero-btn hp3-hero-btn--primary">
              {t('hero.freeConsultation')}
            </Link>
            <Link to="/attorneys" className="hp3-hero-btn hp3-hero-btn--secondary">
              {t('hero.ourAttorneys')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
