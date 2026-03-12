import { useTranslation } from 'react-i18next'
import './AwardsSection.css'

import award1 from '../../../../assets/awards/Ahmad Law Firm Awards (1).png'
import award2 from '../../../../assets/awards/Ahmad Law Firm Awards (2).png'
import award3 from '../../../../assets/awards/Ahmad Law Firm Awards (3).png'
import award4 from '../../../../assets/awards/Ahmad Law Firm Awards (4).png'
import award5 from '../../../../assets/awards/Ahmad Law Firm Awards (5).png'
import award6 from '../../../../assets/awards/Ahmad Law Firm Awards (6).png'
import award7 from '../../../../assets/awards/Ahmad Law Firm Awards (7).png'
import award8 from '../../../../assets/awards/Ahmad Law Firm Awards (8).png'
import award9 from '../../../../assets/awards/Ahmad Law Firm Awards (9).png'
import award10 from '../../../../assets/awards/Ahmad Law Firm Awards (10).png'
import award11 from '../../../../assets/awards/Ahmad Law Firm Awards (11).png'
import award12 from '../../../../assets/awards/Ahmad Law Firm Awards (12).png'
import award13 from '../../../../assets/awards/Ahmad Law Firm Awards (13).png'

const awardLogos = [
  award1, award2, award3, award4, award5, award6, award7,
  award8, award9, award10, award11, award12, award13,
]

const AwardsSection = () => {
  const { t } = useTranslation()
  return (
    <section className="hp3-awards-section">
      <div className="hp3-awards-container">
        <p className="hp3-awards-label">{t('sections.awards.label')}</p>
        <h2 className="hp3-awards-heading">
          {t('sections.awards.heading')} <em>{t('sections.awards.headingEm')}</em>
        </h2>
        <div className="hp3-awards-carousel">
          <div className="hp3-awards-track">
            <div className="hp3-awards-track-half" aria-hidden>
              {awardLogos.map((src, index) => (
                <div key={`award-a-${index}`} className="hp3-awards-item">
                  <div className="hp3-awards-placeholder">
                    <img src={src} alt="" className="hp3-awards-logo" />
                  </div>
                </div>
              ))}
            </div>
            <div className="hp3-awards-track-half" aria-hidden>
              {awardLogos.map((src, index) => (
                <div key={`award-b-${index}`} className="hp3-awards-item">
                  <div className="hp3-awards-placeholder">
                    <img src={src} alt="" className="hp3-awards-logo" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AwardsSection
