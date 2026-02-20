import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './TBoneCrashesPage.css'

const TBoneCrashesPage = () => {
  return (
    <div className="t-bone-crashes-page">
      <PageBanner 
        title="T-Bone Crash Liability Lawyers"
        subtitle="Determining fault and liability in T-bone collisions"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Liability in T-Bone Crashes</h1>
              
              <p className="content-paragraph">
                T-bone crashes, also known as side-impact or broadside collisions, occur when one vehicle strikes 
                another on the side, forming a "T" shape. These accidents are particularly dangerous and determining 
                liability requires careful investigation.
              </p>

              <h2 className="content-heading">Common Causes of T-Bone Crashes</h2>
              <p className="content-paragraph">
                T-bone crashes typically occur when:
              </p>
              <ul className="content-list">
                <li>A driver runs a red light or stop sign</li>
                <li>A driver fails to yield the right of way</li>
                <li>A driver makes an illegal turn</li>
                <li>A driver enters an intersection improperly</li>
                <li>Distracted driving causes missed signals</li>
                <li>Speeding through intersections</li>
                <li>Driving under the influence</li>
              </ul>

              <h2 className="content-heading">Determining Fault in T-Bone Crashes</h2>
              <p className="content-paragraph">
                Fault is typically determined by:
              </p>
              <ul className="content-list">
                <li>Who had the right of way</li>
                <li>Traffic signal violations</li>
                <li>Stop sign violations</li>
                <li>Witness testimony</li>
                <li>Traffic camera footage</li>
                <li>Police reports</li>
                <li>Accident reconstruction</li>
                <li>Vehicle damage patterns</li>
              </ul>

              <h2 className="content-heading">Right-of-Way Rules</h2>
              <p className="content-paragraph">
                Understanding right-of-way is crucial:
              </p>
              <ul className="content-list">
                <li>Vehicles going straight typically have right-of-way over turning vehicles</li>
                <li>Right turns generally have right-of-way over left turns</li>
                <li>First vehicle to stop at a 4-way stop goes first</li>
                <li>Yield signs require yielding to oncoming traffic</li>
                <li>Emergency vehicles always have right-of-way</li>
              </ul>

              <h2 className="content-heading">Why T-Bone Crashes Are Dangerous</h2>
              <p className="content-paragraph">
                T-bone crashes are particularly dangerous because:
              </p>
              <ul className="content-list">
                <li>Vehicles have less structural protection on the sides</li>
                <li>Side airbags may not deploy in time</li>
                <li>Passengers on the impacted side are directly exposed</li>
                <li>The force is perpendicular to the vehicle's direction</li>
                <li>These crashes often occur at higher speeds</li>
                <li>Rollover risk is increased</li>
              </ul>

              <h2 className="content-heading">Common Injuries</h2>
              <p className="content-paragraph">
                T-bone crashes often cause:
              </p>
              <ul className="content-list">
                <li>Head and traumatic brain injuries</li>
                <li>Neck and spinal cord injuries</li>
                <li>Broken ribs and internal organ damage</li>
                <li>Broken arms, legs, and pelvis</li>
                <li>Crush injuries</li>
                <li>Lacerations and scarring</li>
                <li>Wrongful death</li>
              </ul>

              <h2 className="content-heading">Shared Fault Scenarios</h2>
              <p className="content-paragraph">
                Sometimes both drivers share fault:
              </p>
              <ul className="content-list">
                <li>One driver runs a red light, but the other was speeding</li>
                <li>Both drivers failed to yield</li>
                <li>One driver was distracted, but the other was following too closely</li>
                <li>Comparative negligence may reduce compensation</li>
              </ul>

              <h2 className="content-heading">Get Legal Help</h2>
              <p className="content-paragraph">
                T-bone crash cases require thorough investigation to determine fault and liability. Our experienced 
                attorneys can help you build a strong case and recover maximum compensation. Contact Ahmed Law Firm 
                today if you've been injured in a T-bone crash.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TBoneCrashesPage
