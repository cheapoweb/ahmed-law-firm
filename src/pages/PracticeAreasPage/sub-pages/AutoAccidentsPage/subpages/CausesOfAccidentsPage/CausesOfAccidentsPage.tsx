import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './CausesOfAccidentsPage.css'

const CausesOfAccidentsPage = () => {
  return (
    <div className="causes-of-accidents-page">
      <PageBanner 
        title="Common Causes of Car Accidents"
        subtitle="Understanding the factors that lead to auto accidents"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents" 
            activePage="causes-of-accidents"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Common Causes of Car Accidents</h1>
              
              <p className="content-paragraph">
                Understanding the common causes of car accidents is essential for both prevention and establishing 
                liability in personal injury cases. At Ahmed Law Firm, we investigate all potential causes to build 
                the strongest case for our clients.
              </p>

              <h2 className="content-heading">Distracted Driving</h2>
              <p className="content-paragraph">
                Distracted driving is one of the leading causes of car accidents. Common distractions include:
              </p>
              <ul className="content-list">
                <li>Texting or using a cell phone</li>
                <li>Eating or drinking while driving</li>
                <li>Adjusting the radio or GPS</li>
                <li>Conversing with passengers</li>
                <li>Grooming or applying makeup</li>
              </ul>

              <h2 className="content-heading">Speeding and Reckless Driving</h2>
              <p className="content-paragraph">
                Excessive speed reduces reaction time and increases the severity of accidents. Reckless driving 
                behaviors include speeding, aggressive lane changes, tailgating, and ignoring traffic signals.
              </p>

              <h2 className="content-heading">Driving Under the Influence</h2>
              <p className="content-paragraph">
                Alcohol and drug impairment significantly impair judgment, reaction time, and coordination. Driving 
                under the influence is illegal and a major cause of serious and fatal accidents.
              </p>

              <h2 className="content-heading">Fatigue and Drowsy Driving</h2>
              <p className="content-paragraph">
                Drowsy driving can be as dangerous as drunk driving. Fatigue impairs reaction time, attention, and 
                decision-making abilities, leading to accidents that could have been prevented.
              </p>

              <h2 className="content-heading">Poor Weather Conditions</h2>
              <p className="content-paragraph">
                Rain, snow, ice, fog, and other adverse weather conditions contribute to many accidents. Drivers 
                have a duty to adjust their driving behavior to match road conditions.
              </p>

              <h2 className="content-heading">Vehicle Defects</h2>
              <p className="content-paragraph">
                Sometimes accidents are caused by defective vehicle parts, such as faulty brakes, defective tires, 
                or malfunctioning steering systems. In these cases, the manufacturer may be held liable.
              </p>

              <h2 className="content-heading">Poor Road Conditions</h2>
              <p className="content-paragraph">
                Poorly maintained roads, missing signage, inadequate lighting, and construction zones can contribute 
                to accidents. Government entities may be held responsible for dangerous road conditions.
              </p>

              <h2 className="content-heading">Failure to Yield Right of Way</h2>
              <p className="content-paragraph">
                Many intersection accidents occur when drivers fail to yield the right of way, run red lights, or 
                ignore stop signs. These violations often result in serious T-bone or side-impact collisions.
              </p>

              <h2 className="content-heading">Get Legal Help</h2>
              <p className="content-paragraph">
                If you've been injured in a car accident, determining the cause is crucial for your claim. Our 
                experienced attorneys investigate all potential causes and hold responsible parties accountable. 
                Contact Ahmed Law Firm today for a free consultation.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CausesOfAccidentsPage
