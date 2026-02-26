import { Link } from 'react-router-dom'
import { useState } from 'react'
import Footer from '../../components/Footer'
// import ShapeDivider from '../../components/ShapeDivider'
import bannerBuildings from '../../assets/banner-buildings.webp'
import teamImage from '../../assets/team-full.webp'
import personalInjuryImage from '../../assets/Personal-injury.webp'
import workersBenefitsImage from '../../assets/workers-benefits.webp'
import './HomePage2.css'

const whyChooseItems = [
  {
    icon: '📋',
    title: 'Free Consultation',
    text: 'Discuss your case at no cost. We listen, evaluate, and advise with no obligation. Every conversation is confidential, and there is no pressure. We want you to understand your rights and options before moving forward.',
  },
  {
    icon: '⚖',
    title: 'No Fee Unless We Win',
    text: 'You pay nothing upfront. Our fees are a percentage of what we recover for you. If we do not win your case, you do not pay attorney fees. We advance costs so you can focus on recovery while we fight for the compensation you deserve.',
  },
  {
    icon: '🕐',
    title: '24/7 Availability',
    text: 'Injured? Reach us any time. We respond quickly and are here when you need us. Accidents do not wait for business hours—neither do we. Call (718) 848-9595 for a free consultation day or night.',
  },
]

const processSteps = [
  { step: 1, title: 'Contact Us', desc: 'Call or submit a form. We respond within hours.' },
  { step: 2, title: 'Free Case Evaluation', desc: 'We review the facts and explain your options.' },
  { step: 3, title: 'Investigation & Build', desc: 'We gather evidence and build your case.' },
  { step: 4, title: 'Resolution', desc: 'Settlement or trial—we fight for maximum recovery.' },
]

const blogCards = [
  { title: 'What Is the Statute of Limitations for Car Accidents in New York?', to: '/legal-blog', date: 'Feb 2025', excerpt: 'Understanding the deadlines that apply to your auto accident claim can make the difference between recovering compensation and losing your right to sue.' },
  { title: 'How Much Is My Personal Injury Case Worth?', to: '/legal-blog', date: 'Jan 2025', excerpt: 'Case value depends on your injuries, medical treatment, lost wages, and the impact on your life. We help you understand what to expect.' },
  { title: 'Steps to Take After a Slip and Fall', to: '/legal-blog', date: 'Dec 2024', excerpt: 'Document the scene, get medical care, and report the incident. These steps help protect your health and your claim.' },
]

const faqs = [
  { q: 'What is a personal injury lawsuit?', a: 'A personal injury lawsuit allows you to seek compensation when someone else’s negligence causes you harm. We handle the legal process—filing the claim, negotiating with insurance, and if necessary, going to trial—so you can focus on recovery.' },
  { q: 'How long do I have to file a claim?', a: 'In New York, you generally have 3 years from the date of injury for most personal injury cases. Medical malpractice and some other claims have different deadlines. Contact us as soon as possible to protect your rights.' },
  { q: 'Do I need to go to court?', a: 'Many cases settle without a trial. If yours goes to court, we represent you every step of the way and prepare you for what to expect.' },
  { q: 'What areas do you serve?', a: 'We serve clients throughout New York, including Long Island, Nassau County, Queens County, Kings County, The Bronx, Brooklyn, NYC, and Suffolk County. We can come to you if you cannot travel.' },
]

