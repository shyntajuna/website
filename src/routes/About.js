import React from 'react'
import Navbar from '../components/Navbar'
import { DouxImg2 } from '../components/DouxImg2'
import Footer from '../components/Footer'
import AboutDoux from '../components/AboutDoux'

function About() {
  return (
    <div> 
    <Navbar/> 
    <DouxImg2 heading="About" text="Know more about Doux Cravings" /> 
    <AboutDoux />
    <Footer /> 
    </div>
  )
}

export default About