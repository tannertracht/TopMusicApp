import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar variant="dark" style={{ backgroundColor: '#0F084B' }}>
      <Container>
        <Navbar.Brand>Top iTunes Music</Navbar.Brand>
        <img 
          src='./headphones.png' 
          width={40}
          height={40}
          alt="headphones"
        />
        <Navbar.Text>By Tanner</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;
