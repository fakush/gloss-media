import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HomeMainCarousel1 from '../assets/img/portada_web1.jpg';
import HomeMainCarousel2 from '../assets/img/portada_web2.jpg';
import HomeMainCarousel3 from '../assets/img/portada_web3.jpg';
import HomeMainCarousel4 from '../assets/img/portada_web4.jpg';

export default function HomepageCarousel() {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
        <img className='d-block w-100' src={HomeMainCarousel1} alt='gloss' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={HomeMainCarousel2} alt='gloss' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={HomeMainCarousel3} alt='gloss' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={HomeMainCarousel4} alt='gloss' />
      </Carousel.Item>
    </Carousel>
  );
}
