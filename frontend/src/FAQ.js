import React from 'react'

function FAQ ({faq, index, toggleFAQ}) {
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)
            }
		>  
			<div className="faq-question">
				<span className="q">Q: </span> {faq.question}
			</div>
			<div className="faq-answer">
				<br/>
			<span className="a">A: </span>{faq.answer}
			</div>
		</div>
	)
}

export default FAQ