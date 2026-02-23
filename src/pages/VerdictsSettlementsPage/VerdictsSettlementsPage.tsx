import { useState, useMemo } from 'react'
import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import './VerdictsSettlementsPage.css'

const PRACTICE_AREAS = [
  'All',
  'Auto Accidents',
  'Medical Malpractice',
  'Pedestrian Accidents',
  'Premises Liability',
  'Birth Injury',
  'Construction/Work Accidents',
  'Wrongful Death',
  'No-Fault Insurance',
] as const

const INITIAL_VISIBLE = 15
const LOAD_MORE_COUNT = 15

type PracticeArea = (typeof PRACTICE_AREAS)[number]

interface VerdictItem {
  amount: string
  type: string
  practiceArea: PracticeArea
  description: string
  year: string
}

const verdictsData: VerdictItem[] = [
  { amount: '$2,500,000', type: 'Auto Accident', practiceArea: 'Auto Accidents', description: 'Settlement for client who sustained serious back injuries in a rear-end collision on the Long Island Expressway.', year: '2024' },
  { amount: '$1,850,000', type: 'Truck Accident', practiceArea: 'Auto Accidents', description: 'Verdict for victim of a commercial truck collision that resulted in multiple fractures and permanent limitations.', year: '2024' },
  { amount: '$2,100,000', type: 'Motorcycle Accident', practiceArea: 'Auto Accidents', description: 'Settlement for motorcyclist struck by a vehicle making an illegal turn in Queens.', year: '2023' },
  { amount: '$890,000', type: 'Bus Accident', practiceArea: 'Auto Accidents', description: 'Settlement for passenger injured when MTA bus driver made a sudden stop.', year: '2022' },
  { amount: '$1,650,000', type: 'Car Accident', practiceArea: 'Auto Accidents', description: 'Settlement for driver injured in a multi-vehicle pileup on the FDR Drive.', year: '2024' },
  { amount: '$1,200,000', type: 'Rideshare Accident', practiceArea: 'Auto Accidents', description: 'Settlement for passenger injured in Uber collision in Manhattan.', year: '2023' },
  { amount: '$1,750,000', type: 'Medical Malpractice', practiceArea: 'Medical Malpractice', description: 'Settlement for family in wrongful death case involving delayed diagnosis.', year: '2022' },
  { amount: '$2,250,000', type: 'Surgical Error', practiceArea: 'Medical Malpractice', description: 'Verdict for patient who suffered permanent injury due to surgical negligence.', year: '2024' },
  { amount: '$1,400,000', type: 'Birth Injury', practiceArea: 'Birth Injury', description: 'Settlement for family in birth injury case involving oxygen deprivation.', year: '2023' },
  { amount: '$2,800,000', type: 'Birth Injury', practiceArea: 'Birth Injury', description: 'Verdict for child who sustained cerebral palsy due to delivery negligence.', year: '2024' },
  { amount: '$975,000', type: 'Pedestrian Accident', practiceArea: 'Pedestrian Accidents', description: 'Verdict for pedestrian struck in a crosswalk by a distracted driver in Brooklyn.', year: '2023' },
  { amount: '$1,450,000', type: 'Pedestrian Accident', practiceArea: 'Pedestrian Accidents', description: 'Settlement for pedestrian hit by turning vehicle in Queens.', year: '2024' },
  { amount: '$1,100,000', type: 'Pedestrian Accident', practiceArea: 'Pedestrian Accidents', description: 'Settlement for pedestrian struck in parking lot in Nassau County.', year: '2022' },
  { amount: '$1,200,000', type: 'Slip and Fall', practiceArea: 'Premises Liability', description: 'Settlement for client who suffered a traumatic brain injury after falling on negligently maintained property.', year: '2023' },
  { amount: '$1,350,000', type: 'Premises Liability', practiceArea: 'Premises Liability', description: 'Verdict for client injured by falling debris from a negligently maintained building.', year: '2022' },
  { amount: '$765,000', type: 'Slip and Fall', practiceArea: 'Premises Liability', description: 'Settlement for slip and fall on wet floor in retail store.', year: '2024' },
  { amount: '$1,500,000', type: 'Construction Accident', practiceArea: 'Construction/Work Accidents', description: 'Settlement for worker injured when scaffolding collapsed due to improper safety measures.', year: '2023' },
  { amount: '$2,100,000', type: 'Construction Accident', practiceArea: 'Construction/Work Accidents', description: 'Verdict for worker who fell from height due to missing guardrails.', year: '2024' },
  { amount: '$1,150,000', type: 'Work Accident', practiceArea: 'Construction/Work Accidents', description: 'Settlement for worker injured by defective equipment on job site.', year: '2022' },
  { amount: '$2,000,000', type: 'Wrongful Death', practiceArea: 'Wrongful Death', description: 'Settlement for family of victim killed in a head-on collision caused by impaired driver.', year: '2022' },
  { amount: '$1,900,000', type: 'Wrongful Death', practiceArea: 'Wrongful Death', description: 'Verdict for family in wrongful death from construction site accident.', year: '2023' },
  { amount: '$1,600,000', type: 'Wrongful Death', practiceArea: 'Wrongful Death', description: 'Settlement for family of pedestrian killed by negligent driver.', year: '2024' },
  { amount: '$425,000', type: 'No-Fault Claim', practiceArea: 'No-Fault Insurance', description: 'Settlement for medical expenses and lost wages under no-fault coverage.', year: '2024' },
  { amount: '$650,000', type: 'No-Fault / Serious Injury', practiceArea: 'No-Fault Insurance', description: 'Settlement exceeding no-fault limits for client with serious injury threshold.', year: '2023' },
  { amount: '$520,000', type: 'No-Fault Insurance', practiceArea: 'No-Fault Insurance', description: 'Recovery for client denied no-fault benefits by insurer in bad faith.', year: '2022' },
  { amount: '$1,550,000', type: 'Auto Accident', practiceArea: 'Auto Accidents', description: 'Settlement for passenger with spinal injuries in highway collision.', year: '2023' },
  { amount: '$980,000', type: 'Medical Malpractice', practiceArea: 'Medical Malpractice', description: 'Settlement for misdiagnosis leading to delayed cancer treatment.', year: '2023' },
  { amount: '$1,320,000', type: 'Premises Liability', practiceArea: 'Premises Liability', description: 'Verdict for client injured by inadequate lighting in apartment building.', year: '2023' },
  { amount: '$1,050,000', type: 'Pedestrian Accident', practiceArea: 'Pedestrian Accidents', description: 'Settlement for pedestrian hit by delivery truck in Bronx.', year: '2022' },
  { amount: '$1,800,000', type: 'Construction/Work Accidents', practiceArea: 'Construction/Work Accidents', description: 'Settlement for worker injured in crane accident.', year: '2024' },
  { amount: '$1,250,000', type: 'Wrongful Death', practiceArea: 'Wrongful Death', description: 'Settlement for family in medical malpractice wrongful death.', year: '2023' },
  { amount: '$710,000', type: 'Bicycle Accident', practiceArea: 'Auto Accidents', description: 'Settlement for bicyclist struck by car in Brooklyn.', year: '2024' },
  { amount: '$580,000', type: 'No-Fault Insurance', practiceArea: 'No-Fault Insurance', description: 'Settlement for lost wages and medical bills in serious injury case.', year: '2023' },
]

