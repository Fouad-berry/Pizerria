import React from 'react';
import Container from 'react-bootstrap/Container';
import './Book_us.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import food from '../../Assets/Images/book-food.png'
import frites2 from '../../Assets/Images/frites2.jpg'
import deliver from '../../Assets/Images/deliver2.jpg'
import croix from '../../Assets/Images/croix.jpg'

export const Book_us = () => {
    return (
        <Container fluid className='containerb-style' >
            <Container className='book-container' >
            <Row>
            
                <Col>
                <img src={food} alt="food" className="food-logo" />
                </Col>
                <Col>
                  <h1>Why people Choose us ?</h1>
                  <br></br>
                  <div className='first' >
                    <div className='monimg' >
                     <img src={frites2} alt="frites2" className="frites-1" />
                    </div>
                    <div className='letext' >
                        <h2 id='item1'>Choose Your Favorite</h2>
                        <span>There are many variations passages of availables but the majority have alteration in some form</span>
                    </div>
                  </div>
                  <br></br>
                  <div className='second' >
                    <div className='monimg' >
                     <img src={deliver} alt="deliver" className="frites-1" />
                    </div>
                    <div className='letext' >
                        <h2 id='item2'>We Deliver Your Meals</h2>
                        <span>There are many variations passages of availables but the majority have alteration in some form</span>
                    </div>
                  </div>
                  <br></br>
                  <div className='third' >
                    <div className='monimg' >
                     <img src={croix} alt="croix" className="frites-1" />
                    </div>
                    <div className='letext' >
                        <h2 id='item3'>Grab Your Delicious Food</h2>
                        <span>There are many variations passages of availables but the majority have alteration in some form</span>
                    </div>
                  </div>
                </Col>

            </Row>
            </Container>
        </Container>
    );
};

