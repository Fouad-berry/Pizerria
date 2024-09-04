import React from 'react';
import './Food.css'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import frites from '../../Assets/Images/frites1.png'
import burger from '../../Assets/Images/burger1.jpg'
import hotdog from '../../Assets/Images/hotdog1.png'


export const Food = () => {
    return (
        <Container fluid className='container-style' >
       <Container className='food-container' >
        <Row className='food mx-auto ' >
            <Card style={{ width: '18rem', backgroundColor:'#FFF2EC'}} className="border-0" >
            <div className="d-flex justify-content-center">
             <img src={frites} alt="frites" className="frites" />
            </div>
            <Card.Body className='food-body'>
                <Card.Title className="d-flex justify-content-center bouffe " >Hamburger</Card.Title>
                <Card.Text className="d-flex justify-content-center" >
                There are many vibrations of passage of available, but the majority have suffer.
                </Card.Text>
                <Button className='btn1'>See Menu</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem', backgroundColor:'#FFF2EC'}} className="border-0" >
            <div className="d-flex justify-content-center">
             <img src={burger} alt="burger" className="burger" />
            </div>
            <Card.Body className='food-body' >
                <Card.Title className='bouffe' >Friend Fries</Card.Title>
                <Card.Text>
                There are many vibrations of passage of available, but the majority have suffer.
                </Card.Text>
                <Button className='btn2'>See Menu</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem', backgroundColor:'#FFF2EC'}} className="border-0" >
            <div className="d-flex justify-content-center">
             <img src={hotdog} alt="hotdog" className="hotdog" />
            </div>
            <Card.Body className='food-body' >
                <Card.Title className='bouffe' >HotDog</Card.Title>
                <Card.Text>
                There are many vibrations of passage of available, but the majority have suffer.
                </Card.Text>
                <Button className='btn3'>See Menu</Button>
            </Card.Body>
            </Card>
        </Row>
       </Container>
       </Container>
    );
};

