import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './RecklessDisregardPage.css'

const RecklessDisregardPage = () => {
  return (
    <div className="reckless-disregard-page">
      <PageBanner 
        title="Reckless Disregard in Traffic Accidents"
        subtitle="Seeking enhanced damages for egregious driver behavior"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Reckless Disregard in Traffic Accidents</h1>
              
              <p className="content-paragraph">
                When a driver shows "reckless disregard" for the safety of others, they may be liable for enhanced 
                damages beyond standard compensation. This legal standard applies when a driver's behavior goes beyond 
                simple negligence.
              </p>

              <h2 className="content-heading">What is Reckless Disregard?</h2>
              <p className="content-paragraph">
                Reckless disregard means:
              </p>
              <ul className="content-list">
                <li>Conscious disregard for a known risk</li>
                <li>Extreme departure from reasonable care</li>
                <li>Behavior that shows indifference to consequences</li>
                <li>More than simple negligence or carelessness</li>
              </ul>

              <h2 className="content-heading">Examples of Reckless Disregard</h2>
              <p className="content-paragraph">
                Behaviors that may constitute reckless disregard include:
              </p>
              <ul className="content-list">
                <li>Street racing</li>
                <li>Extreme speeding (20+ mph over limit)</li>
                <li>Driving under the influence</li>
                <li>Fleeing from police</li>
                <li>Driving with suspended or revoked license</li>
                <li>Repeatedly running red lights</li>
                <li>Driving the wrong way on a highway</li>
                <li>Aggressive driving that endangers others</li>
              </ul>

              <h2 className="content-heading">Enhanced Damages</h2>
              <p className="content-paragraph">
                When reckless disregard is proven, victims may recover:
              </p>
              <ul className="content-list">
                <li>Standard compensatory damages</li>
                <li>Punitive damages</li>
                <li>Enhanced compensation for pain and suffering</li>
                <li>Attorney fees (in some cases)</li>
              </ul>

              <h2 className="content-heading">Proving Reckless Disregard</h2>
              <p className="content-paragraph">
                Evidence that can prove reckless disregard includes:
              </p>
              <ul className="content-list">
                <li>Police reports documenting extreme behavior</li>
                <li>Witness testimony</li>
                <li>Traffic camera footage</li>
                <li>Black box data showing extreme speeds</li>
                <li>Criminal charges or convictions</li>
                <li>Prior traffic violations</li>
                <li>Admissions by the driver</li>
              </ul>

              <h2 className="content-heading">Difference from Negligence</h2>
              <p className="content-paragraph">
                Reckless disregard differs from negligence:
              </p>
              <ul className="content-list">
                <li><strong>Negligence:</strong> Failure to exercise reasonable care</li>
                <li><strong>Reckless Disregard:</strong> Conscious disregard for known risks</li>
                <li>Reckless disregard requires showing the driver knew the risks</li>
                <li>It's a higher standard than simple negligence</li>
              </ul>

              <h2 className="content-heading">Why This Matters</h2>
              <p className="content-paragraph">
                Proving reckless disregard can significantly increase your compensation and hold dangerous drivers fully 
                accountable. Our experienced attorneys can help you build a strong case for enhanced damages. Contact 
                Ahmed Law Firm today if you've been injured by a driver who showed reckless disregard.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default RecklessDisregardPage
