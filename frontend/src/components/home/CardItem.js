import React from 'react'
import './CardItem.css'

function CardItem(props) {
  return (
    <div className="card-container">
        <img src={props.img} alt=''/>
        <h3>{props.title}</h3>
    </div>
  )
}

export default CardItem