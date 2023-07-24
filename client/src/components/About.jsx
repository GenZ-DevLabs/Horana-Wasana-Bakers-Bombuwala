// src/AboutPage.js
import React from 'react';
import { ReactDOM } from 'react';
import Cake from "../assets/Cake.jpeg";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-10 py-20 bg-pink">
      

      <div className="md:flex md:space-x-8 ">
        <div className="md:w-1/2 mb-8 md:mb-0 px-20 py-8 ">
        <img src={Cake} alt="Cake" width="500"  className="inset-0 object-cover rounded-lg transform=scale-90 -rotate-6 shadow-md" />
        </div>

        

        <div className="md:w-1/2 mb-8 md:mb-0 px-12 py-8 bg-pink2  rounded-lg shadow-md  ">
          <h2 className="text-3xl font-bold  ">Join Our Sweet Journey</h2>
          <p className="text-lg mt-4 ">
          Welcome to Wasana Bakers! We take pride in crafting delectable baked goods that tantalize 
          your taste buds and warm your heart. With a legacy spanning over three generations, our family-owned bakery has been 
          synonymous with quality, tradition, and innovation. From our freshly baked bread to irresistible pastries, every creation is made
           with the finest ingredients and utmost love. Whether you're indulging in our signature cakes or savoring our artisanal cookies, each bite carries the essence of our passion for baking. Join us on this delightful journey, where every moment is made sweeter with Wasana Bakers' irresistible treats.
          </p>
          <p className="text-lg mt-4">
            Join us on this sweet journey, where every bite is a moment to cherish, and every
            creation is an expression of our love for baking.
          </p>
          <p className="text-lg mt-4">Thank you for being a part of our story.</p>
        </div>
      </div>

      
    </div>
  );
};

export default AboutPage;
