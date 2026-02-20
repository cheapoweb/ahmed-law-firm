import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './RecklessDrivingPage.css'

const RecklessDrivingPage = () => {
  return (
    <div className="reckless-driving-page">
      <PageBanner 
        title="Reckless Driving Accident Lawyers"
        subtitle="Holding reckless drivers accountable for their dangerous behavior"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents" 
            activePage="reckless-driving"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Reckless Driving Accident Attorneys</h1>
              
              <p className="content-paragraph">
                Reckless driving is a serious traffic violation that endangers everyone on the road. When reckless 
                driving causes an accident, victims may be entitled to compensation for their injuries and damages.
              </p>

              <h2 className="content-heading">What Constitutes Reckless Driving?</h2>
              <p className="content-paragraph">
                Reckless driving includes various dangerous behaviors:
              </p>
              <ul className="content-list">
                <li>Excessive speeding</li>
                <li>Aggressive lane changes</li>
                <li>Tailgating</li>
                <li>Running red lights or stop signs</li>
                <li>Weaving through traffic</li>
                <li>Street racing</li>
                <li>Driving on the wrong side of the road</li>
                <li>Passing in no-passing zones</li>
                <li>Ignoring traffic signals</li>
                <li>Driving too fast for conditions</li>
              </ul>

              <h2 className="content-heading">Legal Consequences</h2>
              <p className="content-paragraph">
                Reckless driving can result in:
              </p>
              <ul className="content-list">
                <li>Criminal charges and fines</li>
                <li>License suspension or revocation</li>
                <li>Increased insurance premiums</li>
                <li>Civil liability for damages</li>
                <li>Potential jail time in severe cases</li>
              </ul>

              <h2 className="content-heading">Proving Reckless Driving</h2>
              <p className="content-paragraph">
                Evidence that can prove reckless driving includes:
              </p>
              <ul className="content-list">
                <li>Police reports and citations</li>
                <li>Witness testimony</li>
                <li>Traffic camera footage</li>
                <li>Dashcam videos</li>
                <li>Black box data</li>
                <li>Accident reconstruction analysis</li>
                <li>Cell phone records (if applicable)</li>
              </ul>

              <h2 className="content-heading">Compensation for Victims</h2>
              <p className="content-paragraph">
                Victims of reckless driving accidents may recover:
              </p>
              <ul className="content-list">
                <li>Medical expenses (current and future)</li>
                <li>Lost wages and earning capacity</li>
                <li>Pain and suffering</li>
                <li>Property damage</li>
                <li>Punitive damages (in some cases)</li>
              </ul>

              <h2 className="content-heading">Why You Need an Attorney</h2>
              <p className="content-paragraph">
                Reckless driving cases require thorough investigation and aggressive representation. Our experienced 
                attorneys can help you build a strong case and recover maximum compensation. Contact Ahmed Law Firm 
                today for a free consultation.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default RecklessDrivingPage
