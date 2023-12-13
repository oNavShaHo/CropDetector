


import React from 'react';

const HealthComponent = ({ healthData }) => {
  if (!healthData) {
    return <div>Error: Data not found.</div>;
  }

  return (
    <div className="health-component">
      {Object.keys(healthData).map((key) => {
        const data = healthData[key];
        return (
          <div key={key}>
            <h2 className='component-heading'>{key}</h2>
            <p className="description">{data.description}</p>
            <p className="result" >Result: {data.result}</p>
            {data.effects && (
              <div className="effects">
                <h3 className="sub-heading">Effects:</h3>
                <p>{data.effects}</p>
              </div>
            )}
            {data.causes && (
              <div className="causes">
                <h3 className="sub-heading">Causes:</h3>
                <ul className="list">
                  {data.causes.map((cause, index) => (
                    <li key={index}>{cause}</li>
                  ))}
                </ul>
              </div>
            )}
            {data.preventions && (
              <div className="preventions">
                <h3 className="sub-heading">Preventions:</h3>
                <ul className="list">
                  {data.preventions.map((prevention, index) => (
                    <li key={index}>{prevention}</li>
                  ))}
                </ul>
              </div>
            )}
            <hr className='mt-5 border-black'/>
          </div>
          
        );
      })}
    </div>
  );
};

export default HealthComponent;
