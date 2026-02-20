import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './LawsuitProcessPage.css'

const LawsuitProcessPage = () => {
  return (
    <div className="lawsuit-process-page">
      <PageBanner 
        title="Car Accident Lawsuit Process"
        subtitle="Understanding the legal process for car accident claims in New York"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Understanding the Car Accident Lawsuit Process</h1>
              
              <p className="content-paragraph">
                Navigating a car accident lawsuit can be complex and overwhelming, especially when you're dealing with 
                injuries and recovery. At Ahmed Law Firm, we guide our clients through every step of the legal process, 
                ensuring they understand their rights and what to expect.
              </p>

              <h2 className="content-heading">Initial Consultation and Case Evaluation</h2>
              <p className="content-paragraph">
                The first step in any car accident lawsuit is a free consultation with an experienced attorney. During 
                this meeting, we'll evaluate your case, discuss the circumstances of your accident, review any evidence 
                you have, and explain your legal options. This initial consultation helps us determine the strength of 
                your case and the potential value of your claim.
              </p>

              <h2 className="content-heading">Investigation and Evidence Gathering</h2>
              <p className="content-paragraph">
                Once you've retained our firm, we begin a thorough investigation of your accident. This includes:
              </p>
              <ul className="content-list">
                <li>Collecting police reports and accident scene documentation</li>
                <li>Interviewing witnesses and gathering statements</li>
                <li>Obtaining medical records and treatment documentation</li>
                <li>Reviewing insurance policies and coverage limits</li>
                <li>Analyzing vehicle damage and accident reconstruction</li>
                <li>Consulting with medical and accident reconstruction experts when necessary</li>
              </ul>

              <h2 className="content-heading">Filing the Lawsuit</h2>
              <p className="content-paragraph">
                If a fair settlement cannot be reached through negotiations, we will file a lawsuit on your behalf. 
                In New York, you typically have three years from the date of the accident to file a personal injury 
                lawsuit. The complaint outlines your claims, the damages you've suffered, and the legal basis for 
                holding the at-fault party responsible.
              </p>

              <h2 className="content-heading">Discovery Phase</h2>
              <p className="content-paragraph">
                During discovery, both sides exchange information and evidence related to the case. This phase includes:
              </p>
              <ul className="content-list">
                <li>Depositions of parties and witnesses</li>
                <li>Document requests and production</li>
                <li>Interrogatories (written questions)</li>
                <li>Expert witness reports and testimony</li>
                <li>Medical examinations</li>
              </ul>

              <h2 className="content-heading">Settlement Negotiations</h2>
              <p className="content-paragraph">
                Throughout the process, we continuously work to negotiate a fair settlement. Most car accident cases 
                are resolved through settlement rather than trial, which can save time and money while still securing 
                fair compensation for our clients.
              </p>

              <h2 className="content-heading">Trial (If Necessary)</h2>
              <p className="content-paragraph">
                If a settlement cannot be reached, we are fully prepared to take your case to trial. Our experienced 
                trial attorneys will present your case to a jury, arguing for the maximum compensation you deserve for 
                your injuries, medical expenses, lost wages, and pain and suffering.
              </p>

              <h2 className="content-heading">Why Choose Ahmed Law Firm</h2>
              <p className="content-paragraph">
                With over 40 years of experience handling car accident cases throughout New York, Ahmed Law Firm has 
                the knowledge and resources to guide you through every step of the lawsuit process. We work on a 
                contingency fee basis, meaning you don't pay unless we win your case. Contact us today for a free 
                consultation.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LawsuitProcessPage
