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

export const AwardsSection = () => {
  return (
    <section className="awards-section">
      <div className="awards-container">
        <h2 className="awards-title">OUR AWARDS</h2>
        <div className="awards-carousel">
          <div className="awards-track">
            {[...awardLogos, ...awardLogos].map((src, index) => (
              <div key={`award-${index}`} className="awards-item">
                <div className="awards-placeholder">
                  <img src={src} alt="" className="awards-logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
