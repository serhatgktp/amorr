import React from 'react';
import './CardItem.css';

function CardItem(props) {

  return (
    <div className="card-container">
        <a class='card' href={props.redirection}>
          <img src={props.img} alt=''/>
          <h3>{props.title}</h3> 
        </a>
    </div>
  )
}

export default CardItem