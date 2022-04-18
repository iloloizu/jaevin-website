import React from 'react'



export default function HomePage({isSlid, slideNavBar, img1, img2, img3}) {
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
