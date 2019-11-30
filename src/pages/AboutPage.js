import React from 'react';
import AOS from '../../node_modules/aos/dist/aos';

function AboutPage(){
    return(
        <div className="main" data-aos="fade-up">
            <h1>About Me</h1>
            <p>I am currently working as an intern at a software company named <span>The Glass Files</span>. However, I'm always interested in new opportunities to learn more things and explore. </p>
        </div>
        

    );
}
export default AboutPage;
AOS.init();