import React from 'react'

import Img1 from '../assets/Img1.jpg'
import Img2 from '../assets/Img2.jpg'
import Img3 from '../assets/Img3.jpg'
import Img4 from '../assets/Img4.jpg'
import Img5 from '../assets/Img5.jpg'
import Img6 from '../assets/Img6.jpg'
import Img7 from '../assets/Img7.jpg'
import Img8 from '../assets/Img8.jpg'
import Img9 from '../assets/Img9.jpg'
import Img10 from '../assets/Img10.jpg'
import Img11 from '../assets/Img11.jpg'
import Img12 from '../assets/Img12.jpg'

import './gallery.css'
const gallery = () => {

    let data= [
        {
            id:1,
            imgSrc: Img1,
        },
        {
            id:2,
            imgSrc: Img2,
        },
        {
            id:3,
            imgSrc: Img3 ,
        },
        {
            id:4,
            imgSrc: Img4 ,
        },
        {
            id:5,
            imgSrc: Img5 ,
        },
        {
            id:6,
            imgSrc: Img6 ,
        },
        {
            id:7,
            imgSrc: Img7 ,
        },
        {
            id:8,
            imgSrc: Img8 ,
        },
        {
            id:9,
            imgSrc: Img9 ,
        },
        {
            id:10,
            imgSrc: Img10 ,
        },
        {
            id:11,
            imgSrc: Img11,
        },
        {
            id:12,
            imgSrc: Img12,
        },


    ]
  return (

    <div className='gallery'>
        {data.map ((item, index)=>{
            return(
                <div className='pics' key={index}>
                    <img src={item.imgSrc} style={{ width:'100%' }} /> 
                </div>
            )
        })}
    </div>
  )
}

export default gallery