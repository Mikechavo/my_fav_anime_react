import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <Navbar expand="lg" className="navbar-background">
      <Container>
        <Navbar.Brand as={Link} to="/"><h1 className="text-light">My Favorite Anime</h1></Navbar.Brand> {/* Use text-light class for white text */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link> {/* Use text-light class for white text */}
            <NavDropdown title={<span className="text-light">My Anime List</span>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/jjk" >Jujutsu Kaisen</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/berserk" >Berserk</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/goblin" >Goblin Slayer</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" className="text-light">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
