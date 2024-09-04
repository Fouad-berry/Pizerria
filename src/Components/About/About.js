import React from 'react';
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import foto from '../../Assets/Images/fouad2.jpg'
import custo from '../../Assets/Images/custo3r.png'
import { BsTrophy } from "react-icons/bs";
import { GrUserManager } from 'react-icons/gr';


export const About = () => {
    return (
        <Container fluid className='containerd-style'>
            <Container>
                <Row>
                    <Col>
                      <h1>Customer <span id='feed' >Feedback</span></h1>
                      <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='manageall'>
                       <div>
                       <img src={foto} alt="photo" className="photo" />
                       </div>
                       <div>
                        <h4>Fouad MOUTAIROU</h4>
                        <span id='qualif' >Front-end Developer</span>
                       </div>
                    </div>
                    <br></br>
                    <br></br>

                    <div className='palmares' >
                      <div id='firstbloc' >
                        <span> <span className='icont' ><GrUserManager/> </span> <span id='chefchiffre' >68</span> Chef Professionel</span>
                      </div>
                      <div  >
                        <span className='secbloc' > <span className='icont' ><BsTrophy/> </span><span id='chefchiffre' >984</span>Customer satisfaction</span>
                      </div>
                    </div>
                    </Col>
                    <br></br>

                    <Col  className='d-flex custochef '>
                    <img src={custo} alt="custo" className="custo" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

