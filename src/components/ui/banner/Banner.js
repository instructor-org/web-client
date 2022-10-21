import './banner.css';
import img from './sushi_restaurant.jpeg'
import React from 'react'

export default function Banner() {
  return (
    <>
      <img className='banner' src={ img } alt="" />
    </>
  )
}
