import React from 'react'
import Navbar from '../components/Navbar'
import { DouxImg2 } from '../components/DouxImg2'
import Footer from '../components/Footer'
import Form  from '../components/Form'
function Contact() {
  return (
    <div>         <Navbar/> 
    <DouxImg2 heading="Contact" text="Talk to us"/>
    <Form /> 
     </div>
  )
}

export default Contact