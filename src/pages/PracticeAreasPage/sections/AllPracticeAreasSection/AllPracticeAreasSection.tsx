import ShapeDivider from '../../../../components/ShapeDivider'
import './AllPracticeAreasSection.css'

const practiceAreaCategories = [
  {
    title: 'Personal Injury',
    items: [
      'Auto Accidents', 'Car Accidents', 'Bus Accidents', 'Motorcycle Accidents',
      'Truck Accidents', 'Uber/Lyft Accidents', 'Pedestrian Accidents',
      'Slip & Fall', 'Trip & Fall', 'Premises Liability', 'Product Liability',
      'Dog Bites', 'Building Collapse Injuries', 'Wrongful Death',
      'Mass Tort & Class Action'
    ]
  },
  {
    title: 'Workers Benefits',
    items: [
      'Construction Accidents', 'Crane Accidents', 'Forklift Accidents',
      'Scaffolding Injury', 'Workplace Falls', 'Equipment Accidents',
      'Industrial Accidents', 'Workplace Burns', 'Repetitive Stress Injuries'
    ]
  },
  {
    title: 'Medical Malpractice',
    items: [
      'Birth Injury', 'Cancer Misdiagnosis', 'Foreign Objects', 'Surgical Errors',
      'ER Errors', 'Cerebral Palsy', 'Paralysis', 'Misdiagnosis'
    ]
  },
  {
    title: 'Nursing Home Injury',
    items: [
      'Nursing Home Accidents', 'Bed Sores', 'Nursing Home Abuse & Neglect'
    ]
  },
  {
    title: 'Health Care Litigation',
    items: [
      'Birth Injuries', 'ER Errors', 'Cerebral Palsy', 'Paralysis', 'Misdiagnosis'
    ]
  }
]

export const AllPracticeAreasSection = () => {
  return (
    <section className="all-practice-areas-section">
      <div className="all-practice-areas-container">
        <h2 className="section-heading">All Practice Area Pages</h2>
        <p className="section-subheading">
          Comprehensive legal services across all areas of personal injury and healthcare law
        </p>
        <div className="practice-areas-grid">
          {practiceAreaCategories.map((category, index) => (
            <div key={index} className="practice-area-card">
              <h3 className="card-title">{category.title}</h3>
              <ul className="card-items">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
