import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="navbar">
      <a href="#">
        <h1>P<span className="logo">IZ.</span></h1>
      </a>
      <ul className="list" style={open !== false ? {height: '100vh', left: 0} : {left: '-100%', overflow: 'hidden'}}>
        <li><a href="#home" >Home</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#resume" >Resume</a></li>
        <li><a href="#portfolio" >Portfolio</a></li>
        <li><a href="#service" >Service</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>
      <img onClick={() => setOpen(!open)} src={open !== false ? "./img/icons8-delete-30.png" : "./img/hamburger.png"} alt="open menu" className="hamper" />
    </div>
  )
}

export default Navbar
