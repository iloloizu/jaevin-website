import React from 'react'
import img1 from "../images/1.png"
import img2 from "../images/2.png"
import img3 from "../images/3.png"

export default function HomePage({isSlid, slideNavBar}) {

  return (
    <div className='header'>
        <h1 className='center'> Journey With Jaevin</h1>
        <div>
            <h3 className='center'> Let's go on an adventure!</h3>
        </div>
        <div className='cards'>
            <img src={img1} alt="jaevin reed"/>
            <img src={img2} alt="jaevin reed"/>
            <img src={img3} alt="jaevin reed"/>
        </div>
    </div>
  )
}
