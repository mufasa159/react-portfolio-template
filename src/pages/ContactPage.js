import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AOS from '../../node_modules/aos/dist/aos';

function ContactPage(){
    return(
        <div className='main' data-aos="fade-up">
            <h1>Hit Me Up</h1>
            <p>I reply fast. Let me know if you have any questions or feedback</p>

            <Form action='https://formspree.io/' method="POST">

                <Form.Group controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Science" required/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="_replyto" placeholder="science@god.com" required/>
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>Message</Form.Label>
                    <Form.Control input as="textarea" name="message" placeholder="Thanks." required />
                </Form.Group>

                <Button variant="outline-success" type="submit">
                    Send
                </Button>
            </Form>
        </div>
    );
}
export default ContactPage;
AOS.init();