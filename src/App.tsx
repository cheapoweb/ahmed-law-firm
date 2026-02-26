import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import HomePage2 from './pages/HomePage2/HomePage2'
import HomePage3 from './pages/HomePage3/HomePage3'
import AboutPage from './pages/AboutPage'
import AttorneysPage from './pages/AttorneysPage'
import PracticeAreasPage from './pages/PracticeAreasPage'
import AutoAccidentsPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/AutoAccidentsPage'
import LawsuitProcessPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/LawsuitProcessPage/LawsuitProcessPage'
import TypesOfAccidentsPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/TypesOfAccidentsPage/TypesOfAccidentsPage'
import RearEndAccidentsPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/RearEndAccidentsPage/RearEndAccidentsPage'
import AfterAccidentChecklistPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/AfterAccidentChecklistPage/AfterAccidentChecklistPage'
import CausesOfAccidentsPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/CausesOfAccidentsPage/CausesOfAccidentsPage'
import RolloverAccidentsPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/RolloverAccidentsPage/RolloverAccidentsPage'
import SideImpactCollisionsPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/SideImpactCollisionsPage/SideImpactCollisionsPage'
import HeadOnCollisionsPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/HeadOnCollisionsPage/HeadOnCollisionsPage'
import BlackBoxDataPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/BlackBoxDataPage/BlackBoxDataPage'
import PoorlyMaintainedRoadsPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/PoorlyMaintainedRoadsPage/PoorlyMaintainedRoadsPage'
import RecklessDrivingPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/RecklessDrivingPage/RecklessDrivingPage'
import DriverDistractionsPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/DriverDistractionsPage/DriverDistractionsPage'
import DriverImpairmentPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/DriverImpairmentPage/DriverImpairmentPage'
import CarDefectsPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/CarDefectsPage/CarDefectsPage'
import IntersectionAccidentsPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/IntersectionAccidentsPage/IntersectionAccidentsPage'
import PainAndSufferingPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/PainAndSufferingPage/PainAndSufferingPage'
import RecklessDisregardPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/RecklessDisregardPage/RecklessDisregardPage'
import NotAtFaultPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/NotAtFaultPage/NotAtFaultPage'
import MultiCarAccidentsPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/MultiCarAccidentsPage/MultiCarAccidentsPage'
import TBoneCrashesPage from './pages/PracticeAreasPage/sub-pages/AutoAccidentsPage/subpages/TBoneCrashesPage/TBoneCrashesPage'
import VerdictsSettlementsPage from './pages/VerdictsSettlementsPage/VerdictsSettlementsPage'
import ReviewsRatingsPage from './pages/ReviewsRatingsPage/ReviewsRatingsPage'
import LegalBlogPage from './pages/LegalBlogPage/LegalBlogPage'
import FAQPage from './pages/FAQPage/FAQPage'
import LegalResourcesPage from './pages/LegalResourcesPage/LegalResourcesPage'
import ContactPage from './pages/ContactPage/ContactPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home-2" element={<HomePage2 />} />
            <Route path="/home-3" element={<HomePage3 />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/attorneys" element={<AttorneysPage />} />
            <Route path="/practice-areas" element={<PracticeAreasPage />} />
            <Route path="/practice-areas/auto-accidents" element={<AutoAccidentsPage />} />
            <Route path="/practice-areas/auto-accidents/lawsuit-process" element={<LawsuitProcessPage />} />
            <Route path="/practice-areas/auto-accidents/types-of-accidents" element={<TypesOfAccidentsPage />} />
            <Route path="/practice-areas/auto-accidents/rear-end-accidents" element={<RearEndAccidentsPage />} />
            <Route path="/practice-areas/auto-accidents/after-accident-checklist" element={<AfterAccidentChecklistPage />} />
            <Route path="/practice-areas/auto-accidents/causes-of-accidents" element={<CausesOfAccidentsPage />} />
            <Route path="/practice-areas/auto-accidents/rollover-accidents" element={<RolloverAccidentsPage />} />
            <Route path="/practice-areas/auto-accidents/side-impact-collisions" element={<SideImpactCollisionsPage />} />
            <Route path="/practice-areas/auto-accidents/head-on-collisions" element={<HeadOnCollisionsPage />} />
            <Route path="/practice-areas/auto-accidents/black-box-data" element={<BlackBoxDataPage />} />
            <Route path="/practice-areas/auto-accidents/poorly-maintained-roads" element={<PoorlyMaintainedRoadsPage />} />
            <Route path="/practice-areas/auto-accidents/reckless-driving" element={<RecklessDrivingPage />} />
            <Route path="/practice-areas/auto-accidents/driver-distractions" element={<DriverDistractionsPage />} />
            <Route path="/practice-areas/auto-accidents/driver-impairment" element={<DriverImpairmentPage />} />
            <Route path="/practice-areas/auto-accidents/car-defects" element={<CarDefectsPage />} />
            <Route path="/practice-areas/auto-accidents/intersection-accidents" element={<IntersectionAccidentsPage />} />
            <Route path="/practice-areas/auto-accidents/pain-and-suffering" element={<PainAndSufferingPage />} />
            <Route path="/practice-areas/auto-accidents/reckless-disregard" element={<RecklessDisregardPage />} />
            <Route path="/practice-areas/auto-accidents/not-at-fault" element={<NotAtFaultPage />} />
            <Route path="/practice-areas/auto-accidents/multi-car-accidents" element={<MultiCarAccidentsPage />} />
            <Route path="/practice-areas/auto-accidents/t-bone-crashes" element={<TBoneCrashesPage />} />
            <Route path="/verdicts-settlements" element={<VerdictsSettlementsPage />} />
            <Route path="/reviews-ratings" element={<ReviewsRatingsPage />} />
            <Route path="/legal-blog" element={<LegalBlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/legal-resources" element={<LegalResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
