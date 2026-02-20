import ShapeDivider from '../../../../components/ShapeDivider'
import './LocationSpecificSection.css'

const locationPracticeAreas = [
  { title: 'Auto Accidents', locations: ['Manhattan', 'Brooklyn', 'Long Island', 'Queens', 'Bronx', 'Staten Island'] },
  { title: 'Medical Malpractice', locations: ['Queens', 'Bronx', 'Brooklyn', 'Staten Island', 'Long Island', 'Manhattan'] },
  { title: 'Slip & Fall', locations: ['Long Island', 'Manhattan', 'Queens', 'Brooklyn', 'Staten Island', 'Bronx'] },
  { title: 'Trucking Accidents', locations: ['Brooklyn', 'Staten Island', 'Queens', 'Long Island', 'Manhattan', 'Bronx'] },
  { title: 'Work/Construction Accidents', locations: ['Bronx', 'Long Island', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island'] },
  { title: 'Wrongful Death', locations: ['Staten Island', 'Queens', 'Bronx', 'Manhattan', 'Brooklyn', 'Long Island'] }
]

export const LocationSpecificSection = () => {
  return (
    <section className="location-specific-section">
      <ShapeDivider color="#F8F8F8" />
      <div className="location-specific-container">
        <h2 className="section-heading">Location-Specific Pages</h2>
        <p className="section-subheading">
          Dedicated legal representation across New York's five boroughs and Long Island
        </p>
        <div className="location-practice-areas-grid">
          {locationPracticeAreas.map((area, index) => (
            <div key={index} className="location-practice-area-card">
              <div className="card-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="card-title">{area.title}</h3>
              <ul className="card-items">
                {area.locations.map((location, locationIndex) => (
                  <li key={locationIndex}>{location}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
