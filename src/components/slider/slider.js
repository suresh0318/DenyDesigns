import React from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="carousel">
      <div>
        <img
          className="slider-img"
          src="https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/slide-image-2-new.jpg?v=10418367156761454016"
          alt="slider-img"
        />
      </div>
      <div>
        <img
          className="slider-img"
          src="https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/slide-image-1-new.jpg?v=3234987594120036463"
          alt="slider-img"
        />
      </div>
      <div>
        <img
          className="slider-img"
          src="https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/slide-image-3-new.jpg?v=13765820223201158176"
          alt="slider-img"
        />
      </div>
      
    </Slider>
  );
}
