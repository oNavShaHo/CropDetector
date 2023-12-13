import React from 'react'
//import img2 from '../images/logo.svg'

import na from '../assests/nav.jpg'

function Team() {
  return (
    <div id='d3' className='screen3 text-center pt-4'>
         <h1 >Meet Us</h1>
         <div className='justify-center flex ]'>
         <div className='flex w-[100%] justify-center pb-[100px] gap-6 '>
            <div className='yo w-[25%] justify-center flex flex-col gap-[15px] contactbox'>
                <p>Hello, I am a MERN STACK DEVELOPER </p>
                <img src={na} alt='yo' className='h-[140px] w-[100px] self-center  '/>
                <h2>Navdeep Shah</h2>
            </div>
            
         
         </div>
         </div>
    </div>
  )
}

export default Team