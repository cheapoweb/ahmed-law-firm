import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './PoorlyMaintainedRoadsPage.css'

const PoorlyMaintainedRoadsPage = () => {
  return (
    <div className="poorly-maintained-roads-page">
      <PageBanner 
        title="Poorly Maintained Roads & Car Accidents"
        subtitle="Holding government entities accountable for dangerous road conditions"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Poorly Maintained Roads and Car Accidents</h1>
              
              <p className="content-paragraph">
                Dangerous road conditions contribute to thousands of car accidents each year. When government entities 
                fail to properly maintain roads, they may be held liable for resulting accidents and injuries.
              </p>

              <h2 className="content-heading">Common Road Defects</h2>
              <p className="content-paragraph">
                Poorly maintained roads can have various defects that cause accidents:
              </p>
              <ul className="content-list">
                <li>Potholes and uneven pavement</li>
                <li>Missing or faded road markings</li>
                <li>Inadequate or missing guardrails</li>
                <li>Poor drainage causing standing water</li>
                <li>Overgrown vegetation blocking visibility</li>
                <li>Missing or damaged traffic signs</li>
                <li>Inadequate lighting</li>
                <li>Debris on the roadway</li>
                <li>Uneven lane transitions</li>
                <li>Deteriorated road surfaces</li>
              </ul>

              <h2 className="content-heading">Government Liability</h2>
              <p className="content-paragraph">
                Government entities have a duty to maintain safe roads. They may be held liable if:
              </p>
              <ul className="content-list">
                <li>They knew or should have known about the dangerous condition</li>
                <li>They had sufficient time to repair the defect</li>
                <li>The defect was a direct cause of the accident</li>
                <li>They failed to warn drivers of the hazard</li>
              </ul>

              <h2 className="content-heading">Special Legal Requirements</h2>
              <p className="content-paragraph">
                Suing government entities requires special procedures:
              </p>
              <ul className="content-list">
                <li>Notice of claim must be filed within strict deadlines</li>
                <li>Different statutes of limitations may apply</li>
                <li>Immunity defenses may be raised</li>
                <li>Special documentation and procedures are required</li>
              </ul>

              <h2 className="content-heading">Documenting Road Defects</h2>
              <p className="content-paragraph">
                If you've been in an accident due to poor road conditions:
              </p>
              <ul className="content-list">
                <li>Take photos and videos of the defect</li>
                <li>Document weather conditions</li>
                <li>Note the exact location</li>
                <li>Get witness statements</li>
                <li>File a report with the responsible agency</li>
                <li>Contact an attorney immediately</li>
              </ul>

              <h2 className="content-heading">Why You Need Experienced Legal Help</h2>
              <p className="content-paragraph">
                Cases against government entities are complex and require specialized knowledge. Our attorneys have 
                experience handling these cases and understand the unique procedures involved. Contact Ahmed Law Firm 
                today if you've been injured due to poorly maintained roads.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PoorlyMaintainedRoadsPage
