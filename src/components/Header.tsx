import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../Styles/Header.css'
import logo from '../assets/Name_logo-removebg-preview.png'

const Header: React.FC = () => {

  return (
    <Navbar light expand="md" className="navbar-offwhite">
      <NavbarBrand className="mr-auto">
      <img src={logo} alt="Logo" className="brand-logo" />
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="#summary">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#experience">Experience</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#education">Education</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#courses">Courses & Interests</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;