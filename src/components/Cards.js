import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

import AOS from '../../node_modules/aos/dist/aos';

function Cards(){
    return(
        
        <CardDeck>
            <Card className="text-left bg shadow" data-aos="fade-up" text='white'>
                <Card.Body>
                    <Card.Title>Introduction</Card.Title>
                    <Card.Text>
                    You might say, well, I know where my fingers are. I'm looking right at them. Or, I can touch them, I can feel them, they're right here and that's good. Your senses are a great way to learn things. In fact, we have way more than the usual five senses we talk about.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card data-aos="fade-up" className='bg shadow' text='white'>
                <Card.Body>
                    <Card.Title>Project 01</Card.Title>
                    <Card.Text>
                    For instance, your kinesthetic sense, proprioception. This is what the police evaluate during a field sobriety test.
                    </Card.Text>
                    <Card.Link href="" target='_blank'>View</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="tiny">Last updated June 17, 2019</small>
                </Card.Footer>
            </Card>

            <Card data-aos="fade-up" className='bg shadow' text='white'>
                <Card.Body>
                    <Card.Title>Project 02</Card.Title>
                    <Card.Text>
                    It allows you to tell where your fingers and arms and head and legs in your body is all in relation to each other without having to look or touch other things. 
                    </Card.Text>
                    <Card.Link href="" target='_blank'>View</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="tiny">Last updated February 26, 2019</small>
                </Card.Footer>
            </Card>

            <Card data-aos="fade-up" className='bg shadow' text='white'>
                <Card.Body>
                    <Card.Title>Project 03</Card.Title>
                    <Card.Text>
                    We have way more than five senses, we have at least twice as many and then some. But they're not perfect.
                    </Card.Text>
                    <Card.Link href="" target='_blank'>View</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="tiny">Last updated January 20, 2019</small>
                </Card.Footer>
            </Card>

            <Card data-aos="fade-up" className='bg shadow' text='white'>
                <Card.Body>
                    <Card.Title>Project 04</Card.Title>
                    <Card.Text>
                    There are optical illusions, audio illusions, temperature sensation illusions, even tactile illusions. Can you turn your tongue upside down?
                    </Card.Text>
                    <Card.Link href="" target='_blank'>View</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="tiny">Last updated March 19, 2018</small>
                </Card.Footer>
            </Card>

        </CardDeck>
    )
}
export default Cards;
AOS.init();