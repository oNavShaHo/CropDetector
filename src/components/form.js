import React, { useState } from "react";
import { BrowserRouter as Router,  Link } from 'react-router-dom';
import axios from "axios";
import logo from "../assests/logo.png";
import Ans from "./Ans";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import data from "../data/data.json";
export default function Form() {
  const [dd, setDD] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchh = () => {
    const formData = new FormData();
    formData.append("file", selectedImage);

    axios
      .post("https://farmora.onrender.com/predict", formData)
      .then(function (response) {
        console.log("response:", response);
        setDD(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleImageChange = (e) => {
    console.log(e);
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedImage) {
      fetchh();
    } else {
      console.log("No image selected");
    }
  };

  return (
    <div className="">
      <div className="flex justify-between ml-2 mr-2 items-center h-[4rem]">
        <img className="h-[3rem]" src={logo} alt="logo" />

      <Link to='/'>< ArrowBackIcon  /> </Link> 
      </div>
      <div className="flex flex-col gap-10 justify-center items-center border border-red-300 border-r-4 p-10">
        <h1 className="font-bold text-4xl text-[#023F3A]">
          Crop Health Detector
        </h1>
        {!dd ? (
          <form
            className="border gap-10 flex flex-col justify-center item-center  p-10"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-center item-center ">
              <label htmlFor="imageInput">Choose:</label>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <button className="bg-[#023F3A] text-white" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <Ans dataa={data[dd.class]} img={selectedImage} />
        )}
      </div>
    </div>
  );
}
