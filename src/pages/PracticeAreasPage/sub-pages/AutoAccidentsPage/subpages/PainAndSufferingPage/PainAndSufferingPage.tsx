import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './PainAndSufferingPage.css'

const PainAndSufferingPage = () => {
  return (
    <div className="pain-and-suffering-page">
      <PageBanner 
        title="Pain and Suffering in Car Accidents"
        subtitle="Understanding compensation for non-economic damages"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Pain and Suffering Compensation</h1>
              
              <p className="content-paragraph">
                In addition to medical bills and lost wages, car accident victims may be entitled to compensation 
                for pain and suffering. These non-economic damages compensate victims for the physical and emotional 
                toll of their injuries.
              </p>

              <h2 className="content-heading">What is Pain and Suffering?</h2>
              <p className="content-paragraph">
                Pain and suffering includes:
              </p>
              <ul className="content-list">
                <li>Physical pain from injuries</li>
                <li>Emotional distress and mental anguish</li>
                <li>Loss of enjoyment of life</li>
                <li>Anxiety and depression</li>
                <li>PTSD and trauma</li>
                <li>Loss of consortium (impact on relationships)</li>
                <li>Disability and disfigurement</li>
                <li>Inconvenience and disruption to daily life</li>
              </ul>

              <h2 className="content-heading">How Pain and Suffering is Calculated</h2>
              <p className="content-paragraph">
                There's no fixed formula, but factors considered include:
              </p>
              <ul className="content-list">
                <li>Severity and permanence of injuries</li>
                <li>Duration of recovery</li>
                <li>Impact on daily activities</li>
                <li>Emotional and psychological impact</li>
                <li>Age and life circumstances</li>
                <li>Medical treatment required</li>
                <li>Expert testimony</li>
              </ul>

              <h2 className="content-heading">Common Methods of Calculation</h2>
              <p className="content-paragraph">
                Insurance companies and attorneys may use:
              </p>
              <ul className="content-list">
                <li><strong>Multiplier method:</strong> Medical expenses multiplied by a factor (typically 1.5-5)</li>
                <li><strong>Per diem method:</strong> Daily rate multiplied by days of suffering</li>
                <li><strong>Comparable cases:</strong> Similar cases and their outcomes</li>
                <li><strong>Jury verdicts:</strong> Similar cases that went to trial</li>
              </ul>

              <h2 className="content-heading">Documenting Pain and Suffering</h2>
              <p className="content-paragraph">
                To maximize your pain and suffering claim:
              </p>
              <ul className="content-list">
                <li>Keep a pain journal documenting daily struggles</li>
                <li>Document emotional impacts</li>
                <li>Seek mental health treatment if needed</li>
                <li>Get statements from family and friends</li>
                <li>Follow all medical recommendations</li>
                <li>Document how injuries affect your life</li>
              </ul>

              <h2 className="content-heading">New York Pain and Suffering Laws</h2>
              <p className="content-paragraph">
                In New York:
              </p>
              <ul className="content-list">
                <li>Pain and suffering is recoverable in personal injury cases</li>
                <li>No-fault insurance may limit claims for minor injuries</li>
                <li>Serious injury threshold must be met in some cases</li>
                <li>Comparative negligence may reduce awards</li>
              </ul>

              <h2 className="content-heading">Why You Need an Attorney</h2>
              <p className="content-paragraph">
                Insurance companies often undervalue pain and suffering claims. An experienced attorney can help 
                you document your damages and negotiate for fair compensation. Contact Ahmed Law Firm today to discuss 
                your case and learn about your rights.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PainAndSufferingPage
