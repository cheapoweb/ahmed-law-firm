import { useState } from 'react'
import ShapeDivider from '../../../../components/ShapeDivider'
import './FAQSection.css'

const faqs = [
  { question: 'How much does it cost to hire Ahmed Law Firm?', answer: "We work on a contingency fee basis, which means you don't pay unless we win your case. There are no upfront costs or fees. Our attorneys' fees are a percentage of the compensation we recover for you." },
  { question: 'What types of personal injury cases do you handle?', answer: 'We handle a wide range of personal injury cases including auto accidents, medical malpractice, nursing home abuse, construction accidents, slip and fall incidents, wrongful death, and more. Our attorneys have over 40 years of combined experience across multiple practice areas.' },
  { question: 'How long do I have to file a personal injury claim?', answer: "In most states, the statute of limitations for personal injury cases is typically two to three years from the date of the accident. However, deadlines can vary by state and case type. It's crucial to consult with an attorney as soon as possible to protect your rights." },
  { question: 'How long does a personal injury case typically take?', answer: 'The timeline varies depending on the complexity of your case, the severity of your injuries, and whether the case settles or goes to trial. Some cases settle within months, while others may take a year or longer. We work efficiently to maximize your compensation while ensuring you receive the best possible outcome.' },
  { question: 'Do I need to come to your office for a consultation?', answer: 'While we welcome you to visit our offices, we understand you may be unable to travel due to your injuries. We offer free phone consultations and can visit you at your home or hospital if necessary. Contact us 24/7 to discuss your case.' },
]

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section className="faq-section">
      <ShapeDivider color="#233041" />
      <div className="faq-container">
        <div className="faq-label">FREQUENTLY ASKED QUESTIONS</div>
        <h2 className="faq-heading">
          Your Legal Questions <span className="faq-heading-accent">Answered</span>
        </h2>
        <p className="faq-subheading">
          Get answers to common questions about personal injury claims in New York
        </p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{faq.question}</span>
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>▼</span>
              </button>
              {openIndex === index && (
                <>
                  <div className="faq-separator"></div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        
        <div className="faq-footer">
          <p className="faq-footer-text">Have more questions? We're here to help.</p>
          <div className="faq-buttons">
            <button className="faq-cta-primary">SCHEDULE FREE CONSULTATION</button>
            <button className="faq-cta-secondary">CALL (718) 848-9595</button>
          </div>
        </div>
      </div>
    </section>
  )
}
