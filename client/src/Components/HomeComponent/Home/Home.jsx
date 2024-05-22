import React, { useEffect } from 'react';
import Carousel from '../Carousel/Carousel';
import Welcome from '../Welcome/Welcome';
import ServicesCard from '../ServicesCard/ServicesCard';

function Home() {
  return (
    <div>
      <Carousel />
      <Welcome />
      <ServicesCard />
    </div>
  );
}

export default Home;
