import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import ShapeDivider from '../../components/ShapeDivider'
import './LegalBlogPage.css'

const practiceAreas = [
  { label: 'Car Accidents', to: '/practice-areas/car-accidents' },
  { label: 'Construction Accidents', to: '/practice-areas' },
  { label: 'Personal Injury', to: '/practice-areas' },
  { label: 'Motorcycle Accidents', to: '/practice-areas/motorcycle-accidents' },
  { label: 'Medical Malpractice', to: '/practice-areas' },
  { label: 'Wrongful Death', to: '/practice-areas' },
  { label: 'Premises Liability', to: '/practice-areas' },
  { label: 'Truck Accidents', to: '/practice-areas/truck-accidents' },
  { label: 'Mass Transit Accidents', to: '/practice-areas/bus-accidents' },
  { label: 'Workers\' Compensation', to: '/practice-areas' },
  { label: 'Nursing Home Neglect', to: '/practice-areas' },
]

const faqLinks = [
  'What is the average settlement for a car accident in NY?',
  'How much is my personal injury case worth?',
  'How long does a personal injury case take?',
  'How long do I have to file a personal injury claim?',
]

const recentPosts = [
  { title: 'What is a Wrongful Death Case in NY?', to: '/legal-blog' },
  { title: 'How is a Wrongful Death Settlement Calculated?', to: '/legal-blog' },
]

const blogPosts = [
  {
    id: 1,
    title: 'The Role of Medical Experts in New York Lawsuits',
    excerpt: 'Medical experts play a critical role in personal injury and medical malpractice cases in New York. Learn how expert testimony can strengthen your case and what to expect during the legal process.',
    date: 'February 2025',
  },
  {
    id: 2,
    title: 'How Prescription Drug Cases Are Filed with the FDA',
    excerpt: 'Understanding the process of filing prescription drug injury cases with the FDA and how it relates to your potential civil claim. Our attorneys explain the steps and your rights.',
    date: 'January 2025',
  },
  {
    id: 3,
    title: 'Navigating the Legal Landscape of Autonomous Vehicle Accidents',
    excerpt: 'As self-driving and assisted-driving technology becomes more common, accident liability questions are evolving. Here is what you need to know if you are injured in an autonomous vehicle incident.',
    date: 'December 2024',
  },
  {
    id: 4,
    title: 'What to Do After a Slip and Fall in New York',
    excerpt: 'Steps to take immediately after a slip and fall accident to protect your health and your right to compensation. Documenting the scene and seeking medical care are essential.',
    date: 'November 2024',
  },
]

const LegalBlogPage = () => {
  return (
    <div className="legal-blog-page">
      <PageBanner
        title="Ahmed Law Firm's Blog"
        subtitle="Insights on personal injury law, your rights, and how we help clients across New York"
      />

      <section className="legal-blog-main">
        <ShapeDivider color="#FFFFFF" />
        <div className="legal-blog-container">
          <aside className="legal-blog-sidebar">
            <div className="legal-blog-sidebar-block">
              <h3 className="legal-blog-sidebar-title">Practice Areas</h3>
              <ul className="legal-blog-sidebar-list">
                {practiceAreas.map((pa) => (
                  <li key={pa.label}>
                    <Link to={pa.to} className="legal-blog-sidebar-link">{pa.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="legal-blog-sidebar-block">
              <h3 className="legal-blog-sidebar-title">FAQ</h3>
              <ul className="legal-blog-sidebar-list">
                {faqLinks.map((q) => (
                  <li key={q}>
                    <Link to="/faq" className="legal-blog-sidebar-link">{q}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="legal-blog-sidebar-block">
              <h3 className="legal-blog-sidebar-title">Recent News</h3>
              <ul className="legal-blog-sidebar-list">
                {recentPosts.map((p) => (
                  <li key={p.title}>
                    <Link to={p.to} className="legal-blog-sidebar-link">{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="legal-blog-content">
            {blogPosts.map((post) => (
              <article key={post.id} className="legal-blog-card">
                <h2 className="legal-blog-card-title">
                  <Link to="/legal-blog" className="legal-blog-card-title-link">{post.title}</Link>
                </h2>
                <p className="legal-blog-card-excerpt">{post.excerpt}</p>
                <span className="legal-blog-card-date">{post.date}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="legal-blog-cta-section">
        <ShapeDivider color="#233041" />
        <div className="legal-blog-cta-container">
          <h2 className="legal-blog-cta-heading">Speak with a Qualified New York Injury Lawyer Today</h2>
          <p className="legal-blog-cta-sub">
            Get a free consultation. Our team is ready to listen and help you understand your options.
          </p>
          <form className="legal-blog-cta-form" onSubmit={(e) => e.preventDefault()}>
            <div className="legal-blog-cta-form-row">
              <input type="text" placeholder="First Name" className="legal-blog-cta-input" required />
              <input type="text" placeholder="Last Name" className="legal-blog-cta-input" required />
            </div>
            <div className="legal-blog-cta-form-row">
              <input type="email" placeholder="Email Address" className="legal-blog-cta-input" required />
              <input type="tel" placeholder="Phone Number" className="legal-blog-cta-input" required />
            </div>
            <textarea placeholder="Message" className="legal-blog-cta-textarea" rows={4} required />
            <button type="submit" className="legal-blog-cta-submit">Submit</button>
          </form>
          <div className="legal-blog-cta-media">
            <a href="/reviews-ratings" className="legal-blog-cta-media-card">
              <span className="legal-blog-cta-media-icon">▶</span>
              <span>Watch</span>
            </a>
            <a href="/reviews-ratings" className="legal-blog-cta-media-card">
              <span className="legal-blog-cta-media-icon">♫</span>
              <span>Listen</span>
            </a>
            <a href="/verdicts-settlements" className="legal-blog-cta-media-card">
              <span className="legal-blog-cta-media-icon">📖</span>
              <span>Read</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LegalBlogPage
