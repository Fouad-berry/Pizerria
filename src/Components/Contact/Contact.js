import React from 'react';
import './Contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Contact = () => {
    return (
        <Container fluid className='containere-style'>
            <Container className='contact-style' >
              <Row>
                <Col>
                  <h1>Suscribe <span id='news' >Newsletter</span></h1>
                </Col>

                <Col>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Enter your Email adress"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    style={{ backgroundColor: '#FFD9C8', color:'blue' }}
                    />
                    <Button className='border-0' id="button-addon2">
                    Suscribe Now
                    </Button>
                </InputGroup>
                </Col>
              </Row>
              <hr id='lehr' ></hr>
            </Container>
        </Container>
    );
};
