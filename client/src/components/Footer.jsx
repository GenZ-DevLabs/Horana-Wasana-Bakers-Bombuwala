import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Wasana Bakers */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Wasana Bakers (Pvt) Ltd.</h3>
            <p>
              The seed of Horana Wasana Bakery was planted by Mr. Dayananda Bobuwala and his wife Mrs. Anusha Wijayanthi Perera.
              In the search for a name for this new bakery, he wanted to add the name of the city Horana, which has a strong connection since his childhood.
              The foundation of Wasana Bakers was laid in 1995 when the current owner and his wife established it in Ratiyala, Govinna in Western Province.
            </p>
          </div>

          {/* Group of Companies */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Group of Companies</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Subsidiary Companies</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Online Help</a></li>
              <li><a href="#">Online Order</a></li>
            </ul>
          </div>

          {/* Wasana Reception Hall */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Wasana Reception Hall</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Availability</a></li>
              <li><a href="#">Booking</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Facilities</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
