import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function NavBar() {
  return (
    <Navbar expand="md" className="py-3">
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand href="/" className=" fw-bold fs-4">
          Tawz<span className="text-primary">ify</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarMain" />

        <Navbar.Collapse id="navbarMain">
          <Nav className="ms-auto align-items-center gap-1 mt-3 mt-md-0">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/saved">
              <i className="bi bi-bookmark me-1"></i>Saved Jobs
            </Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

            <Nav.Link href="/" className="text-danger">
              <i className="bi bi-box-arrow-right me-2"></i>Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
