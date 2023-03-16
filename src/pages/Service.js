import React from 'react'
import { ServiceData } from '../ServiceData'

function Service() {
  return (
    <div id="service">
      <h1>Service</h1>
      <h2 className='skill'>What Can I Do For You?</h2>
      <div className="card-wrapper">
      {
        ServiceData.map((item, i) =>
          <div key={i} className='cards'>
            <img src={item.image} alt="card image" />
            <h2>{item.title}</h2>
            <hr width="100px" color="white"></hr>
            <p>{item.detail}</p>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Service
