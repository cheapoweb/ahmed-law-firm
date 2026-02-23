import './AwardsSection.css'

const lawAwards = [
  { id: 1, name: 'Best Lawyers' },
  { id: 2, name: 'Super Lawyers' },
  { id: 3, name: 'Martindale-Hubbell' },
  { id: 4, name: 'AV Preeminent' },
  { id: 5, name: 'Legal 500' },
  { id: 6, name: 'Chambers USA' },
  { id: 7, name: 'Law360' },
  { id: 8, name: 'Trial Lawyers' },
  { id: 9, name: 'Million Dollar' },
  { id: 10, name: 'Multi-Million Dollar' },
  { id: 11, name: 'Top Verdict' },
  { id: 12, name: 'National Trial Lawyers' },
]

export const AwardsSection = () => {
  return (
    <section className="awards-section">
      <div className="awards-container">
        <h2 className="awards-title">OUR AWARDS</h2>
        <div className="awards-carousel">
          <div className="awards-track">
            {[...lawAwards, ...lawAwards].map((award) => (
              <div key={`${award.id}-${award.name}`} className="awards-item">
                <div className="awards-placeholder">
                  <span className="awards-placeholder-text">{award.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
