import Footer from '../../../../../../components/Footer'
import PageBanner from '../../../../../../components/PageBanner'
import { PracticeAreaSidebar } from '../../../components/PracticeAreaSidebar/PracticeAreaSidebar'
import './IntersectionAccidentsPage.css'

const IntersectionAccidentsPage = () => {
  return (
    <div className="intersection-accidents-page">
      <PageBanner 
        title="Intersection Accident Lawyers"
        subtitle="Expert representation for intersection crash victims"
      />
      
      <div className="practice-area-content-wrapper">
        <div className="practice-area-container">
          <PracticeAreaSidebar 
            category="vehicle-accidents"
          />

          <main className="practice-area-main-content">
            <div className="content-section">
              <h1 className="content-title">Intersection Accident Attorneys</h1>
              
              <p className="content-paragraph">
                Intersection accidents are among the most common types of car crashes, accounting for approximately 
                40% of all collisions. These accidents often occur when drivers fail to yield the right of way or 
                violate traffic signals.
              </p>

              <h2 className="content-heading">Common Causes of Intersection Accidents</h2>
              <p className="content-paragraph">
                Intersection accidents frequently result from:
              </p>
              <ul className="content-list">
                <li>Running red lights or stop signs</li>
                <li>Failure to yield the right of way</li>
                <li>Making illegal turns</li>
                <li>Distracted driving</li>
                <li>Speeding through intersections</li>
                <li>Misjudging the speed of oncoming traffic</li>
                <li>Driving under the influence</li>
                <li>Poor visibility or weather conditions</li>
              </ul>

              <h2 className="content-heading">Types of Intersection Accidents</h2>
              <p className="content-paragraph">
                Common intersection collision types include:
              </p>
              <ul className="content-list">
                <li>T-bone or side-impact collisions</li>
                <li>Head-on collisions</li>
                <li>Rear-end collisions</li>
                <li>Left-turn accidents</li>
                <li>Right-turn accidents</li>
                <li>Multi-vehicle pileups</li>
              </ul>

              <h2 className="content-heading">Determining Fault</h2>
              <p className="content-paragraph">
                Fault in intersection accidents is typically determined by:
              </p>
              <ul className="content-list">
                <li>Traffic signal violations</li>
                <li>Right-of-way rules</li>
                <li>Witness testimony</li>
                <li>Traffic camera footage</li>
                <li>Police reports</li>
                <li>Accident reconstruction</li>
                <li>Skid marks and vehicle damage patterns</li>
              </ul>

              <h2 className="content-heading">Right-of-Way Rules</h2>
              <p className="content-paragraph">
                Understanding right-of-way rules is crucial:
              </p>
              <ul className="content-list">
                <li>Vehicles going straight have right-of-way over turning vehicles</li>
                <li>Right turns generally have right-of-way over left turns</li>
                <li>First vehicle to stop at a 4-way stop goes first</li>
                <li>Yield signs require yielding to oncoming traffic</li>
                <li>Emergency vehicles always have right-of-way</li>
              </ul>

              <h2 className="content-heading">Common Injuries</h2>
              <p className="content-paragraph">
                Intersection accidents often cause:
              </p>
              <ul className="content-list">
                <li>Head and traumatic brain injuries</li>
                <li>Neck and back injuries</li>
                <li>Broken bones</li>
                <li>Internal organ damage</li>
                <li>Crush injuries</li>
                <li>Lacerations and scarring</li>
              </ul>

              <h2 className="content-heading">Get Legal Help</h2>
              <p className="content-paragraph">
                If you've been injured in an intersection accident, Ahmed Law Firm can help you determine fault and 
                recover compensation. We investigate all evidence and work with experts when necessary. Contact us 
                today for a free consultation.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default IntersectionAccidentsPage
