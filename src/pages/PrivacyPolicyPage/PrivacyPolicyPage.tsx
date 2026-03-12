import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import './PrivacyPolicyPage.css'

const PrivacyPolicyPage = () => {
  const { t } = useTranslation()
  return (
    <div className="privacy-policy-page">
      <PageBanner
        title={t('pages.privacyPolicy.bannerTitle')}
        subtitle={t('pages.privacyPolicy.bannerSubtitle')}
      />
      <section className="privacy-policy-section">
        <div className="privacy-policy-container">
          <div className="privacy-policy-content">
            <p>{t('pages.privacyPolicy.intro')}</p>
            <h2>{t('pages.privacyPolicy.infoWeCollectTitle')}</h2>
            <p>{t('pages.privacyPolicy.infoWeCollect')}</p>
            <h2>{t('pages.privacyPolicy.howWeUseTitle')}</h2>
            <p>{t('pages.privacyPolicy.howWeUse')}</p>
            <h2>{t('pages.privacyPolicy.cookiesTitle')}</h2>
            <p>{t('pages.privacyPolicy.cookies')}</p>
            <h2>{t('pages.privacyPolicy.contactTitle')}</h2>
            <p>{t('pages.privacyPolicy.contact')}</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PrivacyPolicyPage
