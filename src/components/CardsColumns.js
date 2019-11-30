import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

import two from '../assets/images/photography/two.jpg';
import three from '../assets/images/photography/three.jpg';
import four from '../assets/images/photography/four.jpg';
import five from '../assets/images/photography/five.jpg';
import six from '../assets/images/photography/six.jpg';
import seven from '../assets/images/photography/seven.jpg';
import eight from '../assets/images/photography/eight.jpg';
import nine from '../assets/images/photography/nine.jpg';
import ten from '../assets/images/photography/ten.jpg';
import eleven from '../assets/images/photography/eleven.jpg';
import twelve from '../assets/images/photography/twelve.jpg';

function CardsColumns(props){
    return(
        <div className='bg m-0 p-1'>
        <div className='main'>
            <CardColumns className='mt-4'>
                
                <Card className="text-left bg" data-aos="fade-up" text='white'>
                    <Card.Body className='p-0 mb-3'>
                        <Card.Title>Photography</Card.Title>
                        <Card.Text>
                            Photography has been a hobby of mine for a long time. Sadly I don't travel much, but I like taking portraits of people. As an introvert, taking portraits is a way of mine to communicate and connect with people. However, I want to do astrophotography at some point because I love space and the vibe that comes along with it. The essence of space makes me think, and the more I dive deep into my thoughts it gets more enlightening.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card data-aos="fade-up">
                    <Card.Img src={two} />
                </Card>

                <Card data-aos="fade-up">
                    <Card.Img src={three} />
                </Card>

                <Card data-aos="fade-up">
                    <Card.Img src={four} />
                </Card>

                <Card data-aos="fade-up">
                    <Card.Img src={five} />
                </Card>

                <Card data-aos="fade-up">
                    <Card.Img src={six} />
                </Card>

                <Card data-aos="fade-up">
                    <Card.Img src={seven} />
                </Card>

                <Card data-aos="fade-up">
                    <Card.Img src={eight} />
                </Card>

                <Card data-aos="fade-up">
                    <Card.Img src={nine} />
                </Card>

                <Card data-aos="fade-up">
                    <Card.Img src={ten} />
                </Card>

                <Card data-aos="fade-up">
                    <Card.Img src={eleven} />
                </Card>

                <Card>
                    <Card.Img src={twelve} />
                </Card>
            </CardColumns>
        </div>
        </div>
    );
}
export default CardsColumns;