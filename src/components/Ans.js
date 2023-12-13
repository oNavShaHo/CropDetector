import React from 'react'

import HealthComponent from './HealthComponent';
function Ans(dataa) {
     console.log(dataa.dataa);
    const data=dataa.dataa;
   // console.log(d1);

  return (
    <div>
       
       <HealthComponent  healthData={data}/>
    </div>
  )
}

export default Ans