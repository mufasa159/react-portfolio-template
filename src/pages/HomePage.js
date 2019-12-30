import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Cards from '../components/Cards';
import AOS from '../../node_modules/aos/dist/aos';
import ControlledCarousel from '../components/Carousel';

function HomePage(){
    return(
        <div>
            <div className='main' data-aos="fade-up">
                <p>Hey Vsauce,</p>
                <h1><span>Michael</span> here</h1>
                <p>Where are your fingers? Seriously. It's a pretty easy question. You should be able to answer it. But how do you know? How does anyone know anything?</p>
                <ButtonToolbar fluid={true} ml-2>
                    <Button variant="outline-success" href='' target='_blank'>Resume</Button>
                    <Button variant="outline-success" href='' target='_blank'>Hire Me</Button>
                    <Button variant="outline-success" href='' target='_blank'>Github</Button>
                </ButtonToolbar>
            </div>
            
            <div className='portfolio' fluid={true}><Cards /></div>
            <ControlledCarousel />

        </div>
    );
}
export default HomePage;
AOS.init();