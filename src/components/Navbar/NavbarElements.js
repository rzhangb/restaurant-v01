import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo-sasaya.jpg'


/* NavbarLogo | NavbarLinks | NavbarSideIcon */
export const NavbarContainer = styled.nav`
  background: transparent;
  height: 80px;

  display: flex;
  justify-content: space-between;

  font-weight: 600;
`;

/* logo link */
export const NavbarLogo = styled(Link)`
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

/* NavbarLink | NavbarLink | ...  */
export const NavbarLinks = styled.div`
  width: calc(90vw - 120px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavbarLink = styled(Link)`
padding: 0 20px;
  font-size: 2rem;
  font-family: 'Just Another Hand', cursive;
  letter-spacing: 3px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const NavbarSideIcon = styled.div`
  width: 10vw;
  
  display: flex;
  justify-content:center;
  align-items:center;

  color: #fff;

  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;

