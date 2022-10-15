import React from 'react';
import './card.css';

export default function Card() {

  const handleCardSelect = () => {
    console.log("I have been selected!")
  };
  
  return (
    <div className='card-container' onClick={handleCardSelect}>
      <img className="card-img" src={require("./food.jpeg")} alt="food" />
      <h2 className="card-title">Cuisine</h2>
    </div>
  )
}
