import React from 'react'
import "./card.css"
const Card = () => {
  return (
 
    <div id="container">
      <div id="card">
        <div id="icon">
          <img src="/assets/icons/covid-defult.svg" alt=""/>
        </div>
        <div id="info">
          <h5>Total Cases</h5>
          <h3>86503057</h3>
        </div>
      </div>
    </div>
  )
}

export default Card
