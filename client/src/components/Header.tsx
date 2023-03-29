import React from 'react'
import { Nav, Logo, Menu, MenuLink } from '../styles/styles';


const Header: React.FC = () => {
  return (
    <Nav>
      <Logo href='/'>
        SKI<span> Resorts</span>
      </Logo>    
      <Menu>
        <MenuLink href='/'>Home</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Header;
