import React from 'react'
import Carousel from '../Carousel/Carousel'
import Welcome from '../Welcome/Welcome';
import ServicesCard from '../ServicesCard/ServicesCard';
import { useDispatch, useSelector } from 'react-redux';
import { isLogged } from '../../../redux/logged/loggedSlice';

function Home() {

  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLogged.value);
  if(document.cookie && !isLoggedIn){
    dispatch(isLogged(true));
  }

  return (
    <div>
      <Carousel />
      <Welcome />
      <ServicesCard />
    </div>
  )
}

export default Home ;
