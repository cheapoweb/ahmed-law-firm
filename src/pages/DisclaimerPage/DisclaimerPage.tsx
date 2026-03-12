import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import './DisclaimerPage.css'

const DisclaimerPage = () => {
  const { t } = useTranslation()
  return (
    <div className="disclaimer-page">
      <PageBanner
        title={t('pages.disclaimer.bannerTitle')}
        subtitle={t('pages.disclaimer.bannerSubtitle')}
      />
      <section className="disclaimer-section">
        <div className="disclaimer-container">
          <div className="disclaimer-content">
            <p>{t('pages.disclaimer.intro')}</p>
            <h2>{t('pages.disclaimer.attorneyAdviceTitle')}</h2>
            <p>{t('pages.disclaimer.attorneyAdvice')}</p>
            <h2>{t('pages.disclaimer.noRelationshipTitle')}</h2>
            <p>{t('pages.disclaimer.noRelationship')}</p>
            <h2>{t('pages.disclaimer.priorResultsTitle')}</h2>
            <p>{t('pages.disclaimer.priorResults')}</p>
            <h2>{t('pages.disclaimer.contactTitle')}</h2>
            <p>{t('pages.disclaimer.contact')}</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default DisclaimerPage
