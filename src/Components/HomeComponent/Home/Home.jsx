import React from 'react'
import Navbar from '../Navbar/Navbar'
import Carousel from '../Carousel/Carousel'
import Welcome from '../Welcome/Welcome';
import ServicesCard from '../ServicesCard/ServicesCard';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div>
      <Carousel />
      <Welcome />
      <ServicesCard />
    </div>
  )
}

export default Home ;
