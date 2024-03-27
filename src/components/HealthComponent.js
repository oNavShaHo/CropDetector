


import React from 'react';

const HealthComponent = (props) => {

  console.log("hahap",props);
  let healthData=props.healthData;
  if (!healthData) {
    return <div>Error: Data not found.</div>;
  }
  var c=healthData.img;
  console.log(c);
  
  return (
   
    <div className="border-red-200 border w-[80vw] p-10 flex justify-between bg-green-100 text-green-800">
      <div>
      <h1>Disease:<span className='font-bold'>{healthData.name}</span></h1>
      <p className='font-semibold'>Cure</p>
      <ul className='list-inside list-disc'>
      {
        healthData.preventionSteps.map((e)=>(
          <li>{e}</li>
        ))
      }
      </ul>
    </div>
    <div>
    {/* <img src="
    
    https://drive.google.com/uc?id=1Ecl9Fd-Z3e9MIlvY2QIfHiEuy9BKT5Tk
   " alt={props.img.name} /> */}
    </div>
    </div>
   );
};

export default HealthComponent;
