import React from 'react'

import HealthComponent from './HealthComponent';
function Ans(dataa) {
     console.log("yoyo",dataa.dataa,dataa.img);
    const data=dataa.dataa;
   // console.log(d1);

  return (
    <div>
       
       <HealthComponent  healthData={data} img={dataa.img}/>
    </div>
  )
}

export default Ans