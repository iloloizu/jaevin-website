import React from 'react'

export default function HomePage({isSlid, slideNavBar}) {
  return (
    <div>
        <div  className="darkmode-btn" onClick={slideNavBar} style={isSlid ? ({marginLeft: '-230px'}): ({marginLeft: '10px'})}>
            <br/><div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
        
        <h1 className='center'> Journey With Jaevin</h1>
        
    </div>
  )
}
