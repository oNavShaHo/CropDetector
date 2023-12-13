import React from 'react'

function P2(prop) {
  return (
    <div className='flex w-fit gap-10 font-semibold justify-between 
     h-5 md:h-10 items-center p-3'>
      <img src={prop.img}  alt='q'/>
      <h3 >{prop.text}</h3>
    </div>
  )
  }

export default P2;
