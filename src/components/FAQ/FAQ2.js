import React from 'react'

function FAQ2 ({faq, index, toggleFAQ2}) {
	return (
		<div className='faq_wrapper'>
			<div
				className={"faq " + (faq.open ? 'open' : '')}
				key={index}
				onClick={() => toggleFAQ2(index)
				}
			>
				<div className="faq2-question">
				<span className="q">Q: </span>{faq.question}
				</div>
				<div className="faq2-answer">
					<br/>
				<span className="a">A: </span>{faq.answer}
				</div>
			</div>
		</div>
	)
}

export default FAQ2