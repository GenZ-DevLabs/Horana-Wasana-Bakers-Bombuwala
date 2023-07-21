// src/AboutPage.js
import React from 'react';
import { ReactDOM } from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold ">Welcome to Wasana Bakers!</h1>
        <p className="text-lg mt-4 font-sans">
          At Wasana Bakers, we believe that every day should be celebrated with a touch of
          sweetness and the joy of indulgence. Our journey began in the heart of a passionate baker
          who dreamt of creating delectable treats that would bring smiles to people's faces. In
          1985, that dream became a reality when Wasana Bakers opened its doors for the very first
          time.
        </p>
      </div>

      <div className="md:flex md:space-x-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 ">Handcrafted with Love</h2>
          <p className="text-lg mt-4">
            From the beginning, we dedicated ourselves to the art of baking. Our skilled bakers put
            their heart and soul into every creation, using only the finest, freshest ingredients.
            Our commitment to quality has been unwavering, and we take pride in producing
            mouthwatering delights that not only taste amazing but also tell stories of tradition
            and care.
          </p>
        </div>

        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold">Our Signature Recipes</h2>
          <p className="text-lg mt-4">
            Over the years, we have curated a delightful array of signature recipes that have
            become synonymous with Wasana Bakers. Whether it's our melt-in-your-mouth pastries,
            scrumptious cakes, or artisanal bread, each creation has a unique touch that sets it
            apart. Our secret ingredient? Love. It's the love for baking and our customers that
            adds that extra touch of magic to everything we make.
          </p>
        </div>
      </div>

      <div className="md:flex md:space-x-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold">Beyond Baking</h2>
          <p className="text-lg mt-4">
            We believe in the power of community and the joy of giving back. At Wasana Bakers, we
            actively engage with local initiatives and support causes that are close to our heart.
            From donating surplus baked goods to sponsoring events, we are committed to making a
            positive impact on the lives of those around us.
          </p>
        </div>

        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold">Join Our Sweet Journey</h2>
          <p className="text-lg mt-4">
            To our loyal customers, thank you for making us a part of your celebrations, big and
            small. To those just discovering us, we extend a warm welcome and invite you to
            experience the extraordinary world of Wasana Bakers.
          </p>
          <p className="text-lg mt-4">
            Join us on this sweet journey, where every bite is a moment to cherish, and every
            creation is an expression of our love for baking.
          </p>
          <p className="text-lg mt-4">Thank you for being a part of our story.</p>
        </div>
      </div>

      <div className="text-right mt-8">
        <p className="italic">With love,</p>
        <p className="font-bold">The Wasana Bakers Team</p>
      </div>
    </div>
  );
};

export default AboutPage;
