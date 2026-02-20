import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AttorneysPage from './pages/AttorneysPage'
import PracticeAreasPage from './pages/PracticeAreasPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/attorneys" element={<AttorneysPage />} />
            <Route path="/practice-areas" element={<PracticeAreasPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
