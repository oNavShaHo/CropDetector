


import React from 'react';

const HealthComponent = (props) => {

  console.log("hahap",props);
  let healthData=props.healthData;
  if (!healthData) {
    return <div>Error: Data not found.</div>;
  }
  
  return (
   
    <div className="border-red-200 border w-[80vw] p-10 flex justify-between bg-green-100 text-green-800">
      <div>
      <h1>Disease:<span className='font-bold'>{healthData.result.name}</span></h1>
      <p className='font-semibold'>Cure</p>
      <ul className='list-inside list-disc'>
      {
        healthData.result.preventionSteps.map((e)=>(
          <li>{e}</li>
        ))
      }
      </ul>
    </div>
    <div>
    {/* <img src={props.img} alt={props.img.name} /> */}
    </div>
    </div>
   );
};

export default HealthComponent;
