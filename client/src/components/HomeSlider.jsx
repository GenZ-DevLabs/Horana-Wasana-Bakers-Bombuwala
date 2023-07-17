import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/slider1.jpg";
import Image2 from "../assets/slider2.jpg";

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

  return (
    <div className="relative z-10">
      {/* this div should be link to a another bage show specail deals */}
      <Slider {...settings}>
        <div>
          <img src={Image1} alt="Image1" />
        </div>
        <div>
          <img src={Image2} alt="Image2" />
        </div>
      </Slider>
    </div>
  );
}
