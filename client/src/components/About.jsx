// src/AboutPage.js
import React from "react";
import { ReactDOM } from "react";
import Cake from "../assets/Cake.jpeg";

const AboutPage = () => {
  return (
    <div className="bg-pink">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full md:items-center justify-around">
        <div className="mx-10 md:ml-20 flex items-end lg:items-center md:w-4/5 h-auto">
          <img
            src={Cake}
            alt="Cake"
            className="overflow-hidden rounded-2xl shadow-lg shadow-gray-800"
          />
        </div>
        <div className="md:ml-2 md:mr-20 m-10 p-4 bg-pink2  rounded-lg shadow-md">
          <h2 className="text-3xl font-bold   ">Join Our Sweet Journey</h2>
          <p className="text-lg mt-4 ">
            Welcome to Wasana Bakers! We take pride in crafting delectable baked
            goods that tantalize your taste buds and warm your heart.
          </p>
          <p className="text-lg mt-4">
            Join us on this sweet journey, where every bite is a moment to
            cherish, and every creation is an expression of our love for baking.
          </p>
          <p className="text-lg mt-4">
            Thank you for being a part of our story.
          </p>
        </div>
      </div>
    </div>
    // <div className="mx-auto px-10 py-20 bg-pink h-screen flex items-center justify-around">

    //   <div className="flex md:space-x-8 ">
    //     <div className="lg:w-1/2 mb-8 md:mb-0 px-20 py-8 ">
    //     <img src={Cake} alt="Cake" className="w-80 object-cover rounded-lg transform=scale-90 -rotate-6 shadow-md" />
    //     </div>

    //     <div className="md:w-1/2 mb-8 md:mb-0 px-12 py-8 bg-pink2  rounded-lg shadow-md  ">
    //       <h2 className="text-3xl font-bold  ">Join Our Sweet Journey</h2>
    //       <p className="text-lg mt-4 ">
    //       Welcome to Wasana Bakers! We take pride in crafting delectable baked goods that tantalize
    //       your taste buds and warm your heart.
    //       </p>
    //       <p className="text-lg mt-4">
    //         Join us on this sweet journey, where every bite is a moment to cherish, and every
    //         creation is an expression of our love for baking.
    //       </p>
    //       <p className="text-lg mt-4">Thank you for being a part of our story.</p>
    //     </div>
    //   </div>

    // </div>
  );
};

export default AboutPage;
