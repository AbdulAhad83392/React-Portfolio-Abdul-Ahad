import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navz() {
  return (
    <Navbar expand="lg" style={{background:'green'}}>
      <Container className='contain'>
        <Navbar.Brand href="#home">Propeties</Navbar.Brand>
        <Navbar.Brand href="#home">Plot-finder</Navbar.Brand>
        <Navbar.Brand href="#home">Blog</Navbar.Brand>
        <Navbar.Brand href="#home">Map</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <button  type="submit">+Add property</button>  --
          <button style={{color:'white', backgroundColor:'transparent'}}  type="submit">Property id</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navz;