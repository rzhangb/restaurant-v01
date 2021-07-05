import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';
import logoImg from '../../images/logo-sasaya.jpg'

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;

export const NavLogo = styled(Link)`
height: 100%;
width: 120px;
border-radius: 3px;

display: flex;
justify-content: center;
align-items: center;

background-image: url(${logoImg});
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat;

opacity: 0.3;
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
