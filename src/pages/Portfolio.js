import React, { useState } from 'react'
import { PortfolioData } from '../PortfolioData'

function Portfolio() {
  return (
    <div id='portfolio'>
      <h1>Portfolio</h1>
      <h2 className='work'>Check out some of my work</h2>
      {
        PortfolioData.map((item, i) =>
          <div key={i} className='jobs'>
            <div class="job-img-wrapper">
              <img class="job-image" src={item.img} alt="website image" />
            </div>
            <div class="job-text">
              <h2 className="page-name">{item.name}</h2>
              <h2 class="page-tools">{item.skill}</h2>
              <p class="page-detail">{item.detail}</p>
              <button class="hire-button">
                <a href={item.link} target='_blank'>VIEW PAGE</a>
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Portfolio
