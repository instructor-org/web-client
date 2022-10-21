import './establishment.css';
import Banner from'../../components/ui/banner/Banner';

import React from 'react'

export default function Establishment() {
  return (
    <>
      <Banner />
      <div className="header">
        <h1 className="establishment__name">SushiDon</h1>
        <div className='icon__container'></div>
      </div>
      <div className="review__carousel">
        <div className="review__card"></div>
        <div className="review__card"></div>
        <div className="review__card"></div>
        <div className="review__card"></div>
      </div>
    </>
  )
}
