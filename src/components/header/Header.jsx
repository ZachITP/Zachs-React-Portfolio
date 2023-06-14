import React from 'react'
import './header.css'
import CTA from './CTA'
//import Zach from '../../assets/Zach'
const Header = () => {
  return (
    <header>
       <div className= "container header_container">
            <h5>Hello I'ts working</h5>
            <h1>Zach Hanson</h1>
            <h5 className="text-light">Full Stack Web Developer</h5>
            
            <CTA />



        <a href="#contact" className="scroll_down">Scroll Down</a>" 
        </div> 
    </header>
  )
}
export default Header