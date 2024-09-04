import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { GrUserManager } from 'react-icons/gr';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdOutlineDateRange } from 'react-icons/md';
import { TbClockHour9 } from 'react-icons/tb';
import { BsArrowRight } from 'react-icons/bs';




export const Footer = () => {
    return (
        <Container fluid className='containerd-style'>
            <Container className='footer-style' >
               <Row>
                <Col>
                  <h1 className='titlefood' >Foodies</h1>
                  <span>144 street Bellerin. Ubited state kingdom</span><p></p>
                  <p>+330695933701</p>
                  <p id='call' >Make a Call</p>
                </Col>

                <Col>
                  <h1>Opening Hours</h1>
                  <p>Monday-friday: 8am-4pm</p>
                  <p>Saturday: 8am-4pm</p>
                  <p id='close' >Sunday Closed</p>
                </Col>

                <Col>
                  <h1>Book Your Table</h1>
                  <InputGroup>
                    <InputGroup.Text className='igroup' >
                      <GrUserManager />
                    </InputGroup.Text>
                    <Form.Select aria-label="Default select example" className="blue-select" >
                    <option>People</option>
                    <option value="1">One</option>  
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                    <InputGroup.Text className='igroup' >
                      <MdOutlineDateRange />
                    </InputGroup.Text>
                    <Form.Select aria-label="Default select example" className="blue-select" >
                    <option>21.08.2023</option>
                    <option value="1">18.06.2024</option>
                    <option value="2">18.06.2024</option>
                    <option value="3">18.06.2024</option>
                    </Form.Select>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                    <InputGroup.Text className='igroup' >
                      <TbClockHour9 />
                    </InputGroup.Text>
                    <Form.Select aria-label="Default select example" className="blue-select" >
                    <option>08:00 am</option>
                    <option value="1">18.06.2024</option>
                    <option value="2">18.06.2024</option>
                    <option value="3">18.06.2024</option>
                    </Form.Select>
                    </InputGroup>
                    <Button className='button' >Book Table <BsArrowRight/></Button> 
                </Col>
               </Row>
            </Container>
        </Container>

    );
};

