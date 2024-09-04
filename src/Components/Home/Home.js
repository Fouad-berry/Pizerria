import React from 'react';
import Container from 'react-bootstrap/Container';
import './Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hamburger from'../../Assets/Images/pizza3r.png'
import { Button } from 'react-bootstrap';
import { BsArrowRight } from "react-icons/bs";


export const Home = () => {
    return (
        <Container fluid className='container-style' >
            <Container className='home-container' >
            <Row>
            <hr/>
            <br></br>
            <br></br>
                <Col className='sub-text ' >
                <h1 className='align-left' ><p>Enjoy <span id='surlign'>Delicious</span></p>
                <p><span id='surlign' >Food</span> 🍔🍕 in your</p>
                <p>healthy life</p></h1>
                <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </h2>
                <br></br>
                <Button className='button' >Order Now <BsArrowRight/></Button> 
                </Col>
                <Col className='d-flex justify-content-center text-center' >
                <img src={hamburger} alt="hamburger" className="home-logo" />
                </Col>
            </Row>
            </Container>
        </Container>
    );
};

