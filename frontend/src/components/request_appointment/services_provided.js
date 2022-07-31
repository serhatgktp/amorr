import React, { useState, useEffect} from 'react';
import './services_provided.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faCircle, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, useParams } from 'react-router-dom';

function Services_Provided () { 
	const [items, setItems] = useState([
		{ itemName: 'Hair wash and blow dry', price: 29.00, quantity: 0,},
		{ itemName: 'Men haircut',price: 34.99,  quantity: 0,},
		{ itemName: 'Women haircut', price: 21.99, quantity: 0,},
        { itemName: 'Boys haircut', price: 19.99, quantity: 0,},
        { itemName: 'Girls haircut', price: 21.99, quantity: 0,},
		{ itemName: 'Basic perm', price: 19.99, quantity: 0,},
		{ itemName: 'Digital perm', price: 19.99, quantity: 0,}
	]);
	const [totalItemCount, setTotalItemCount] = useState();

    const [subtotal, setSubtotal] = useState();


	const pathname = window.location.pathname;
	const uid = pathname.split("/");
	console.log(uid[2]);
	const id = uid[2];

	useEffect(() => {
        fetch(`/explore-sp-price-list/${id}`, {credentials: 'include'}).then(response =>
          response.json().then(data => {
            console.log(data);
			setItems(data);
          })
        );
      }, []);

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity++;
		setItems(newItems);
		calculateTotal();
        calculateSubtotal();
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];
		if(newItems[index].quantity<1){
            newItems[index].quantity=0;
        }
        else{
            newItems[index].quantity--;
        }
		setItems(newItems);
		calculateTotal();
        calculateSubtotal();
	};


	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);
		setTotalItemCount(totalItemCount);
	};

    const calculateSubtotal = () => {
		const subtotal= items.reduce((subtotal, item) => {
			return subtotal + item.quantity * item.price;
		}, 0);
		setSubtotal(subtotal);
	};

	return (
        <div className = "services-provided">
		<div className='app-background'>
			<div className='main-container'>
				
				<div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name'>
										<FontAwesomeIcon icon={faCircle} />
										<span><b>{item.itemName}</b> - ${parseFloat(item.price).toFixed(2)}</span>
								
							</div>
							<div className='quantity'>
								<button>
									<FontAwesomeIcon icon={faMinusCircle} onClick={() => handleQuantityDecrease(index)} />
								</button>
								<span> {item.quantity} </span>
								<button>
									<FontAwesomeIcon icon={faPlusCircle} onClick={() => handleQuantityIncrease(index)} />
								</button>
							</div>
						</div>
					))}
				</div>
				<div className='total'>Number of services: {totalItemCount}</div>
                
                </div>
                
		</div>
        <div>
        <div className='subtotal'> <b>Subtotal: ${parseFloat(subtotal).toFixed(2)}</b></div>
        <div className='payment'> <button className='paymentButton'> <b>Checkout and Pay</b> <FontAwesomeIcon className='checkout_arrowicon'icon={faArrowRight}/></button></div>
        </div>
        </div>
	);
};

export default Services_Provided;