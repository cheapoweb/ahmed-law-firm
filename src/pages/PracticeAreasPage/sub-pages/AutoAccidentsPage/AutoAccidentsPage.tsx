import Footer from '../../../../components/Footer'
import PageBanner from '../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './AutoAccidentsPage.css'

const AutoAccidentsPage = () => {
  return (
    <div className="auto-accidents-page">
      <PageBanner 
        title="New York Auto Accident Lawyers"
        subtitle="Expert legal representation for auto accident victims with over 40 years of experience"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          {/* Sidebar */}
          <PracticeAreaSidebar 
            category="vehicle-accidents" 
            activePage="auto-accidents"
          />

          {/* Main Content */}
          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">New York Car Accident Lawyers</h1>
              
              <div className="intro-section">
                <div className="intro-text">
                  <p className="intro-paragraph">
                    If you've been injured in an auto accident in New York, you need experienced legal representation 
                    to help you navigate the complex legal process and secure the compensation you deserve. At Ahmed 
                    Law Firm, we have been representing auto accident victims throughout New York, including Long Island, 
                    Nassau County, Queens County, The Bronx, Brooklyn, NYC, and Suffolk County since 1981.
                  </p>
                  <p className="intro-paragraph">
                    Our experienced attorneys understand the physical, emotional, and financial toll that auto accidents 
                    can take on victims and their families. We work on a contingency fee basis, meaning you don't pay 
                    unless we win your case. Our team is committed to fighting for your rights and ensuring you receive 
                    the maximum compensation available for your injuries, medical expenses, lost wages, and pain and suffering.
                  </p>
                </div>
                <div className="intro-image">
                  <img 
                    src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop" 
                    alt="Car accident scene" 
                    className="content-image"
                  />
                </div>
              </div>

              <div className="key-points">
                <ul className="points-list">
                  <li>Schedule a Free Consultation</li>
                  <li>No Fees Unless We Win</li>
                  <li>Experienced Auto Accident Attorneys</li>
                  <li>Millions Recovered for Our Clients</li>
                </ul>
              </div>
            </div>

            <div className="content-section">
              <h2 className="content-heading">What to do After a Car Accident</h2>
              <p className="content-paragraph">
                If you've been involved in a car accident, it's important to take the right steps to protect your rights 
                and strengthen your case. Here's what you should do:
              </p>
              <ol className="content-list">
                <li>
                  <strong>Check for injuries:</strong> First and foremost, check yourself and others for injuries. 
                  If anyone is seriously injured, call 911 immediately.
                </li>
                <li>
                  <strong>Move to safety:</strong> If possible, move your vehicle to a safe location to avoid further 
                  accidents or injuries.
                </li>
                <li>
                  <strong>Call the police:</strong> Even for minor accidents, it's important to have a police report 
                  documenting the incident.
                </li>
                <li>
                  <strong>Document everything:</strong> Take photos of the accident scene, vehicle damage, and any 
                  visible injuries. Collect contact information from witnesses.
                </li>
                <li>
                  <strong>Seek medical attention:</strong> Even if you don't feel injured immediately, see a doctor 
                  as soon as possible. Some injuries may not be apparent right away.
                </li>
                <li>
                  <strong>Contact an attorney:</strong> Don't speak with insurance adjusters without consulting an 
                  experienced auto accident attorney first.
                </li>
              </ol>
            </div>

            <div className="content-section">
              <h2 className="content-heading">How to File a Car Accident Claim</h2>
              <p className="content-paragraph">
                Filing a car accident claim in New York can be complex, especially when dealing with insurance companies 
                and determining fault. Our experienced attorneys can guide you through every step of the process:
              </p>
              <ul className="content-list">
                <li>Gathering evidence and documentation</li>
                <li>Filing insurance claims with all relevant parties</li>
                <li>Negotiating with insurance adjusters</li>
                <li>Calculating damages including medical expenses, lost wages, and pain and suffering</li>
                <li>Representing you in court if a fair settlement cannot be reached</li>
              </ul>
            </div>

            <div className="content-section">
              <h2 className="content-heading">Common Causes of Car Accidents</h2>
              <p className="content-paragraph">
                Car accidents can happen for many reasons. Some of the most common causes include:
              </p>
              <div className="video-embed">
                <div className="video-placeholder">
                  <div className="video-play-button">▶</div>
                  <p className="video-title">What to do After a Car Accident | Ahmed Law Firm</p>
                </div>
              </div>
              <ul className="content-list">
                <li>Distracted driving (texting, phone calls, eating)</li>
                <li>Speeding and reckless driving</li>
                <li>Driving under the influence of alcohol or drugs</li>
                <li>Failure to yield right of way</li>
                <li>Running red lights or stop signs</li>
                <li>Following too closely (tailgating)</li>
                <li>Improper lane changes</li>
                <li>Weather conditions</li>
                <li>Vehicle defects or mechanical failures</li>
              </ul>
            </div>

            <div className="content-section">
              <h2 className="content-heading">Types of Car Accident Injuries</h2>
              <p className="content-paragraph">
                Car accidents can result in a wide range of injuries, from minor cuts and bruises to life-threatening 
                conditions. Common types of injuries include:
              </p>
              <div className="video-embed">
                <div className="video-placeholder">
                  <div className="video-play-button">▶</div>
                  <p className="video-title">What Happens if You're Hit By an Uber or Lyft Driver?</p>
                </div>
              </div>
              <ul className="content-list">
                <li>Whiplash and neck injuries</li>
                <li>Back injuries and spinal cord damage</li>
                <li>Head injuries and traumatic brain injuries (TBI)</li>
                <li>Broken bones and fractures</li>
                <li>Internal organ damage</li>
                <li>Cuts, lacerations, and scarring</li>
                <li>Emotional trauma and PTSD</li>
                <li>Wrongful death</li>
              </ul>
            </div>

            <div className="content-section">
              <h2 className="content-heading">Why Choose Ahmed Law Firm for Your Auto Accident Case</h2>
              <p className="content-paragraph">
                With over 40 years of experience representing auto accident victims throughout New York, Ahmed Law Firm 
                has the knowledge, resources, and dedication needed to secure the best possible outcome for your case. 
                We understand the challenges you're facing and are committed to providing personalized attention and 
                aggressive representation.
              </p>
              <p className="content-paragraph">
                Our track record speaks for itself – we have successfully represented thousands of clients and recovered 
                millions of dollars in compensation. We work on a contingency fee basis, so you don't pay unless we win 
                your case. Contact us today for a free consultation and let us fight for the compensation you deserve.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AutoAccidentsPage
