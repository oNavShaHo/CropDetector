import React from 'react'
import logo from '../assests/logo.png'
import '../App.css'
import { BrowserRouter as Router,  Link } from 'react-router-dom';
function navbar() {
  console.log(Router)
  return (
    <div className='flex justify-around  items-center h-[4rem]'>
      <img className='h-[3rem]' src={logo} alt='logo'/>
      <nav>
        <ul className="flex flex-row gap-4  md:gap-8 lg:gap-10 justify-center items-center font-semibold ">
        <a href='#d1'><li className='hidden sm:block'>Home</li></a>
         <a href='#d2'> <li className=' hidden sm:block'>About us</li></a>
          <a href='#d3'><li className='hidden sm:block'>Team</li></a>
          <a href='#d4'><li className='hidden sm:block'>Contact us</li></a>
          <p className='sm:hidden'>
            
            <select name="cars" id="cars">
            <option value="home">Home</option>
            <option value="about-us">About us</option>
            <option value="team">Team</option>
            <option value="contact-us">Contact us</option>
</select>


</p>
          <li><button className='text-white bg-red-700 px-4 border-spacing-2 border-r-red-300 py-1'><Link to="/detect">Start</Link></button></li>
        </ul>
      </nav>
       
      

    </div>
  )
}

export default navbar