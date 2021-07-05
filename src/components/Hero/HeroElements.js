import styled from 'styled-components';
import showcaseImg from '../../images/showcase.jpg';

export const HeroContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)),
    url(${showcaseImg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 800px;

  line-height: 1.3;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: 3rem;
  font-family: 'Lemonada', cursive;

  color: #FFF200;  
`;

export const HeroH2 = styled.h2`
  font-size: 3rem;
  font-family: 'Caveat', cursive;
  text-shadow: .1rem .1rem .3rem #333;
  color: #fff;
  margin: 1rem 0;
`;

export const HeroP = styled.p`
  margin-bottom: 2rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;

  color: #ccc;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  border-radius: 3px;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const HeroH3 = styled.h3`
  position: absolute;
  right: 60px;
  bottom: 100px;

  font-size: 2rem;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: #7CFC00;

  color: rgb(218, 165, 32);  

  transform: rotate(-20deg);
`;