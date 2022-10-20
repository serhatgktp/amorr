import React from 'react';
import './CardItem.css';

function CardItem(props) {

  return (
    <div className="card-container">
        <a class='cardLink' href={props.redirection}>
          <img class="imgCardItem" src={props.img} alt=''/>
          <h3 class="hdgCardItem">{props.title}</h3> 
        </a>
    </div>
  )
}

export default CardItem