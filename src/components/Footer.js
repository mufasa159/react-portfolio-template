  
import React from 'react';
import Container from 'react-bootstrap/Container';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import dribbble from '../assets/icons/dribbble.svg';
import linkedin from '../assets/icons/linkedin.svg';

function Footer() {

    return(
        <footer className="mt-5 border-top">
            <Container fluid={true}>
                <div className='mt-3 d-flex justify-content-center' >
                    <a className='mr-2' rel="noopener noreferrer" href="" target='_blank'><img alt="Dribbble" className='media' src={dribbble} /></a>
                    <a className='mr-2' rel="noopener noreferrer" href="" target='_blank'><img alt="Facebook" className='media' src={facebook} /></a>
                    <a className='mr-2' rel="noopener noreferrer" href="" target='_blank'><img alt="Twitter" className='media' src={twitter} /></a>
                    <a className='mr-2' rel="noopener noreferrer" href="" target='_blank'><img alt="Instagram" className='media' src={instagram} /></a>
                    <a className='mr-2' rel="noopener noreferrer" href="" target='_blank'><img alt="Github"  className='media' src={github} /></a>
                    <a className='mr-2' rel="noopener noreferrer" href="" target='_blank'><img alt="Linkedin" className='media' src={linkedin} /></a>
                </div>
                <small className="p-2 d-flex justify-content-center text-center">
                    Website created by Muhfasul Alam <br/>https://github.com/muhfasul159
                </small>
            </Container>
        </footer>
    );

}

export default Footer;