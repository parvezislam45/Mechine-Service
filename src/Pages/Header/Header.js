import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth'
import Font from 'react-font';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto g-5">
                            <Nav.Link as={NavLink} to="/home"className="fs-4 fw-bold"style={{ color: 'DarkGrey'}}><Font family='Roboto' cursive weight={800}>
                                        <p>Home</p>
                                    </Font></Nav.Link>
                            <Nav.Link as={Link} to="/services" style={{ color: 'DarkGrey' }} className="fs-4 fw-bold"><Font family='Roboto' cursive weight={800}>
                                        <p>Services</p>
                                    </Font></Nav.Link>
                            <Nav.Link as={Link} to="/blogs" style={{ color: 'DarkGrey' }} className="fs-4 fw-bold"><Font family='Roboto' cursive weight={800}>
                                        <p>Blogs</p>
                                    </Font></Nav.Link>
                            <Nav.Link as={Link} to="/about" style={{ color: 'DarkGrey' }} className="fs-4 fw-bold"><Font family='Roboto' cursive weight={800}>
                                        <p>About Me</p>
                                    </Font></Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav.Link as={Link} to="/signup" style={{ color: 'DarkGrey' }} className="fs-4 fw-bold"><Font family='Roboto' cursive weight={800}>
                                        <p>Sign-In</p>
                                    </Font></Nav.Link>
                            {
                                user ?
                                    <Nav.Link onClick={handleSignOut} style={{ color: 'DarkGrey' }} className="fs-4 fw-bold"><Font family='Roboto' cursive weight={800}>
                                    <p>Log Out</p>
                                </Font></Nav.Link>
                                    :
                                    <Nav.Link onClick={() => navigate('/login')} style={{ color: 'DarkGrey' }} className="fs-4 fw-bold"><Font family='Roboto' cursive weight={800}>
                                    <p>Login</p>
                                </Font></Nav.Link>

                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;