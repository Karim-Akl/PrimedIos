import React from 'react';
import Main from '../../components/main/main';
import SubAbout from '../../components/sub-about/sub-about';
import SubService from '../../components/sub-service/sub-service';
import SliderCamp from '../../components/slider-camp/slider-camp';

const Home = () => {
  return (
    <div>
      <Main />
      <SubAbout />
      <SubService />
      <SliderCamp/>
    </div>
  );
}
export default Home;
