import React from 'react';
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Wasana Bakers */}
          <div className="mb-4">
          <img src={Logo} width="60px" />
            <h3 className="text-lg font-bold mb-2">Wasana Bakers (Pvt) Ltd.</h3>
            <p>
            Horana Wasana Bakers Bombuwala Branch: Amazing Designs and
              Delicious Icing Cakes for all Occasions, friendly service and
              reasonable prices.
            </p>
          </div>

          
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Links</h3>
            <ul>
              <li><Link to={"/about"}>About Us</Link></li>
              <li><Link to={"/contactus"}>Contact Us</Link></li>
              <li><Link to={"/"}>Our Products</Link></li>
              <li><Link to={"/"}>Custom Design</Link></li>
            </ul>
          </div>

        
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Contact Details</h3>
            <ul>
              <p>Phone: +94 71 551 4646</p>
              <p>Email: info@example.com</p>
              <p>Address: Horana Wasana Bakers, Mankada, Bombuwala, kalutara
                South</p>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
