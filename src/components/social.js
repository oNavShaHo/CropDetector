import React from 'react'
import  face from '../assests/bxl-facebook.svg'
import twitter from '../assests/bxl-twitter.svg'
import instagram from '../assests/instagram-logo.svg'
import youtube from '../assests/youtube-logo.svg'

function Social() {
  return (
    <div className='flex flex-col gap-6' >
      <p className='text-2xl'>Social</p>
      <div className='flex gap-10'>
        <img  src={face} alt='facebook'/>
        <img src={twitter} alt='twitter' />
        <img  src={instagram} alt='insta'/>
        <img src={youtube} alt='you'/>
      </div>
    </div>
  )
}

export default Social