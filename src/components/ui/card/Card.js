import React from 'react';
import './card.css';

export default function Card() {
  return (
    <div className='card-container'>
      <img className="card-img" src={require("./food.jpeg")} alt="food" />
      <h2 className="card-title">Japanese</h2>
    </div>
  )
}
