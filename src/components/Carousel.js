import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import one from '../assets/images/paintings/one.jpg';
import two from '../assets/images/paintings/two.jpg';
import three from '../assets/images/paintings/three.jpg';
import four from '../assets/images/paintings/four.jpg';
import five from '../assets/images/paintings/five.jpg';
import six from '../assets/images/paintings/six.jpg';
import seven from '../assets/images/paintings/seven.jpg';
import eight from '../assets/images/paintings/eight.jpg';
import nine from '../assets/images/paintings/nine.jpg';
import ten from '../assets/images/paintings/ten.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ControlledCarousel() {
  
    return (
        <div className='main mt-100'>
            <Container fluid={true}>
                <Row>
                    <Col xs={12} md={6} className='p-0 pr-5 pb-3' data-aos='fade-right'>
                        <Card.Title>Art & Design</Card.Title>
                        <Card.Text className='mb-100'>Art makes us more human. it helps us communicate in a different, personal language.
                        That's one of the reasons why I love art. I like painting as well as graphic design. I have been painting since I was 10. I often use acrylic and sometimes watercolor.
                        Fun fact: I only paint on sunny days.</Card.Text>
                        <Button className='mb-3' variant="outline-success" href='https://dribbble.com/muhfasul159' target='_blank'>Graphic Design</Button>
                    </Col>

                    <Col xs={12} md={6} className='p-0' data-aos='fade-up'>

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

                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={six}
                                alt="Third slide"
                            />
                            </Carousel.Item>

                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={seven}
                                alt="Third slide"
                            />
                            </Carousel.Item>

                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={eight}
                                alt="Third slide"
                            />
                            </Carousel.Item>

                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={nine}
                                alt="Third slide"
                            />
                            </Carousel.Item>

                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={ten}
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