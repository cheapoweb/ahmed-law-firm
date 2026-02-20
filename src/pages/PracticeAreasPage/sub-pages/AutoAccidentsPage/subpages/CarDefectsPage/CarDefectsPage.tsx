import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './CarDefectsPage.css'

const CarDefectsPage = () => {
  return (
    <div className="car-defects-page">
      <PageBanner 
        title="Car Defect Accident Lawyers"
        subtitle="Holding manufacturers accountable for defective vehicles"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents" 
            activePage="car-defects"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Car Defect Accident Attorneys</h1>
              
              <p className="content-paragraph">
                When car accidents are caused by vehicle defects or malfunctions, the manufacturer or parts supplier 
                may be held liable. These product liability cases require specialized legal knowledge and resources 
                to pursue successfully.
              </p>

              <h2 className="content-heading">Common Vehicle Defects</h2>
              <p className="content-paragraph">
                Vehicle defects that can cause accidents include:
              </p>
              <ul className="content-list">
                <li>Brake system failures</li>
                <li>Defective tires (blowouts, tread separation)</li>
                <li>Steering system malfunctions</li>
                <li>Airbag defects (failure to deploy, unintended deployment)</li>
                <li>Accelerator pedal problems</li>
                <li>Electrical system failures</li>
                <li>Fuel system defects (fires, leaks)</li>
                <li>Roof crush defects (in rollover accidents)</li>
                <li>Seatbelt failures</li>
                <li>Transmission defects</li>
              </ul>

              <h2 className="content-heading">Types of Defects</h2>
              <p className="content-paragraph">
                Vehicle defects fall into three categories:
              </p>
              <ul className="content-list">
                <li><strong>Design defects:</strong> Inherent flaws in the vehicle's design</li>
                <li><strong>Manufacturing defects:</strong> Errors during production</li>
                <li><strong>Failure to warn:</strong> Inadequate warnings about known dangers</li>
              </ul>

              <h2 className="content-heading">Proving a Defect Case</h2>
              <p className="content-paragraph">
                To succeed in a car defect case, you must prove:
              </p>
              <ul className="content-list">
                <li>The vehicle had a defect</li>
                <li>The defect existed when the vehicle left the manufacturer</li>
                <li>The defect caused or contributed to the accident</li>
                <li>You suffered damages as a result</li>
              </ul>

              <h2 className="content-heading">Preserving Evidence</h2>
              <p className="content-paragraph">
                If you suspect a vehicle defect caused your accident:
              </p>
              <ul className="content-list">
                <li>Preserve the vehicle (don't allow it to be destroyed)</li>
                <li>Document the defect with photos and videos</li>
                <li>Keep all maintenance records</li>
                <li>Save any recall notices</li>
                <li>Contact an attorney immediately</li>
              </ul>

              <h2 className="content-heading">Recalls and Defects</h2>
              <p className="content-paragraph">
                Vehicle recalls indicate known defects, but:
              </p>
              <ul className="content-list">
                <li>Not all defects result in recalls</li>
                <li>Recalls don't prevent liability</li>
                <li>You may still have a claim even if a recall was issued</li>
                <li>Manufacturers must notify owners of recalls</li>
              </ul>

              <h2 className="content-heading">Why You Need Specialized Legal Help</h2>
              <p className="content-paragraph">
                Car defect cases are complex and often involve large manufacturers with significant resources. Our 
                attorneys have experience handling product liability cases and work with engineering experts to 
                prove defects. Contact Ahmed Law Firm today if you believe a vehicle defect caused your accident.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CarDefectsPage
