import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { DouxImg2 } from '../components/DouxImg2'
import Gallery from '../components/Gallery'
import { Doux } from '../components/Doux'

function Project() {
  return (
    <div>
        <Navbar /> 
        <DouxImg2 heading="Gallery" text="Photos of cakes and cookies"/>
        <Doux> </Doux>
        <br>
        </br>
        <br /> 
        <br /> 
        <Gallery />
        <br />
        <br /> 
        <Footer/>
    </div>
  )
}

export default Project