import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import one from '../assets/images/paintings/one.jpg';
import two from '../assets/images/paintings/two.jpeg';
import three from '../assets/images/paintings/three.jpg';
import four from '../assets/images/paintings/four.jpg';
import five from '../assets/images/paintings/five.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ControlledCarousel() {
  
    return (
        <div className='main mt-100'>
            <Container fluid={true}>
                <Row>
                    <Col xs={12} md={6} className='p-0 pr-5 pb-3' data-aos='fade-right'>
                        <Card.Title>Extra Stuff</Card.Title>
                        <Card.Text className='mb-100'>If so, perfect. Try this. Run your finger along the outer edge of the tip of your upside down tongue. Your tongue will be able to feel your finger, but in the wrong place. Our brains never needed to develop an understanding of upside down tongue touch. So, when you touch the right side of your tongue when it's flipped over to your left side you perceive a sensation on the opposite side, where your tongue usually is but isn't when it's upside down. It's pretty freaky and cool and a little humbling, because it shows the limits of the accuracy of our senses, the only tools we have to get what's out there in here.</Card.Text>
                        <Button className='mb-3' variant="outline-success" href='' target='_blank'>Link</Button>
                    </Col>

                    <Col xs={12} md={6} className='p-0 shadow bg-white' data-aos='fade-up'>

                        <Carousel className='w-100'>
                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={one}
                                alt="First slide"
                            />
                            </Carousel.Item>
                            
                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={two}
                                alt="Third slide"
                            />
                            </Carousel.Item>
                            
                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={three}
                                alt="Third slide"
                            />
                            </Carousel.Item>

                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={four}
                                alt="Third slide"
                            />
                            </Carousel.Item>

                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={five}
                                alt="Third slide"
                            />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
      </div>
    );
}

export default ControlledCarousel;