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
  HeroBtn,
  HeroH3,  
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
          <HeroP>Extensive menu of Taiwanese and Chinese cuisine full of flavor. Miss our hometown food?  We offer a wide range of meals including pork, fowl, beef, seafood, and tofu, a truly delicious option for everyone.</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
      <HeroH3>We Offer Takeout !</HeroH3>
    </HeroContainer>
  );
};

export default Hero;
