import React from 'react';
import './Book_tab.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import book1 from '../../Assets/Images/book-food.png'



export const Book_tab = () => {
    return (
        <Container fluid className='containerc-style'>

            <Container className='book-tab-container'>
                 <h1 className='firsttext' >Our Popular Food Item🔥🔥</h1>
                 <span id='subtext' >It's a long etablished fact that the reader will be distracted by the readable content of a page when looking  as it layout</span>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

       <Container className='book-tab-container' >
        <Row className='book mx-auto '>
            <Card style={{ width: '18rem', backgroundColor:'#FDEAE2', borderRadius:'23px', top:'-135px'}} className="border-0" >
            <div className="d-flex justify-content-center">
             <img src={book1} alt="book1" className="book1" />
            </div>
            <Card.Body className='book-body'>
                <Card.Title className="d-flex justify-content-center bouffe" >Chicken Sandwich</Card.Title>
                <Card.Text className="d-flex justify-content-center" >
                There are many vibrations of passage of available, but the majority have suffer.
                </Card.Text>
                <span id='price' >$125.00</span>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem', backgroundColor:'#FDEAE2', borderRadius:'23px', top:'-135px'}} className="border-0" >
            <div className="d-flex justify-content-center">
             <img src={book1} alt="book1" className="book1" />
            </div>
            <Card.Body className='book-body'>
                <Card.Title className="d-flex justify-content-center bouffe" >Chocolate Donuts</Card.Title>
                <Card.Text className="d-flex justify-content-center" >
                There are many vibrations of passage of available, but the majority have suffer.
                </Card.Text>
                <span id='price' >$90.00</span>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem', backgroundColor:'#FDEAE2', borderRadius:'23px', top:'-135px'}} className="border-0" >
            <div className="d-flex justify-content-center">
             <img src={book1} alt="book1" className="book1" />
            </div>
            <Card.Body className='book-body'>
                <Card.Title className="d-flex justify-content-center bouffe" >Saladi Masala</Card.Title>
                <Card.Text className="d-flex justify-content-center" >
                There are many vibrations of passage of available, but the majority have suffer.
                </Card.Text>
                <span id='price' >$88.00</span>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem', backgroundColor:'#FDEAE2', borderRadius:'23px', top:'-135px'}} className="border-0" >
            <div className="d-flex justify-content-center">
             <img src={book1} alt="book1" className="book1" />
            </div>
            <Card.Body className='book-body'>
                <Card.Title className="d-flex justify-content-center bouffe" >Chicken Masala</Card.Title>
                <Card.Text className="d-flex justify-content-center" >
                There are many vibrations of passage of available, but the majority have suffer.
                </Card.Text>
                <span id='price' >$130.00</span>
            </Card.Body>
            </Card>
        </Row>
       </Container>

        </Container>
    );
};

