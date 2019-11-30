import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Cards from '../components/Cards';
import AOS from '../../node_modules/aos/dist/aos';
import Sound from '../components/Sound';
import CardsColumns from '../components/CardsColumns';
import ControlledCarousel from '../components/Carousel';

function HomePage(){
    return(
        <div>
            <div className='main' data-aos="fade-up">
                <p>Hi there,</p>
                <h1>I'm <span>Muhfasul</span></h1>
                
                <Sound />
                
                <p>A high school junior at Bronx Academy for Software Engineering with experience in Software Developing and Graphics Design.
                    I'm passionate about Technology, Art and Philosophy. I love memes.
                </p>
                <ButtonToolbar fluid={true} ml-2>
                    <Button variant="outline-success" href='/contact' target='_blank'>Resume</Button>
                    <Button variant="outline-success" href='/contact'>Hire Me</Button>
                    <Button variant="outline-success" href='/contact' target='_blank'>Memes</Button>
                    <Button variant="outline-success" href='https://open.spotify.com/user/21oqb4noyhzy4g4skuiguhxki?si=EjSvpMBbQHWzJ_3wHwp5Sg' target='_blank'>Playlists</Button>
                </ButtonToolbar>
            </div>
            
            <div className='portfolio' fluid={true}><Cards /></div>
            <CardsColumns />
            <ControlledCarousel />

        </div>
    );
}
export default HomePage;
AOS.init();