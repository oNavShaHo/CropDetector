import React from 'react'
import Fotmid from './fotmid'
import logo from '../assests/logo.png'
import '../App.css'
import Social from './social'
function footer() {
  return (
    <div className='flex flex-col gap-6 justify-center items-center h-fit'>
    <div className='flex  flex-col gap-[8rem] '>
    <div className='grid  gap-10 md:grid-cols-3'>
      <div className=' flex  justify-center '>
        <img src={logo} className='h-10 hidden md:block' alt='logo'/>
        </div>
         <Fotmid/>
        <div className='flex justify-center '>
         <Social/>
         </div>
        
    </div>

     <div className='grid grid-cols-6 bg-slate-900 col-start-2 col-end-4  h-1'></div>

      
    </div>
    <div >@2023 | All right reserved</div>
    </div>
  )
}

export default footer