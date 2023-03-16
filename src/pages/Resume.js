import React from 'react'
import { Resumedata } from '../ResumeData'

function Resume() {
  return (
    <div id='resume'>
      <h1>Resume</h1>
      <h2 className="credentals">My Credentals</h2>
      {
        Resumedata?.map((item, i) =>
          <div key={i} className='edu'>
            <p className='education'>School: <span className='edu-span'>{item.school}</span></p>
            <p className='education'>Degree: <span className='edu-span'>{item.degree}</span></p>
            <p className='education'>Year: <span className='edu-span'>{item.year}</span></p>
            {item.button}
          </div>
        )
      }
    </div>
  )
}

export default Resume
