import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Font from 'react-font';
import img from '../../../src/image/david.png'

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <div className="container mx-auto">
                <Card >
                    <Card.Img className=' image w-25 rounded mx-auto d-block' variant="top" src={img} />
                    <Card.Body>
                        <Font family='Roboto' cursive weight={800}>
                            <h1>Parvez Islam</h1>
                        </Font>
                        <Font family='Roboto' cursive weight={800}>
                            <h5>Qualificatin : B.S.C Engineer Mechanicle</h5>
                        </Font>
                        <Font family='Roboto' cursive weight={800}>
                            <h5>Institute :International University Of Business Agriculture & Technology</h5>
                        </Font>
                        <Font family='Roboto' cursive weight={800}>
                            <h5>Address : Home:152/1,Bilashdi</h5>
                        </Font>
                        <Font family='Roboto' cursive weight={800}>
                            <h5>City : Narsingdi</h5>
                        </Font>
                        <Font family='Roboto' cursive weight={800}>
                            <h5>Hobby : Play Cricket,Football,Carrome,Traveling</h5>
                        </Font>

                        <Card.Text>
                            <Font family='Roboto' cursive weight={800}>
                            <h3>Something About Me</h3>
                            </Font>
                            <Font family='Roboto' cursive weight={800}>
                            <h5>I am Parvez Islam. I was born in Narsingdi. My father is an established businessman. I grew up in Narsingdi from a young age. Anger is too much but respect for people as human beings does not give money power. State Forward people are not afraid to tell the truth. They are willing to do everything for Islam. I love Islam with my life.i have Love Playing Cricket Since Childhood !!</h5>
                            </Font>
                        </Card.Text>
                        <Font family='Roboto' cursive weight={800}>
                        <h1>Future Goal</h1>
                            </Font>
                            <Font family='Roboto' cursive weight={800}>
                            <h5>I want to be a good programmer. I want to do something new. I want to do something for Islam by using cyber.<br></br> I want to lead my life in an honest way. I always hope for Allah's help !! </h5>
                            </Font>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default About;