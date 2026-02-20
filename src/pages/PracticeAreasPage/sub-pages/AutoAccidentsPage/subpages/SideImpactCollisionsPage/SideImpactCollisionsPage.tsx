import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './SideImpactCollisionsPage.css'

const SideImpactCollisionsPage = () => {
  return (
    <div className="side-impact-collisions-page">
      <PageBanner 
        title="Side-Impact Collision Lawyers"
        subtitle="Expert representation for T-bone and side-impact accident victims"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Side-Impact Collision Attorneys</h1>
              
              <p className="content-paragraph">
                Side-impact collisions, also known as T-bone accidents or broadside crashes, occur when one vehicle 
                strikes another on the side. These accidents are particularly dangerous because vehicles have less 
                protection on the sides compared to the front and rear, often resulting in serious injuries.
              </p>

              <h2 className="content-heading">Common Causes of Side-Impact Collisions</h2>
              <p className="content-paragraph">
                Side-impact collisions frequently occur at intersections and are often caused by:
              </p>
              <ul className="content-list">
                <li>Running red lights or stop signs</li>
                <li>Failure to yield the right of way</li>
                <li>Distracted driving</li>
                <li>Speeding through intersections</li>
                <li>Making illegal turns</li>
                <li>Driving under the influence</li>
                <li>Misjudging the speed of oncoming traffic</li>
              </ul>

              <h2 className="content-heading">Why Side-Impact Collisions Are Dangerous</h2>
              <p className="content-paragraph">
                Side-impact collisions are particularly dangerous because:
              </p>
              <ul className="content-list">
                <li>Vehicles have less structural protection on the sides</li>
                <li>Side airbags may not deploy in time</li>
                <li>Passengers on the impacted side are directly exposed</li>
                <li>The force of impact is perpendicular to the vehicle's direction</li>
                <li>These crashes often occur at higher speeds</li>
              </ul>

              <h2 className="content-heading">Common Injuries</h2>
              <p className="content-paragraph">
                Victims of side-impact collisions often suffer:
              </p>
              <ul className="content-list">
                <li>Head and traumatic brain injuries</li>
                <li>Neck and spinal cord injuries</li>
                <li>Broken ribs and internal organ damage</li>
                <li>Broken arms, legs, and pelvis</li>
                <li>Crush injuries</li>
                <li>Lacerations and scarring</li>
                <li>Emotional trauma and PTSD</li>
              </ul>

              <h2 className="content-heading">Determining Fault</h2>
              <p className="content-paragraph">
                In side-impact collisions, fault is typically determined by:
              </p>
              <ul className="content-list">
                <li>Traffic light or stop sign violations</li>
                <li>Right-of-way rules</li>
                <li>Witness testimony</li>
                <li>Traffic camera footage</li>
                <li>Police reports</li>
                <li>Accident reconstruction analysis</li>
              </ul>

              <h2 className="content-heading">Get Legal Help</h2>
              <p className="content-paragraph">
                If you've been injured in a side-impact collision, Ahmed Law Firm can help you navigate the legal 
                process and fight for the compensation you deserve. Contact us today for a free consultation.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SideImpactCollisionsPage
