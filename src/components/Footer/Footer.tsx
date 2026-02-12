import logo from '../../assets/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Ahmed Law Firm Logo" className="footer-logo" />
            <h3 className="footer-brand-name">Ahmed Law Firm</h3>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-column-title">About</h4>
              <ul className="footer-list">
                <li><a href="#our-firm">Our Firm</a></li>
                <li><a href="#attorneys">Our Attorneys</a></li>
                <li><a href="#giving-back">Giving Back</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-column-title">Practice Areas</h4>
              <ul className="footer-list">
                <li><a href="#auto-accidents">Auto Accidents</a></li>
                <li><a href="#construction">Construction Accidents</a></li>
                <li><a href="#medical-malpractice">Medical Malpractice</a></li>
                <li><a href="#personal-injury">Personal Injury</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-column-title">Results</h4>
              <ul className="footer-list">
                <li><a href="#verdicts">Verdicts & Settlements</a></li>
                <li><a href="#testimonials">Video Testimonials</a></li>
                <li><a href="#reviews">Reviews & Ratings</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-column-title">Resources</h4>
              <ul className="footer-list">
                <li><a href="#blog">Legal Blog</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#legal-resources">Legal Resources</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-column-title">Contact</h4>
              <ul className="footer-list">
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#locations">Locations</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-disclaimer">
            <p>Ahmed Law Firm is located in Uniondale, NY and serves clients throughout Long Island, including Nassau County, Queens County, The Bronx, Brooklyn, NYC, and Suffolk County.</p>
            <p className="disclaimer-text">Attorney Advertising. This website is designed for general information only. The information presented at this site should not be construed to be formal legal advice nor the formation of a lawyer/client relationship.</p>
          </div>
          
          <div className="footer-cta">
            <button className="footer-cta-button">Schedule Free Consultation</button>
            <button className="footer-cta-button-secondary">Receive a call back</button>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; 2026 Ahmed Law Firm. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
