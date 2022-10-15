import React from 'react';
import './card.css';

export default function Card(props) {
  const { data } = props;

  const handleCardSelect = () => {
    console.log("I have been selected!")
  };
  
  return (
    <div className='card-container' onClick={handleCardSelect}>
      <img className="card-img" src={require(`${data.img_ref}`)} alt="food" />
      <h2 className="card-title">{ data.cuisine_name }</h2>
    </div>
  )
}
