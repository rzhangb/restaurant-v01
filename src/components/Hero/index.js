import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Food That You Can't Resist</HeroH1>
          <HeroH2>Enjoy The Marvelous Taste</HeroH2>
          <HeroP>We offers an expansive menu of Taiwanese and Chinese cuisine full of flavor. For us from Asia, We always miss our hometown food! With a wide range of meals including pork, fowl, beef, seafood, and tofu, we truly have a delicious option for everyone.</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
