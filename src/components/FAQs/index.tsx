import React from 'react'

import faqsData from '@/data/faqsData'

import { type FAQsProps } from './types'

import './style.css'

const FAQs: React.FC<FAQsProps> = (props: FAQsProps): JSX.Element => {
  const { className } = props

  return (
    <div className={className}>
      <div className="blue-neon-mist faq-mist-1"></div>
      <h2 className="faqs-heading">
        <span>FAQ</span>s
      </h2>
      <p className="faqs-des">
        We are here to help you with any question you have
      </p>
      <div className="questions-list">
        {faqsData.map((faq, index) => (
          <details className="question" key={index} open={false}>
            <summary className="question-head">{faq.question}</summary>
            <div className="question-des">
              <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}

export default FAQs
