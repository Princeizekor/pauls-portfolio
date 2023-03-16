import React from 'react'

function About() {
  const resume = './cv/IZEKOR PAUL CV.docx'
  const img = './img/gegxy2.jpg'
  const about = `I'm a FRONTEND Developer who loves to make
  things look perfect. I create good and perfect Websites that are responsive
  on all screensizes (small, big and Extra large screen sizes) and that are
  scalable. Coding is a thing i love to do.`
  const profile = `I'm a student of Ambrose Alli University Ekpoma, I've very high intelligence
  on TAILWINDCSS, HTML5, CSS3, JQUERY, VANILLA JAVASCRIPT, TYPESCRIPT, NEXT JS, NODEJS, RESTFUL APIS,
  GITHUB, GITHUB ACTIONS and more.`
  return (
    <div id='about'>
      <h1>About Me</h1>
      <div className='about-box'>
        <img src={img} alt="my profile image" className='profile-image' />
        <div className='profile-details'>
          <p class="about-intro-text">{about}</p>
          <p className='profile-intro-text'>{profile}</p>
          <div class="profile-buttons">
            <button class="hire-button">
              <a href="#contact">HIRE ME</a>
            </button>
            <button class="cv-button">
              <a href={resume}>DOWNLOAD CV</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
