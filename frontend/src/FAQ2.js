import React from 'react'

function FAQ2 ({faq, index, toggleFAQ2}) {
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ2(index)
            }
		>
			<div className="faq2-question">
				{faq.question}
			</div>
			<div className="faq2-answer">
				{faq.answer}
			</div>
		</div>
	)
}

export default FAQ2