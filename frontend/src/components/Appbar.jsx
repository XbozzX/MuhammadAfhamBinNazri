import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Appbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className=" bg-transparent">
        <Container>
          <Navbar.Brand
            className=" text-white"
            // href="/MuhammadAfhamBinNazri/"
          >
            Muhammad Afham
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto">
              {/* <Nav.Link
                className=" text-white"
                // href="/MuhammadAfhamBinNazri/Project"
              >
                Project
              </Nav.Link> */}
              <Nav.Link
                className=" text-white"
                href="https://www.linkedin.com/in/muhammad-afham-bin-nazri-a83846190/"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Appbar;
