import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './NotAtFaultPage.css'

const NotAtFaultPage = () => {
  return (
    <div className="not-at-fault-page">
      <PageBanner 
        title="Car Accident Not at Fault"
        subtitle="Protecting your rights when you're not responsible for the accident"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Car Accident Not at Fault - Your Rights</h1>
              
              <p className="content-paragraph">
                If you've been in a car accident where you were not at fault, you have important rights. Understanding 
                these rights and taking the right steps can help ensure you receive full compensation for your injuries 
                and damages.
              </p>

              <h2 className="content-heading">What "Not at Fault" Means</h2>
              <p className="content-paragraph">
                You're not at fault when:
              </p>
              <ul className="content-list">
                <li>Another driver violated traffic laws</li>
                <li>Another driver was negligent or reckless</li>
                <li>You had the right of way</li>
                <li>You were following traffic rules</li>
                <li>The other driver caused the accident</li>
              </ul>

              <h2 className="content-heading">Your Rights as a Not-At-Fault Driver</h2>
              <p className="content-paragraph">
                When you're not at fault, you have the right to:
              </p>
              <ul className="content-list">
                <li>File a claim with the at-fault driver's insurance</li>
                <li>Seek compensation for all damages</li>
                <li>Choose your own repair shop</li>
                <li>Receive a rental car while your vehicle is repaired</li>
                <li>Be compensated for diminished value</li>
                <li>Seek compensation for injuries and medical expenses</li>
                <li>File a lawsuit if necessary</li>
              </ul>

              <h2 className="content-heading">What to Do After a Not-At-Fault Accident</h2>
              <p className="content-paragraph">
                Important steps to take:
              </p>
              <ol className="content-list">
                <li>Call the police and file a report</li>
                <li>Document everything (photos, videos, witness info)</li>
                <li>Get the other driver's insurance information</li>
                <li>Seek medical attention immediately</li>
                <li>Notify your insurance company</li>
                <li>File a claim with the at-fault driver's insurance</li>
                <li>Contact an attorney before giving statements</li>
              </ol>

              <h2 className="content-heading">Compensation You May Receive</h2>
              <p className="content-paragraph">
                As a not-at-fault driver, you may recover:
              </p>
              <ul className="content-list">
                <li>Vehicle repair or replacement costs</li>
                <li>Rental car expenses</li>
                <li>Medical expenses (current and future)</li>
                <li>Lost wages</li>
                <li>Pain and suffering</li>
                <li>Diminished value of your vehicle</li>
                <li>Property damage</li>
              </ul>

              <h2 className="content-heading">Common Insurance Company Tactics</h2>
              <p className="content-paragraph">
                Insurance companies may try to:
              </p>
              <ul className="content-list">
                <li>Blame you for the accident</li>
                <li>Offer low settlement amounts</li>
                <li>Delay your claim</li>
                <li>Request unnecessary documentation</li>
                <li>Use your statements against you</li>
              </ul>

              <h2 className="content-heading">Why You Need an Attorney</h2>
              <p className="content-paragraph">
                Even when you're clearly not at fault, insurance companies may try to minimize your claim. An 
                experienced attorney can protect your rights and ensure you receive full compensation. Contact Ahmed 
                Law Firm today for a free consultation.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default NotAtFaultPage
