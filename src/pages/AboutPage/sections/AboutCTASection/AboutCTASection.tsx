import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useCurrencyFormat } from '../../../../hooks/useCurrencyFormat'
import './AboutCTASection.css'

export const AboutCTASection = () => {
  const { t } = useTranslation()
  const { formatLargeAmount } = useCurrencyFormat()
  return (
    <section className="about-cta-section">
      <div className="about-cta-container">
        <h2 className="about-cta-heading">
          {t('pages.about.ctaHeading')}
        </h2>
        <p className="about-cta-description">
          {t('pages.about.ctaDesc', { amount: formatLargeAmount(100_000_000, '+') })}
        </p>
        <div className="about-cta-buttons">
          <Link to="/contact" className="cta-button-primary">
            {t('pages.about.ctaButton')}
          </Link>
          <a href="tel:7188489595" className="cta-button-secondary">
            {t('common.phone')}
          </a>
        </div>
      </div>
    </section>
  )
}