function ScaleIcon() {
  return (
    <svg className="filter-scale-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  )
}

const VerdictsSettlementsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<PracticeArea>('All')
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)

  const filteredVerdicts = useMemo(() => {
    if (selectedFilter === 'All') return verdictsData
    return verdictsData.filter((v) => v.practiceArea === selectedFilter)
  }, [selectedFilter])

  const displayedVerdicts = useMemo(
    () => filteredVerdicts.slice(0, visibleCount),
    [filteredVerdicts, visibleCount]
  )

  const totalFiltered = filteredVerdicts.length
  const hasMore = visibleCount < totalFiltered
  const showLoadMore = hasMore && totalFiltered > INITIAL_VISIBLE

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, totalFiltered))
  }

  const handleFilterChange = (area: PracticeArea) => {
    setSelectedFilter(area)
    setVisibleCount(INITIAL_VISIBLE)
  }

  return (
    <div className="verdicts-settlements-page">
      <PageBanner
        title="Verdicts & Settlements"
        subtitle="Our track record of success for injured clients throughout New York"
      />

      <section className="verdicts-intro">
        <div className="verdicts-intro-container">
          <h2 className="verdicts-intro-heading">Proven Results for Our Clients</h2>
          <p className="verdicts-intro-text">
            For over 40 years, Ahmed Law Firm has fought tirelessly for injured victims and their families
            throughout New York. The results below represent a sample of our recoveries. Every case is different,
            and past results do not guarantee a similar outcome, but they demonstrate our commitment to securing
            maximum compensation for our clients.
          </p>
          <div className="verdicts-stats">
            <div className="verdicts-stat-item">
              <span className="verdicts-stat-value">$100M+</span>
              <span className="verdicts-stat-label">Recovered for Clients</span>
            </div>
            <div className="verdicts-stat-item">
              <span className="verdicts-stat-value">40+</span>
              <span className="verdicts-stat-label">Years of Experience</span>
            </div>
            <div className="verdicts-stat-item">
              <span className="verdicts-stat-value">Thousands</span>
              <span className="verdicts-stat-label">Cases Resolved</span>
            </div>
          </div>
        </div>
      </section>

      <section className="verdicts-results">
        <div className="verdicts-results-container">
          <h2 className="verdicts-results-heading">Recent Verdicts & Settlements</h2>

          <div className="verdicts-filter">
            <h3 className="verdicts-filter-heading">
              <ScaleIcon />
              Filter by Practice Area
            </h3>
            <div className="verdicts-filter-buttons">
              {PRACTICE_AREAS.map((area) => (
                <button
                  key={area}
                  type="button"
                  className={`verdicts-filter-btn ${selectedFilter === area ? 'active' : ''}`}
                  onClick={() => handleFilterChange(area)}
                >
                  {area}
                </button>
              ))}
            </div>
            <p className="verdicts-filter-count">
              Showing {displayedVerdicts.length} of {totalFiltered} results
            </p>
          </div>

          {displayedVerdicts.length === 0 ? (
            <p className="verdicts-no-results">No verdicts or settlements found for this practice area.</p>
          ) : (
            <>
              <div className="verdicts-grid">
                {displayedVerdicts.map((item, index) => (
                  <article key={`${item.year}-${index}`} className="verdict-card">
                    <div className="verdict-card-header">
                      <span className="verdict-amount">{item.amount}</span>
                      <span className="verdict-year">{item.year}</span>
                    </div>
                    <span className="verdict-type">{item.type}</span>
                    <p className="verdict-description">{item.description}</p>
                  </article>
                ))}
              </div>

              {showLoadMore && (
                <div className="verdicts-load-more-wrap">
                  <button type="button" className="verdicts-load-more-btn" onClick={handleLoadMore}>
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="verdicts-disclaimer">
        <div className="verdicts-disclaimer-container">
          <p className="verdicts-disclaimer-text">
            The results listed above are a sample of our many successful case outcomes. Each case is unique and
            results depend on the specific facts and circumstances. Prior results do not guarantee a similar outcome
            in your case. Contact us for a free consultation to discuss your situation.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default VerdictsSettlementsPage
