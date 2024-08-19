import React from 'react'

function Card({type}) {
  
    return (
    <div className='typeCard'>
        <p style={{fontFamily:"Roboto-Regular",textAlign:"center",fontSize:"18px"}}>{type}</p>
    </div>
  )
}

export default Card