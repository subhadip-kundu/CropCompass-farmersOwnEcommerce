import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderCard from '../SliderCard/SliderCard';
import vegetable from '../../../assets/Vegetable.png'
import vegetableTwo from '../../../assets/Vegitable.png'
import vegetableThree from '../../../assets/vegetableThree.png'

import './Crousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 4000
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <SliderCard src={vegetable} />
        </div>
        <div>
          <SliderCard src={vegetableTwo} />
        </div>
        <div>
          <SliderCard src={vegetableThree} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
