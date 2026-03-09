import { useTranslation } from 'react-i18next'
import { PracticeAreasSidebar } from '../PracticeAreasSidebar'
import './AboutFirmSection.css'

export const AboutFirmSection = () => {
  const { t } = useTranslation()
  return (
    <section className="about-firm-section">
      <div className="about-firm-container">
        <h2 className="about-firm-heading">{t('pages.about.firmHeading')}</h2>
        <div className="about-firm-layout">
          <div className="about-firm-sidebar">
            <PracticeAreasSidebar />
          </div>
          <div className="about-firm-main-content">
            <div className="about-firm-text">
              <p>{t('pages.about.firmPara1')}</p>
              <p>{t('pages.about.firmPara2')}</p>
            </div>
            
            <div className="about-firm-subsection">
              <h3 className="subsection-heading">{t('pages.about.verdictsHeading')}</h3>
              <p>{t('pages.about.verdictsPara')}</p>
            </div>

            <div className="about-firm-subsection">
              <h3 className="subsection-heading">{t('pages.about.attorneysHeading')}</h3>
              <p>{t('pages.about.attorneysPara')}</p>
            </div>

            <div className="about-firm-subsection">
              <h3 className="subsection-heading">{t('pages.about.commitmentHeading')}</h3>
              <p>{t('pages.about.commitmentPara')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
