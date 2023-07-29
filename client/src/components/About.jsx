// src/AboutPage.js
// import Cake from "../assets/Cake.jpeg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="w-full h-screen bg-custom-image bg-cover">
      <div className="flex items-center w-full h-screen text-white bg-gradient-to-r from-primary to-transparent ">
        <div className="ml-5 md:ml-20">
          <h1 className="text-5xl font-semibold ">
            <span>Welcome to</span> <br />
            <span className="font-bold text-6xl">Wasana Bakers Bombuwala.</span>
          </h1>
          <h2 className="text-2xl">
            We&apos;re glad and grateful <br className="sm:hidden" />
            you&apos;re here.
          </h2>
          <Link
            to={"/contactus"}
            className="flex items-center gap-2 rounded-full mt-5"
          >
            <span className="border border-white px-3 py-2 rounded-2xl">
              Contact Us
            </span>
            <div className="bg-gray-500 text-white rounded-full overflow-hidden"></div>
          </Link>
        </div>
      </div>
    </div>

    // <div className="bg-pink">
    //   <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full md:items-center justify-around">
    //     <div className="mx-10 md:ml-20 flex items-end lg:items-center md:w-4/5 h-auto">
    //       <img
    //         src={Cake}
    //         alt="Cake"
    //         className="overflow-hidden rounded-2xl shadow-lg shadow-gray-800"
    //       />
    //     </div>
    //     <div className="md:ml-2 md:mr-20 m-10 p-4 bg-pink2  rounded-lg shadow-md">
    //       <h2 className="text-3xl font-bold   ">Join Our Sweet Journey</h2>
    //       <p className="text-lg mt-4 ">
    //         Welcome to Wasana Bakers! We take pride in crafting delectable baked
    //         goods that tantalize your taste buds and warm your heart.
    //       </p>
    //       <p className="text-lg mt-4">
    //         Join us on this sweet journey, where every bite is a moment to
    //         cherish, and every creation is an expression of our love for baking.
    //       </p>
    //       <p className="text-lg mt-4">
    //         Thank you for being a part of our story.
    //       </p>
    //     </div>
    //   </div>
    // </div>
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
