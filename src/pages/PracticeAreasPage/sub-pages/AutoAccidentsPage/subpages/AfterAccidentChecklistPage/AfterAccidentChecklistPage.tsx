import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './AfterAccidentChecklistPage.css'

const AfterAccidentChecklistPage = () => {
  return (
    <div className="after-accident-checklist-page">
      <PageBanner 
        title="What to Do After a Car Accident"
        subtitle="Essential steps to protect your rights and strengthen your claim"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Six Things to Do After a New York City Car Accident</h1>
              
              <p className="content-paragraph">
                Being involved in a car accident can be traumatic and overwhelming. Knowing what steps to take immediately 
                after an accident can protect your rights and strengthen your personal injury claim. Follow this checklist 
                to ensure you take the right actions.
              </p>

              <h2 className="content-heading">1. Check for Injuries and Call 911</h2>
              <p className="content-paragraph">
                Your first priority should always be safety. Check yourself and passengers for injuries. If anyone is 
                injured, call 911 immediately. Even if injuries seem minor, it's important to have medical professionals 
                evaluate you at the scene. Some injuries, like whiplash or internal injuries, may not be immediately apparent.
              </p>

              <h2 className="content-heading">2. Move to Safety</h2>
              <p className="content-paragraph">
                If your vehicle is drivable and you're able, move it to the side of the road or a safe location to 
                prevent further accidents. Turn on your hazard lights to alert other drivers. If your vehicle cannot 
                be moved, stay inside with your seatbelt fastened if it's safe to do so.
              </p>

              <h2 className="content-heading">3. Call the Police</h2>
              <p className="content-paragraph">
                Always call the police, even for minor accidents. A police report provides an official record of the 
                accident and can be crucial evidence for your claim. The responding officer will document the scene, 
                gather witness information, and create an official report.
              </p>

              <h2 className="content-heading">4. Document Everything</h2>
              <p className="content-paragraph">
                Take extensive photos and videos of the accident scene, including:
              </p>
              <ul className="content-list">
                <li>Damage to all vehicles involved</li>
                <li>The accident scene from multiple angles</li>
                <li>License plates and vehicle identification</li>
                <li>Road conditions, traffic signs, and weather conditions</li>
                <li>Any visible injuries</li>
                <li>Skid marks or debris on the road</li>
              </ul>

              <h2 className="content-heading">5. Exchange Information</h2>
              <p className="content-paragraph">
                Collect contact and insurance information from all parties involved, including:
              </p>
              <ul className="content-list">
                <li>Names, addresses, and phone numbers</li>
                <li>Driver's license numbers</li>
                <li>Insurance company names and policy numbers</li>
                <li>Vehicle make, model, year, and license plate numbers</li>
                <li>Contact information for any witnesses</li>
              </ul>

              <h2 className="content-heading">6. Seek Medical Attention</h2>
              <p className="content-paragraph">
                Even if you don't feel injured immediately, see a doctor as soon as possible. Some injuries, particularly 
                soft tissue injuries and concussions, may not show symptoms for hours or days. A medical evaluation 
                creates important documentation of your injuries and connects them to the accident.
              </p>

              <h2 className="content-heading">What NOT to Do</h2>
              <p className="content-paragraph">
                Avoid these common mistakes that can harm your claim:
              </p>
              <ul className="content-list">
                <li>Don't admit fault or apologize at the scene</li>
                <li>Don't discuss the accident details with the other driver's insurance company</li>
                <li>Don't sign any documents without consulting an attorney</li>
                <li>Don't delay seeking medical treatment</li>
                <li>Don't post about the accident on social media</li>
              </ul>

              <h2 className="content-heading">Contact an Attorney</h2>
              <p className="content-paragraph">
                After taking these initial steps, contact an experienced car accident attorney as soon as possible. 
                At Ahmed Law Firm, we can guide you through the entire process, handle communications with insurance 
                companies, and fight for the compensation you deserve. Contact us today for a free consultation.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AfterAccidentChecklistPage
