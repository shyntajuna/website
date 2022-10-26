import { render } from '@testing-library/react'
import React, { Component } from 'react'
import "./DouxImg2Styles.css"


export  class DouxImg2 extends Component  {
    render() {
        return (
            <div className='doux-img'>
            <div className='heading'>
                <h1> {this.props.heading}</h1>
                <p> {this.props.text}</p>
            </div>
            </div>
          )
    }


}
