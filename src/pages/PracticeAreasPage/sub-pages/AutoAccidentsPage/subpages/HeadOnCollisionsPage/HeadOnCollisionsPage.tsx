import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './HeadOnCollisionsPage.css'

const HeadOnCollisionsPage = () => {
  return (
    <div className="head-on-collisions-page">
      <PageBanner 
        title="Head-On Collision Lawyers"
        subtitle="Experienced representation for head-on crash victims in New York"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Head-On Collision Attorneys</h1>
              
              <p className="content-paragraph">
                Head-on collisions are among the most catastrophic types of car accidents, often resulting in severe 
                injuries or fatalities. These crashes occur when two vehicles traveling in opposite directions collide 
                front-to-front, combining the forces of both vehicles' speeds.
              </p>

              <h2 className="content-heading">Common Causes of Head-On Collisions</h2>
              <p className="content-paragraph">
                Head-on collisions typically occur when a driver crosses into oncoming traffic:
              </p>
              <ul className="content-list">
                <li>Driving under the influence of alcohol or drugs</li>
                <li>Distracted driving (texting, phone calls)</li>
                <li>Falling asleep at the wheel</li>
                <li>Attempting to pass on a two-lane road</li>
                <li>Wrong-way driving (entering exit ramps)</li>
                <li>Medical emergencies (seizures, heart attacks)</li>
                <li>Poor road conditions or visibility</li>
                <li>Vehicle malfunctions (steering, brakes)</li>
              </ul>

              <h2 className="content-heading">Why Head-On Collisions Are So Dangerous</h2>
              <p className="content-paragraph">
                Head-on collisions are particularly devastating because:
              </p>
              <ul className="content-list">
                <li>The combined force of both vehicles' speeds creates extreme impact</li>
                <li>Front airbags may not be sufficient to prevent serious injury</li>
                <li>These crashes often occur at highway speeds</li>
                <li>The impact directly affects the driver and front passenger</li>
                <li>Ejection from the vehicle is more likely</li>
              </ul>

              <h2 className="content-heading">Common Injuries</h2>
              <p className="content-paragraph">
                Victims of head-on collisions often suffer catastrophic injuries:
              </p>
              <ul className="content-list">
                <li>Traumatic brain injuries</li>
                <li>Spinal cord injuries and paralysis</li>
                <li>Crush injuries to the chest and abdomen</li>
                <li>Broken bones and fractures</li>
                <li>Internal organ damage</li>
                <li>Facial injuries and disfigurement</li>
                <li>Wrongful death</li>
              </ul>

              <h2 className="content-heading">Determining Liability</h2>
              <p className="content-paragraph">
                In head-on collision cases, liability is typically clear - the driver who crossed into oncoming traffic 
                is usually at fault. However, other parties may also share responsibility:
              </p>
              <ul className="content-list">
                <li>The driver who crossed the center line</li>
                <li>Government entities (for dangerous road design)</li>
                <li>Vehicle manufacturers (for defective parts)</li>
                <li>Employers (if the driver was working)</li>
              </ul>

              <h2 className="content-heading">Why You Need Experienced Legal Representation</h2>
              <p className="content-paragraph">
                Head-on collision cases often involve significant damages and complex legal issues. Our experienced attorneys 
                can help you recover compensation for medical expenses, lost wages, pain and suffering, and more. 
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

export default HeadOnCollisionsPage
