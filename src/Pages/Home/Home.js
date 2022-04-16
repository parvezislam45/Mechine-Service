import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">David Machine Service</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Services</Nav.Link>
      <Nav.Link href="#pricing">Blogs</Nav.Link>
      <Nav.Link href="#pricing">About Me</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Sign -Up</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Home;