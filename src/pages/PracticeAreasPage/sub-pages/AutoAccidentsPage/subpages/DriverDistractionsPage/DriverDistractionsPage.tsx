import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './DriverDistractionsPage.css'

const DriverDistractionsPage = () => {
  return (
    <div className="driver-distractions-page">
      <PageBanner 
        title="Distracted Driving Accident Lawyers"
        subtitle="Holding distracted drivers accountable for causing accidents"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Distracted Driving Accident Attorneys</h1>
              
              <p className="content-paragraph">
                Distracted driving has become one of the leading causes of car accidents in the United States. When 
                drivers take their attention away from the road, they put everyone at risk. If you've been injured by 
                a distracted driver, you deserve compensation.
              </p>

              <h2 className="content-heading">Types of Driver Distractions</h2>
              <p className="content-paragraph">
                Driver distractions fall into three main categories:
              </p>
              <ul className="content-list">
                <li><strong>Visual:</strong> Taking eyes off the road</li>
                <li><strong>Manual:</strong> Taking hands off the wheel</li>
                <li><strong>Cognitive:</strong> Taking mind off driving</li>
              </ul>

              <h2 className="content-heading">Common Distractions</h2>
              <p className="content-paragraph">
                The most common driver distractions include:
              </p>
              <ul className="content-list">
                <li>Texting or using a cell phone</li>
                <li>Talking on the phone (even hands-free)</li>
                <li>Eating or drinking</li>
                <li>Adjusting the radio or GPS</li>
                <li>Grooming or applying makeup</li>
                <li>Reading maps or documents</li>
                <li>Interacting with passengers</li>
                <li>Looking at accidents or scenery</li>
                <li>Reaching for objects in the vehicle</li>
              </ul>

              <h2 className="content-heading">The Dangers of Distracted Driving</h2>
              <p className="content-paragraph">
                Distracted driving is extremely dangerous because:
              </p>
              <ul className="content-list">
                <li>It reduces reaction time</li>
                <li>It impairs judgment and decision-making</li>
                <li>It increases the risk of missing traffic signals</li>
                <li>It can cause drivers to drift out of lanes</li>
                <li>Even a few seconds of distraction can be fatal</li>
              </ul>

              <h2 className="content-heading">Proving Distracted Driving</h2>
              <p className="content-paragraph">
                Evidence that can prove distracted driving includes:
              </p>
              <ul className="content-list">
                <li>Cell phone records showing calls or texts</li>
                <li>Witness testimony</li>
                <li>Police reports</li>
                <li>Traffic camera footage</li>
                <li>Dashcam videos</li>
                <li>Admissions by the driver</li>
                <li>Physical evidence (phone location in vehicle)</li>
              </ul>

              <h2 className="content-heading">Legal Consequences</h2>
              <p className="content-paragraph">
                Distracted driving can result in:
              </p>
              <ul className="content-list">
                <li>Traffic citations and fines</li>
                <li>Criminal charges in severe cases</li>
                <li>Civil liability for damages</li>
                <li>Increased insurance premiums</li>
                <li>License points or suspension</li>
              </ul>

              <h2 className="content-heading">Get Legal Help</h2>
              <p className="content-paragraph">
                If you've been injured by a distracted driver, Ahmed Law Firm can help you recover compensation for 
                your injuries. We investigate all evidence and build strong cases against distracted drivers. 
                Contact us today for a free consultation.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default DriverDistractionsPage
