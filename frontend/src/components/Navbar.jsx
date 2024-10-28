import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className=" bg-transparent">
        <Container>
          <Navbar.Brand className=" text-white" href="#home">
            Muhammad Afham
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto">
              <Nav.Link className=" text-white" href="#home">
                Blog
              </Nav.Link>
              <Nav.Link className=" text-white" href="#link">
                Project
              </Nav.Link>
              <Nav.Link className=" text-white" href="#link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar;
