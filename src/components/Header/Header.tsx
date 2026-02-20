import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left Section - Logo */}
        <Link to="/" className="header-brand">
          <img src={logo} alt="Ahmed Law Firm Logo" className="header-logo" />
        </Link>

        {/* Center Section - Navigation */}
        <nav className="header-nav">
          <div className="nav-dropdown">
            <Link to="/about" className="nav-link nav-link-trigger">
              About
              <span className="nav-dropdown-arrow">▼</span>
            </Link>
            <div className="nav-dropdown-menu">
              <Link to="/attorneys" className="nav-dropdown-item">Attorneys</Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <Link to="/practice-areas" className="nav-link nav-link-trigger">
              Practice Areas
              <span className="nav-dropdown-arrow">▼</span>
            </Link>
            <div className="nav-dropdown-menu">
              <Link to="/practice-areas/auto-accidents" className="nav-dropdown-item">Auto Accidents</Link>
              <Link to="/practice-areas/car-accidents" className="nav-dropdown-item">Car Accidents</Link>
              <Link to="/practice-areas/motorcycle-accidents" className="nav-dropdown-item">Motorcycle Accidents</Link>
              <Link to="/practice-areas/truck-accidents" className="nav-dropdown-item">Truck Accidents</Link>
              <Link to="/practice-areas/bicycle-accidents" className="nav-dropdown-item">Bicycle Accidents</Link>
              <Link to="/practice-areas/pedestrian-accidents" className="nav-dropdown-item">Pedestrian Accidents</Link>
              <Link to="/practice-areas/bus-accidents" className="nav-dropdown-item">Bus Accidents</Link>
              <Link to="/practice-areas/subway-accidents" className="nav-dropdown-item">Subway Accidents</Link>
              <Link to="/practice-areas/rideshare-accidents" className="nav-dropdown-item">Rideshare Accidents (Uber/Lyft)</Link>
              <Link to="/practice-areas/boating-accidents" className="nav-dropdown-item">Boating Accidents</Link>
              <Link to="/practice-areas/plane-accidents" className="nav-dropdown-item">Plane Accidents</Link>
              <Link to="/practice-areas/train-accidents" className="nav-dropdown-item">Train Accidents</Link>
            </div>
          </div>
          <a href="/#results" className="nav-link">Results</a>
          <a href="/#locations" className="nav-link">Locations</a>
          <a href="/#resources" className="nav-link">Resources</a>
          <a href="/#contact" className="nav-link">Contact us</a>
        </nav>

        {/* Right Section - Contact Info and CTA */}
        <div className="header-contact">
          <div className="header-phone">
            <svg 
              className="phone-icon" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="phone-number">(718) 848-9595</span>
          </div>
          <button className="header-cta-button">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
