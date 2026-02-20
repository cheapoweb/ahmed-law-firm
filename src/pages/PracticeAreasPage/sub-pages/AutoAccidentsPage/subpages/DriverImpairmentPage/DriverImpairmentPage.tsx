import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './DriverImpairmentPage.css'

const DriverImpairmentPage = () => {
  return (
    <div className="driver-impairment-page">
      <PageBanner 
        title="Drunk & Impaired Driving Accident Lawyers"
        subtitle="Fighting for victims of DUI and impaired driving accidents"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Drunk and Impaired Driving Accident Attorneys</h1>
              
              <p className="content-paragraph">
                Driving under the influence of alcohol or drugs is illegal and extremely dangerous. Impaired drivers 
                cause thousands of serious and fatal accidents each year. If you've been injured by an impaired driver, 
                you have the right to seek full compensation for your damages.
              </p>

              <h2 className="content-heading">Types of Impairment</h2>
              <p className="content-paragraph">
                Driver impairment can result from:
              </p>
              <ul className="content-list">
                <li>Alcohol consumption</li>
                <li>Illegal drugs (marijuana, cocaine, etc.)</li>
                <li>Prescription medications</li>
                <li>Over-the-counter medications</li>
                <li>Combination of substances</li>
              </ul>

              <h2 className="content-heading">How Impairment Affects Driving</h2>
              <p className="content-paragraph">
                Impaired drivers experience:
              </p>
              <ul className="content-list">
                <li>Reduced reaction time</li>
                <li>Impaired judgment and decision-making</li>
                <li>Decreased coordination</li>
                <li>Blurred vision</li>
                <li>Difficulty concentrating</li>
                <li>Drowsiness</li>
                <li>Loss of inhibitions</li>
              </ul>

              <h2 className="content-heading">Proving Impairment</h2>
              <p className="content-paragraph">
                Evidence that can prove driver impairment includes:
              </p>
              <ul className="content-list">
                <li>Blood alcohol content (BAC) test results</li>
                <li>Field sobriety test results</li>
                <li>Police reports and DUI citations</li>
                <li>Witness testimony about erratic driving</li>
                <li>Video evidence of the driver's behavior</li>
                <li>Drug test results</li>
                <li>Admissions by the driver</li>
              </ul>

              <h2 className="content-heading">Criminal vs. Civil Cases</h2>
              <p className="content-paragraph">
                It's important to understand the difference:
              </p>
              <ul className="content-list">
                <li><strong>Criminal case:</strong> Prosecuted by the state, can result in jail time, fines, license suspension</li>
                <li><strong>Civil case:</strong> Filed by the victim, seeks compensation for damages</li>
                <li>Both cases can proceed simultaneously</li>
                <li>A conviction in criminal court can help your civil case</li>
              </ul>

              <h2 className="content-heading">Compensation Available</h2>
              <p className="content-paragraph">
                Victims of impaired driving accidents may recover:
              </p>
              <ul className="content-list">
                <li>Medical expenses (current and future)</li>
                <li>Lost wages and earning capacity</li>
                <li>Pain and suffering</li>
                <li>Emotional distress</li>
                <li>Property damage</li>
                <li>Punitive damages (in many cases)</li>
              </ul>

              <h2 className="content-heading">Why You Need an Experienced Attorney</h2>
              <p className="content-paragraph">
                Cases involving impaired drivers require aggressive representation and thorough investigation. Our 
                attorneys have extensive experience handling these cases and can help you recover maximum compensation. 
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

export default DriverImpairmentPage
