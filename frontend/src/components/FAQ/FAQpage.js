import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';
import FAQ2 from './FAQ2';
import './index.css'

function FAQpage () {
  const [faqs, setfaqs] = useState([
    {
      question: 'What is Amorr?',
      answer: 'Amorr is a platform where you can order many mobile services from beauty household tasks. Our verified service provider will come to your address and fulfill your needs!',
      open: false
    },
    {
      question: 'How do I pay my service provider?',
      answer: 'Your payment will be automatically charged to the credit or debit card you have provided.',
      open: false
    },
    {
      question: 'How far in advance can I book my appointment?',
      answer: 'You can book your appointment up to 14 days in advance.',
      open: false
    },
    {
      question: 'Who do i reach out to for questions',
      answer: 'You can contact us in the Contact Us page or you can call us!',
      open: false
    }
  ]);

  const [faqs2, setfaqs2] = useState([
    {
      question: 'Can I cancel my appointment?',
      answer: 'You can only cancel 24 hours before the scheduled appointment date without a fee.',
      open: false
    },
    {
      question: 'Can I leave notes for the service provider?',
      answer: 'You. You can do it in the application after payment',
      open: false
    },
    {
      question: 'How does tipping work?',
      answer: '100% of all tips are always passed through automatically to the delivery driver. Tips can be added via the Uber Direct Dashboard once dropoff is complete.',
      open: false
    },
    {
      question: 'How far can I order a service? Is there a mileage limit?',
      answer: 'Mileage limits are set at the market-level to optimize the experience for your customers and service providers.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } 

      return faq;
    }))
  }

  const toggleFAQ2 = index => {
    setfaqs2(faqs2.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } 

      return faq;
    }))
  }


  return (
    <div className="App">
      <Header />

      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <div className="faqs2">
        {faqs2.map((faq, i) => (
          <FAQ2 faq={faq} index={i} toggleFAQ2={toggleFAQ2} />
        ))}
      </div>
    </div>
  );
}

export default FAQpage;