import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar variant="dark" style={{ backgroundColor: '#0F084B' }}>
      <Container>
        <Navbar.Brand>Finn</Navbar.Brand>
        <img 
          src='./headphones.png' 
          width={40}
          height={40}
          alt="headphones"
        />
        <Navbar.Text>but music...</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;
