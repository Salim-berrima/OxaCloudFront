import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link } from 'react-router-dom'
import Login from './Login';
import cookie from "js-cookie";


function ColorSchemesExample() {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
    
  };
  const handlelogout =  () => {

    removeCookie("jwt");
    window.location.href = '/';
  }
  return (
    <>

    
      <Navbar bg="dark" variant="dark">
        <Container>
        
          <Nav className="me-auto">
            <Nav.Link href="/addvm">CREATE VM</Nav.Link>
            <Nav.Link href="/listvm">VMs</Nav.Link>
            <Nav.Link href="/listserver">HOSTS</Nav.Link>
            <Nav.Link onClick={handlelogout}>SIGN OUT</Nav.Link>
          </Nav>


        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;