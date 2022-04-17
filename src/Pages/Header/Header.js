import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand className='header1fs-4 fw-bold ' style={{ color: 'DarkGrey' }}>David Machine Service</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto g-5">
                            <Nav.Link as={NavLink} to="/home"className="fs-4 fw-bold"style={{ color: 'DarkGrey'}}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/services" style={{ color: 'DarkGrey' }} className="fs-4 fw-bold">Services</Nav.Link>
                            <Nav.Link as={Link} to="/blogs" style={{ color: 'DarkGrey' }} className="fs-4 fw-bold">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about" style={{ color: 'DarkGrey' }} className="fs-4 fw-bold">About Me</Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav.Link as={Link} to="/signup" style={{ color: 'DarkGrey' }} className="fs-4 fw-bold">Sign -Up</Nav.Link>
                            {
                                user ?
                                    <Nav.Link onClick={handleSignOut} style={{ color: 'DarkGrey' }} className="fs-4 fw-bold">Log Out</Nav.Link>
                                    :
                                    <Nav.Link onClick={() => navigate('/login')} style={{ color: 'DarkGrey' }} className="fs-4 fw-bold">Login</Nav.Link>

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