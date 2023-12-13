import React from 'react'

function Fotmid() {
  return (
    <div className='grid justify-center  gap-10  md:grid-cols-3 '>
       <div className=' flex flex-col gap-10'>

         <div className='text-2xl'>Quick Info</div>
          
         <ul className='flex flex-col gap-3'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Team</li>
         </ul>

       </div>
       <div className=' flex flex-col gap-10'>

       <div className='text-2xl'>Products</div>
          
          <ul className='flex flex-col gap-3'>
           <li>CBC ANALYZER</li>
           <li>Anemia Detection</li>
          
          </ul>

       </div>
       <div className=' flex flex-col gap-10'>

       <div className='text-2xl'>Contact Us</div>
          
          <ul className='flex flex-col gap-3'>
          <li>navdeepshahof@gmail.com</li>
           <li>Phone: xxxxxxxxxxx</li>
          
          </ul>

       </div>
    </div>
  )
}

export default Fotmid