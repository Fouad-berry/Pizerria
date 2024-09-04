import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css';
import logo from '../../Assets/Images/food-ic.png'
import { FiShoppingCart, FiSearch } from "react-icons/fi"; 
import { BsFillGrid3X3GapFill} from "react-icons/bs"; 


export const NavBar = () => {
    return (
        <Navbar className='custom-navbar' expand="md">
        <Container fluid="md" >  
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className='title'>Foodies</span>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#home">Food</Nav.Link>
              <Nav.Link href="#link">Book Table</Nav.Link>
            </Nav>
            <Nav className="mx-auto">
              <Nav.Link href="#home"><FiShoppingCart/></Nav.Link>
              <Nav.Link href="#link"><FiSearch/></Nav.Link>
              <Nav.Link href="#home"><BsFillGrid3X3GapFill/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};
