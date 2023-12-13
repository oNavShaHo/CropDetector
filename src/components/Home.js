import React from 'react'
import '../App.css'
import h1 from '../assests/Image (2).svg'
import { BrowserRouter as Router,  Link } from 'react-router-dom';
function Home() {
  console.log(Router)
  return (
    <div className=' mt-10 md:mt-[8rem] 
    lg:mt-[10rem] '>
      <div className='flex flex-col items-center gap-4 md:gap-8 lg:gap-12 xl:gap-14'>
      <h1 className='text-1xl 
      md:text-3xl lg:text-5xl  text-white font-bold'>
     "Securing Your Harvest, One Scan at a Time"</h1>
      <p className='text-white text-sm md:text-lg'>Let's Check Your Report</p>
       
       <button className='bg-[#023F3A] md:mt-5 text-[10px] md:tex mg:text-md lg:text-xl  px-6 py-1 border-[1px]  bttn'><Link to="/detect">Get Started</Link></button>

       <img className='mt-6 w-[40vw]'  src={h1} alt='svg'/>
    </div>
    </div>
  )
}

export default Home