import { useState } from 'react'
import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import ShapeDivider from '../../components/ShapeDivider'
import './FAQPage.css'

const faqs = [
  { question: 'What is the average settlement for a car accident in NY?', answer: 'Settlement amounts vary widely based on the severity of injuries, medical costs, lost wages, and other factors. Our attorneys can evaluate your case and give you an idea of what similar cases have recovered. We work to maximize your compensation.' },
  { question: 'How much is my personal injury case worth?', answer: 'Case value depends on your injuries, medical treatment, impact on your life, and the liable party\'s insurance or assets. We work on a contingency fee basis—you don\'t pay unless we win. Contact us for a free case evaluation.' },
  { question: 'How long does a personal injury case take?', answer: 'Some cases settle in months; others take a year or more, especially if they go to trial. We work efficiently while making sure we don\'t settle for less than you deserve. We keep you updated at every step.' },
  { question: 'How long do I have to file a personal injury claim?', answer: 'In New York, you generally have three years from the date of injury to file a personal injury lawsuit. Some claims have shorter deadlines. It\'s important to speak with an attorney as soon as possible so you don\'t miss a deadline.' },
  { question: 'How much does it cost to hire Ahmed Law Firm?', answer: "We work on a contingency fee basis, which means you don't pay unless we win your case. There are no upfront costs or fees. Our attorneys' fees are a percentage of the compensation we recover for you." },
  { question: 'What types of personal injury cases do you handle?', answer: 'We handle auto accidents, medical malpractice, construction accidents, slip and fall, wrongful death, truck accidents, and more. Our attorneys have decades of experience across multiple practice areas.' },
  { question: 'Do I need to come to your office for a consultation?', answer: 'We offer free phone consultations and can meet you at home or in the hospital if you can\'t travel. Contact us 24/7 to discuss your case.' },
]

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <div className="faq-page">
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about personal injury claims and your legal rights in New York"
      />

      <section className="faq-page-section">
        <ShapeDivider color="#F8F8F8" />
        <div className="faq-page-container">
          <p className="faq-page-intro">
            Get answers to common questions about personal injury claims in New York. If you don't see your question below, contact us for a free consultation.
          </p>
          <div className="faq-page-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-page-item ${openIndex === index ? 'open' : ''}`}>
                <button className="faq-page-question" onClick={() => toggle(index)}>
                  <span>{faq.question}</span>
                  <span className={`faq-page-icon ${openIndex === index ? 'open' : ''}`}>▼</span>
                </button>
                {openIndex === index && (
                  <>
                    <div className="faq-page-separator" />
                    <div className="faq-page-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="faq-page-footer">
            <p className="faq-page-footer-text">Have more questions? We're here to help.</p>
            <div className="faq-page-buttons">
              <button className="faq-page-cta-primary">Schedule Free Consultation</button>
              <a href="tel:7188489595" className="faq-page-cta-secondary">Call (718) 848-9595</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FAQPage
