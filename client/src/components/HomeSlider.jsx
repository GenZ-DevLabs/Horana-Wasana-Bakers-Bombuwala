import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function HomeSlider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios.get("/user-slides").then(({ data }) => {
      setSlides(data);
    });
  }, []);

  const CustomPrevArrow = () => {
    return <></>; // Return an empty fragment to disable the previous button
  };

  const CustomNextArrow = () => {
    return <></>; // Return an empty fragment to disable the next button
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    loop: true,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="relative z-10">
      <Slider {...settings}>
        {slides.length > 0 &&
          slides.map((slide) => (
            <Link
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
