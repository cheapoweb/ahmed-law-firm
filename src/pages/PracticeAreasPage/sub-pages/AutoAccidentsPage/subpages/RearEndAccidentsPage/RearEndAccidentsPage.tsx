import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './RearEndAccidentsPage.css'

const RearEndAccidentsPage = () => {
  return (
    <div className="rear-end-accidents-page">
      <PageBanner 
        title="Rear-End Accident Lawyers"
        subtitle="Expert representation for rear-end collision victims in New York"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents" 
            activePage="rear-end-accidents"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Rear-End Accident Attorneys</h1>
              
              <p className="content-paragraph">
                Rear-end collisions are among the most common types of car accidents, accounting for approximately 29% 
                of all vehicle crashes. While these accidents may seem straightforward, they can cause serious injuries 
                and complex legal issues. At Ahmed Law Firm, we have extensive experience representing victims of 
                rear-end accidents throughout New York.
              </p>

              <h2 className="content-heading">Common Causes of Rear-End Accidents</h2>
              <p className="content-paragraph">
                Rear-end collisions typically occur when a driver fails to maintain a safe following distance or is 
                distracted. Common causes include:
              </p>
              <ul className="content-list">
                <li>Distracted driving (texting, phone calls, eating)</li>
                <li>Following too closely (tailgating)</li>
                <li>Speeding or sudden stops</li>
                <li>Impaired driving (alcohol or drugs)</li>
                <li>Fatigue or drowsy driving</li>
                <li>Poor weather conditions</li>
                <li>Malfunctioning brake lights</li>
              </ul>

              <h2 className="content-heading">Injuries from Rear-End Accidents</h2>
              <p className="content-paragraph">
                Even at low speeds, rear-end collisions can cause significant injuries, particularly to the neck and 
                back. Common injuries include:
              </p>
              <ul className="content-list">
                <li>Whiplash and neck injuries</li>
                <li>Back injuries and spinal cord damage</li>
                <li>Head injuries and concussions</li>
                <li>Broken bones and fractures</li>
                <li>Soft tissue injuries</li>
                <li>Emotional trauma and PTSD</li>
              </ul>

              <h2 className="content-heading">Liability in Rear-End Accidents</h2>
              <p className="content-paragraph">
                While the rear driver is typically considered at fault in rear-end collisions, there are exceptions. 
                The front driver may share or bear full responsibility if they:
              </p>
              <ul className="content-list">
                <li>Suddenly stopped without warning</li>
                <li>Had malfunctioning brake lights</li>
                <li>Reversed into the rear vehicle</li>
                <li>Cut off the rear driver and then stopped suddenly</li>
              </ul>

              <h2 className="content-heading">What to Do After a Rear-End Accident</h2>
              <p className="content-paragraph">
                If you've been involved in a rear-end collision, take these important steps:
              </p>
              <ol className="content-list">
                <li>Check for injuries and call 911 if anyone is hurt</li>
                <li>Move to a safe location if possible</li>
                <li>Call the police to file an accident report</li>
                <li>Document the scene with photos and videos</li>
                <li>Exchange information with the other driver</li>
                <li>Seek medical attention immediately, even if you feel fine</li>
                <li>Contact an experienced attorney before speaking with insurance companies</li>
              </ol>

              <h2 className="content-heading">Why Choose Ahmed Law Firm</h2>
              <p className="content-paragraph">
                Our experienced attorneys understand the complexities of rear-end accident cases and work diligently 
                to secure maximum compensation for our clients. We handle all aspects of your case, from investigation 
                to settlement or trial. Contact us today for a free consultation.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default RearEndAccidentsPage
