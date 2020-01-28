import React from 'react';
import Card from 'react-bootstrap/Card';

import AOS from 'aos/dist/aos';

class Cards extends React.Component {
    render(){
        return (
            <Card data-aos="fade-up" className='bg shadow' text='white'>
                <Card.Body>
                    <Card.Title>{this.props.project.title}</Card.Title>
                    <Card.Text>{this.props.project.description}</Card.Text>
                    <Card.Link href={this.props.project.link} target='_blank'>View</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="tiny">Last updated {this.props.project.updated}</small>
                </Card.Footer>
            </Card>
        )
    }
}

export default Cards;
AOS.init();