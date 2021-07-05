import React from 'react';
import { NavbarContainer, NavbarLogo, NavbarLinks, NavbarLink, NavbarSideIcon } from './NavbarElements';
import Hamburger from 'hamburger-react';

const Navbar = ({ toggle }) => {
  return (
    <>
      <NavbarContainer>
        <NavbarLogo to='/'></NavbarLogo>

        <NavbarLinks>
          <NavbarLink to='/'>604 433 3652</NavbarLink>
          <NavbarLink to='/'>Reserve Table</NavbarLink>
        </NavbarLinks>
   
        <NavbarSideIcon>
          <Hamburger toggle={toggle} /> 
        </NavbarSideIcon>     
      </NavbarContainer>
    </>
  );
};

export default Navbar;
