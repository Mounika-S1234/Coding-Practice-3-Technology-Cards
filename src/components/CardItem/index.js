// Write your code here.
import React from 'react'
import './index.css'

const CardItem = ({card}) => {
  const {title, description, imgUrl, className} = card
  return (
    <li className={`card-item ${className}`}>
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
      </div>
      <img src={imgUrl} alt={title} className="card-image" />
    </li>
  )
}

export default CardItem
