import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function HomeSlider() {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Allow infinite scrolling
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable auto play
    autoplaySpeed: 10000, // Auto play speed in milliseconds
    loop: true, // Enable continuous loop mode
    cssEase: "linear", // Transition style
  };

  const [slides, setSlides] = useState([]);
  useEffect(() => {
    axios.get("/user-slides").then(({ data }) => {
      setSlides(data);
    });
  }, []);

  return (
    <div className="relative z-10">
      {/* this div should be link to a another bage show specail deals */}
      <Slider {...settings}>
        {slides.length > 0 &&
          slides.map((slide) => (
            <Link
              to={"/account/slide/" + slide._id}
              key={slide}
              className="flex cursor-pointer bg-gray-100 rounded-2xl mt-3"
            >
              <div className="flex bg-gray-300">
                {slide.photos.length > 0 && (
                  <img
                    className="object-cover"
                    src={"http://localhost:4001/uploads/" + slide.photos[0]}
                    alt="slide"
                  />
                )}
              </div>
            </Link>
          ))}
      </Slider>
    </div>
  );
}
