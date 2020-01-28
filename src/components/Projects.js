import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Cards from '../components/Cards';

import AOS from 'aos/dist/aos';

class Projects extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    title: "Project 01",
                    description: "For instance, your kinesthetic sense, proprioception. This is what the police evaluate during a field sobriety test.",
                    link: "",
                    updated: "June 17, 2019"
                },
                {
                    title: "Project 02",
                    description: "It allows you to tell where your fingers and arms and head and legs in your body is all in relation to each other without having to look or touch other things.",
                    link: "",
                    updated: "February 26, 2019"
                },
                {
                    title: "Project 03",
                    description: "We have way more than five senses, we have at least twice as many and then some. But they're not perfect.",
                    link: "",
                    updated: "January 20, 2019"
                },
                {
                    title: "Project 04",
                    description: "There are optical illusions, audio illusions, temperature sensation illusions, even tactile illusions. Can you turn your tongue upside down?",
                    link: "",
                    updated: "March 19, 2018"
                }
            ]
        }
    }

    render(){

        let projectList = this.state.projects.map(project => {
            return (
                <Cards project={project}/>
            )
        })

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

                {projectList}

            </CardDeck>
        )
    }
}
export default Projects;
AOS.init();