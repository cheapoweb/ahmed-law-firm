import { useState } from 'react'
import './FAQSection.css'

const faqs = [
  { question: 'What types of personal injury cases do you handle?', answer: 'We handle a wide range of personal injury cases including auto accidents, medical malpractice, nursing home abuse, construction accidents, slip and fall incidents, wrongful death, and more. Our attorneys have over 40 years of combined experience across multiple practice areas.' },
  { question: 'How long do I have to file a personal injury claim?', answer: "In most states, the statute of limitations for personal injury cases is typically two to three years from the date of the accident. However, deadlines can vary by state and case type. It's crucial to consult with an attorney as soon as possible to protect your rights." },
  { question: 'How long does a personal injury case typically take?', answer: 'The timeline varies depending on the complexity of your case, the severity of your injuries, and whether the case settles or goes to trial. Some cases settle within months, while others may take a year or longer. We work efficiently to maximize your compensation while ensuring you receive the best possible outcome.' },
  { question: 'Do I need to come to your office for a consultation?', answer: 'While we welcome you to visit our offices, we understand you may be unable to travel due to your injuries. We offer free phone consultations and can visit you at your home or hospital if necessary. Contact us 24/7 to discuss your case.' },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index)

  return (
    <section className="hp3-faq-section">
      <div className="hp3-faq-container">
        <p className="hp3-faq-label">FREQUENTLY ASKED QUESTIONS</p>
        <h2 className="hp3-faq-heading">
          Your Legal Questions <em>Answered</em>
        </h2>

        <div className="hp3-faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`hp3-faq-item ${openIndex === index ? 'hp3-faq-item--open' : ''}`}>
              <button
                type="button"
                className="hp3-faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className={`hp3-faq-icon ${openIndex === index ? 'hp3-faq-icon--open' : ''}`} aria-hidden>▼</span>
              </button>
              {openIndex === index && (
                <>
                  <div className="hp3-faq-separator" />
                  <div className="hp3-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
