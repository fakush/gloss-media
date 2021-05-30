import React from "react";
import Carousel from "react-bootstrap/Carousel";
import HomeMainCarousel1 from "../assets/img/home_main_carousel_1.png";
import HomeMainCarousel2 from "../assets/img/home_main_carousel_2.png";
import HomeMainCarousel3 from "../assets/img/home_main_carousel_3.png";
import HomeMainCarousel4 from "../assets/img/home_main_carousel_4.png";

export default function HomepageCarousel() {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={HomeMainCarousel1} alt="gloss" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={HomeMainCarousel2} alt="gloss" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={HomeMainCarousel3} alt="gloss" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={HomeMainCarousel4} alt="gloss" />
      </Carousel.Item>
    </Carousel>
  );
}
