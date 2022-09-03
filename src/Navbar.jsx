import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link } from 'react-router-dom'

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        
        
          <Nav className="me-auto">
          <Nav.Link href="/addvm">CREATE VM</Nav.Link>
            <Nav.Link href="/listvm">VMs</Nav.Link>
            <Nav.Link href="/listserver">HOSTS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;