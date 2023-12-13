import React from 'react'
import p1 from '../assests/Image.svg'
import p12 from '../assests/image 75.svg'
import p13 from '../assests/image 76.svg'
import P2 from './p2'
import I1 from '../assests/Frame 81.svg'
function Page2() {
  return (
    <div id="d2" className='grid grid-cols-2'>
      <div className='p-5 flex flex-col gap-10'>
        <h1 className='text-4xl md:text-6xl text-[#023F3A] font-bold'>Mission we are working on</h1>
        <p>At CropGuard, our mission is rooted in revolutionizing agriculture through cutting-edge technology. We are dedicated to empowering farmers and ensuring global food security by harnessing the power of artificial intelligence. Our website serves as a pivotal platform, offering a sophisticated crop disease detection system that leverages image input. We envision a future where farmers can swiftly and accurately identify potential threats to their crops, enabling them to take proactive measures and safeguard their harvests. Through continuous innovation and a commitment to excellence, we strive to be at the forefront of agricultural technology, contributing to a sustainable and resilient farming ecosystem.</p>
        <p>We believe in the transformative potential of technology to address real-world challenges, and our focus is on mitigating crop diseases through accessible and intelligent solutions. At CropGuard, our website acts as a catalyst for positive change in the agricultural landscape. By harnessing the capabilities of image recognition, we provide farmers with a user-friendly tool to diagnose and manage crop diseases swiftly and accurately. Our mission is not just to detect issues but to empower farmers with actionable insights, fostering a future where agriculture is more sustainable, efficient, and resilient. Together, we are cultivating innovation for a healthier, more secure global food supply. </p>
         
         <div className='xl:mt-[20vh]'></div>

        <div className='grid grid-cols-2 gap-y-10'>
             <P2 img={I1} text="Analyze"/>
             <P2 img={I1} text="Detect"/>
             <P2 img={I1} text="Prevent"/>
             <P2 img={I1} text="Cure"/>
        </div>
      </div>
      <div className='p-5   items-center'>
        <div>
          <img src={p1} className='gap-3 w-full' alt='yo'/>
        </div>
        <div className=' mt-4 flex justify-between'>
          <img src={p12} className=' w-5/12' alt='p12'/>
          <img src={p13} className='w-5/12' alt='p13'/>          
        </div>
      </div>
    </div>
  )
}

export default Page2