const HomePage2 = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="home-page-2">
      {/* Hero – bold headline + CTA + team image */}
      <section className="hp2-hero">
        <div className="hp2-hero-bg">
          <img src={bannerBuildings} alt="" className="hp2-hero-img" />
          <div className="hp2-hero-overlay" />
        </div>
        <div className="hp2-hero-inner">
          <div className="hp2-hero-content">
            <h1 className="hp2-hero-headline">Injured? Get Justice Now.</h1>
            <p className="hp2-hero-sub">
              We are personal injury attorneys fighting for victims throughout New York and beyond. Established in 1981, Ahmed Law Firm has recovered millions for our clients. Free consultation—no fee unless we win.
            </p>
            <Link to="/contact" className="hp2-hero-cta">Contact an Attorney</Link>
            <a href="tel:7188489595" className="hp2-hero-phone">(718) 848-9595</a>
          </div>
          <div className="hp2-hero-image-wrap">
            <img src={teamImage} alt="Ahmed Law Firm Team" className="hp2-hero-team-img" />
          </div>
        </div>
      </section>

      {/* Big stat bar */}
      <section className="hp2-stat-bar">
        <div className="hp2-stat-inner">
          <span className="hp2-stat-number">$100M+</span>
          <span className="hp2-stat-label">Recovered for Our Clients</span>
        </div>
      </section>

      {/* Why Choose Us – 3 cards */}
      <section className="hp2-why">
        <div className="hp2-container">
          <h2 className="hp2-why-title">Why Choose Us</h2>
          <div className="hp2-why-grid">
            {whyChooseItems.map((item) => (
              <div key={item.title} className="hp2-why-card">
                <span className="hp2-why-icon">{item.icon}</span>
                <h3 className="hp2-why-card-title">{item.title}</h3>
                <p className="hp2-why-card-text">{item.text}</p>
                {item.title === 'No Fee Unless We Win' && (
                  <Link to="/contact" className="hp2-why-link">Learn More</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Firm – team image + copy */}
      <section className="hp2-about">
        <div className="hp2-container hp2-about-inner">
          <div className="hp2-about-image-wrap">
            <img src={teamImage} alt="Ahmed Law Firm Team" className="hp2-about-img" />
          </div>
          <div className="hp2-about-content">
            <h2 className="hp2-about-title">About Ahmed Law Firm</h2>
            <p className="hp2-about-text">
              Ahmed Law Firm was founded in 1981 with a commitment to providing exceptional legal representation to individuals and families who have been injured due to the negligence of others. Our firm has built a reputation for excellence through decades of dedicated service to clients throughout New York, including Long Island, Nassau County, Queens County, Kings County, The Bronx, Brooklyn, NYC, and Suffolk County.
            </p>
            <p className="hp2-about-text">
              We handle auto accidents, truck accidents, slip and fall, construction accidents, wrongful death, medical malpractice, and more. When you choose us, you get experienced litigators who care about your recovery and your future.
            </p>
            <Link to="/about" className="hp2-about-link">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* Testimonial strip – dark */}
      <section className="hp2-testimonial">
        {/* <ShapeDivider color="#233041" /> */}
        <div className="hp2-container">
          <blockquote className="hp2-quote">“As one of the best firms around, you have been amazing.”</blockquote>
          <p className="hp2-quote-author">— Client</p>
          <Link to="/reviews-ratings" className="hp2-testimonial-cta">View All Testimonials</Link>
        </div>
      </section>

      {/* The Process – 4 steps */}
      <section className="hp2-process">
        <div className="hp2-container">
          <h2 className="hp2-process-title">The Process</h2>
          <p className="hp2-process-sub">How we work to get you the recovery you deserve.</p>
          <div className="hp2-process-grid">
            {processSteps.map((s) => (
              <div key={s.step} className="hp2-process-card">
                <span className="hp2-process-num">Step {s.step}</span>
                <h3 className="hp2-process-card-title">{s.title}</h3>
                <p className="hp2-process-card-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas grid – with images where we have them */}
      <section className="hp2-practice">
        {/* <ShapeDivider color="#f8f8f8" /> */}
        <div className="hp2-container">
          <h2 className="hp2-practice-title">Our Practice Areas</h2>
          <p className="hp2-practice-sub">We protect our clients’ rights across all areas of injury law. Click any area to learn more.</p>
          <div className="hp2-practice-grid">
            <Link to="/practice-areas/auto-accidents" className="hp2-practice-card hp2-practice-card--img">
              <div className="hp2-practice-card-img-wrap">
                <img src={personalInjuryImage} alt="Personal injury and auto accidents" />
              </div>
              <h3 className="hp2-practice-card-title">Auto & Car Accidents</h3>
              <p className="hp2-practice-card-desc">From fender benders to serious collisions, we fight for full compensation for your injuries and losses.</p>
              <span className="hp2-practice-learn">Learn More</span>
            </Link>
            <Link to="/practice-areas/truck-accidents" className="hp2-practice-card">
              <span className="hp2-practice-icon">🚚</span>
              <h3 className="hp2-practice-card-title">Truck Accidents</h3>
              <p className="hp2-practice-card-desc">Commercial truck crashes often cause severe injuries. We hold negligent drivers and companies accountable.</p>
              <span className="hp2-practice-learn">Learn More</span>
            </Link>
            <Link to="/practice-areas" className="hp2-practice-card hp2-practice-card--img">
              <div className="hp2-practice-card-img-wrap">
                <img src={workersBenefitsImage} alt="Construction and workplace accidents" />
              </div>
              <h3 className="hp2-practice-card-title">Construction & Workers</h3>
              <p className="hp2-practice-card-desc">Scaffolding falls, equipment accidents, and workplace injuries—we know these cases inside and out.</p>
              <span className="hp2-practice-learn">Learn More</span>
            </Link>
            <Link to="/practice-areas" className="hp2-practice-card">
              <span className="hp2-practice-icon">⬇️</span>
              <h3 className="hp2-practice-card-title">Slip & Fall</h3>
              <p className="hp2-practice-card-desc">Property owners must keep premises safe. We help you recover when negligence leads to injury.</p>
              <span className="hp2-practice-learn">Learn More</span>
            </Link>
            <Link to="/practice-areas" className="hp2-practice-card">
              <span className="hp2-practice-icon">⚖</span>
              <h3 className="hp2-practice-card-title">Wrongful Death</h3>
              <p className="hp2-practice-card-desc">When someone else’s negligence takes a life, we help families seek justice and financial security.</p>
              <span className="hp2-practice-learn">Learn More</span>
            </Link>
            <Link to="/practice-areas" className="hp2-practice-card">
              <span className="hp2-practice-icon">🩺</span>
              <h3 className="hp2-practice-card-title">Medical Malpractice</h3>
              <p className="hp2-practice-card-desc">Errors in diagnosis, surgery, or treatment can cause lasting harm. We hold medical providers accountable.</p>
              <span className="hp2-practice-learn">Learn More</span>
            </Link>
          </div>
          <Link to="/practice-areas" className="hp2-practice-all">View All Practice Areas</Link>
        </div>
      </section>

      {/* Legal Resources & Blog */}
      <section className="hp2-resources">
        {/* <ShapeDivider color="#233041" /> */}
        <div className="hp2-container">
          <h2 className="hp2-resources-title">Legal Resources & Blog</h2>
          <p className="hp2-resources-sub">Helpful articles and guides to understand your rights and our process.</p>
          <div className="hp2-resources-grid">
            {blogCards.map((b) => (
              <div key={b.title} className="hp2-resources-card">
                <span className="hp2-resources-date">{b.date}</span>
                <h3 className="hp2-resources-card-title">{b.title}</h3>
                <p className="hp2-resources-excerpt">{b.excerpt}</p>
                <Link to={b.to} className="hp2-resources-read">Read More</Link>
              </div>
            ))}
          </div>
          <div className="hp2-resources-footer">
            <Link to="/legal-blog" className="hp2-resources-all">View All Blog Posts</Link>
          </div>
        </div>
      </section>

      {/* FAQs accordion */}
      <section className="hp2-faq">
        <div className="hp2-container">
          <h2 className="hp2-faq-title">FAQs</h2>
          <div className="hp2-faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`hp2-faq-item ${openFaq === i ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="hp2-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <span className="hp2-faq-arrow">▼</span>
                </button>
                {openFaq === i && <div className="hp2-faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
          <div className="hp2-faq-cta-wrap">
            <Link to="/faq" className="hp2-faq-cta">View All FAQs</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage2
