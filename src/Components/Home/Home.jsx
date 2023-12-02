import React from 'react'
import Navbar from '../Navbar/Navbar'
import Carousel from '../Carousel/Carousel'
import Welcome from '../Welcome/Welcome';
import ServicesCard from '../ServicesCard/ServicesCard';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Welcome />
      <ServicesCard />
      <Footer />
    </div>
  )
}

export default Home;
