import React from 'react'
import { useState } from 'react'
import Navbar from './navbar';
import axios from 'axios';
import Ans from './Ans';


export default function Form() {
  const [dd,setDD]=useState();
  console.log(setDD);
  const [selectedImage, setSelectedImage] = useState(null);

   
   function fetchh()
  {
      
    axios.post('http://localhost:3000/img', {
       'im':selectedImage,
      
    })
    .then(function (response) {
      console.log("response:",response);
    //   setDD(response.data);
     })
    .catch(function (error) {
      console.log(error);
    });
     
  
  }

var file=null;
  const handleImageChange = (e) => {
     file = e.target.files[0];
    if (file) {
      // You can perform additional validation here if needed
      setSelectedImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the image submission logic here, for example, sending it to a server or processing it.
    if (selectedImage) {
      console.log('Selected Image:', selectedImage);
        
        fetchh();
      

    } else {
      console.log('No image selected');
    }
  };
  
  
    
  

  return (
    <div  className=''>
       <Navbar/>
     <div className='flex flex-col gap-10 justify-center items-center border  border-red-300 border-r-4 p-10 '>
      <h1 className='font-bold text-4xl text-[#023F3A]'>Crop Health Detector</h1>
           {!dd?(<form className='border gap-10 flex flex-col justify-center item-center  p-10' onSubmit={handleSubmit}>
      <div className='flex  justify-center item-center '>
        <label htmlFor="imageInput">Choose: :</label>
        <input
          type="file"
          id="imageInput"
          accept="image/*" // Specify that only image files are allowed
          onChange={handleImageChange}
        />
      </div>
      <button className='bg-[#023F3A]  text-white' type="submit">Submit</button>
    </form>):(
      <Ans dataa={dd} img={file}/>
    )}
     
     </div>
 
    </div>
  )
}
