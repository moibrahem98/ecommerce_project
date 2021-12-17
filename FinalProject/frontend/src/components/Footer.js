import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default function App() {
    return (
        <div className='text-lg-left bg-dark text-light'>
            <Container className='p-4'>
                <Row>
                    <Col lg='6' md='12' className='mb-4 mb-md-0'>
                        <h3 className='text-uppercase text-light'>Mid Night</h3>

                        <p>
                            mid night shop
                            Our products are unique in terms of design and quality.
                            We are committed to providing products and services that meet the needs of our customers
                        </p>
                    </Col>

                    <Col lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase text-light'>Products</h5>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='text-light'>
                                    Perfuems
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-light'>
                                    Makeup
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-light'>
                                    Body Care
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-light'>
                                    Hair Care
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-0 text-light'>Social</h5>

                        <ul className='list-unstyled'>
                            <li>
                                <a href='https://www.facebook.com/Mid4Night' className='face-icon'>
                                    <i className='fab fa-2x fa-facebook text-light'></i>
                                </a>
                                <a href='https://api.whatsapp.com/send?phone=2001150508507&app=facebook&entry_point=page_cta&fbclid=IwAR0PGOyWWnceZltN1I_tgeb5n1NoisWf9qfItSdoHcvfUAqAbrIE0zLg6u8'>
                                    <i className='fab fa-2x fa-whatsapp text-light'></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.9' }}>
                <p className='text-light'>
                    MidnNight Created By iti Team All Right Reseved @
                </p>
            </div>
        </div >
    );
}