import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../Styles/Header.css'

const Header: React.FC = () => {

  return (
    <Navbar light expand="md" className="navbar-offwhite">
      <NavbarBrand className="mr-auto">
        <div>
          <div>Abhash Kumar</div>
          <div>Senior Software Engineer</div>
        </div>
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="#summary">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#education">Education</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#experience">Experience</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#courses">Courses</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#interests">Interests</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;