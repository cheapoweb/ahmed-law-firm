import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'
import { LanguageProvider } from './context/LanguageContext'
import HomePage from './pages/HomePage'
import HomePage2 from './pages/HomePage2/HomePage2'
import HomePage3 from './pages/HomePage3/HomePage3'
import AboutPage from './pages/AboutPage'
import AttorneysPage from './pages/AttorneysPage'
import AttorneyProfilePage from './pages/AttorneysPage/AttorneyProfilePage'
import PracticeAreasPage from './pages/PracticeAreasPage'
import GenericPracticeAreaPage from './pages/PracticeAreasPage/sub-pages/GenericPracticeAreaPage/GenericPracticeAreaPage'
import VerdictsSettlementsPage from './pages/VerdictsSettlementsPage/VerdictsSettlementsPage'
import ReviewsRatingsPage from './pages/ReviewsRatingsPage/ReviewsRatingsPage'
import LegalBlogPage from './pages/LegalBlogPage/LegalBlogPage'
import FAQPage from './pages/FAQPage/FAQPage'
import LegalResourcesPage from './pages/LegalResourcesPage/LegalResourcesPage'
import ContactPage from './pages/ContactPage/ContactPage'
import SearchPage from './pages/SearchPage/SearchPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage'
import DisclaimerPage from './pages/DisclaimerPage/DisclaimerPage'
import './App.css'

function App() {
  return (
    <Router>
      <LanguageProvider>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage3 />} />
            <Route path="/home-1" element={<HomePage />} />
            <Route path="/home-2" element={<HomePage2 />} />
            <Route path="/home-3" element={<HomePage3 />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/attorneys" element={<AttorneysPage />} />
            <Route path="/attorneys/:slug" element={<AttorneyProfilePage />} />
            <Route path="/practice-areas" element={<PracticeAreasPage />} />
            <Route path="/practice-areas/auto-accidents" element={<Navigate to="/practice-areas/vehicle-accidents" replace />} />
            <Route path="/practice-areas/auto-accidents/*" element={<Navigate to="/practice-areas/vehicle-accidents" replace />} />
            <Route path="/practice-areas/:slug" element={<GenericPracticeAreaPage />} />
            <Route path="/verdicts-settlements" element={<VerdictsSettlementsPage />} />
            <Route path="/reviews-ratings" element={<ReviewsRatingsPage />} />
            <Route path="/legal-blog" element={<LegalBlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/legal-resources" element={<LegalResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
      </div>
      </LanguageProvider>
    </Router>
  )
}

export default App
