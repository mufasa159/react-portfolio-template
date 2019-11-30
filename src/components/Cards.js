import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import superMario from '../assets/images/superMario.jpg';
import ceaserCipher from '../assets/images/ceaserCipher.jpg';
import billyTheCat from '../assets/images/billyTheCat.jpg';
import animation from '../assets/images/animation.jpg';

import AOS from '../../node_modules/aos/dist/aos';

function Cards(){
    return(
        
        <CardDeck>
            <Card className="text-left bg" data-aos="fade-up" text='white'>
                <Card.Body>
                    <Card.Title>Coding Projects</Card.Title>
                    <Card.Text>
                        Over the past few years I have created many things that I'm proud of. These are a few examples. My skills are not at professional level yet but I try my best. I've passion for creating and hopefully oneday I'll get there.
                        Check out all my works on Github <a className='text-decoration-none' alt="Github" rel="noopener noreferrer" href="https://github.com/muhfasul159" target='_blank'>@muhfasul159</a> 
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card data-aos="fade-up" className='bg' text='white'>
                <Card.Img variant="top" src={superMario} />
                <Card.Body>
                    <Card.Title>Mario Bros</Card.Title>
                    <Card.Text>
                        A version of Super Mario game built with pygame and python. Only level one available.
                    </Card.Text>
                    <Card.Link href="https://repl.it/@muhfasul159/Super-Mario-or-Built-with-PyGame" target='_blank'>View</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="tiny">Last updated June 17, 2019</small>
                </Card.Footer>
            </Card>

            <Card data-aos="fade-up" className='bg' text='white'>
                <Card.Img variant="top" src={ceaserCipher} />
                <Card.Body>
                    <Card.Title>Ceaser Cipher</Card.Title>
                    <Card.Text>
                        An easy Ceaser Cipher program made with python for encrypting or decrypting messages.
                    </Card.Text>
                    <Card.Link href="https://ceaser-cipher-2.muhfasul159.repl.run/" target='_blank'>View</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="tiny">Last updated February 26, 2019</small>
                </Card.Footer>
            </Card>

            <Card data-aos="fade-up" className='bg' text='white'>
                <Card.Img variant="top" src={billyTheCat} />
                <Card.Body>
                    <Card.Title>Billy The Cat</Card.Title>
                    <Card.Text>
                        A chatbot with cat personality. More codes need to be added for full functionality.
                    </Card.Text>
                    <Card.Link href="https://chatbot-billy-the-cat.muhfasul159.repl.run/" target='_blank'>View</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="tiny">Last updated January 20, 2019</small>
                </Card.Footer>
            </Card>

            <Card data-aos="fade-up" className='bg' text='white'>
                <Card.Img variant="top" src={animation} />
                <Card.Body>
                    <Card.Title>Animation</Card.Title>
                    <Card.Text>
                        A basic animation I created in class when I was bored.
                    </Card.Text>
                    <Card.Link href="http://www.codeskulptor.org/#user44_NQq2JkWYuPUd1rs.py" target='_blank'>View</Card.Link>
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