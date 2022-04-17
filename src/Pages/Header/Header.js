import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">David Machine Service</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/signup">Sign -Up</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            {
                                user?
                                <Nav.Link>Sign Out</Nav.Link>
                                :
                                <button onClick={()=>navigate('/login')}>Login</button>
                                
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h1>David Machine Service</h1>
        </div>
    );
};

export default Header;