import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function NavBarHero() {
  return (
    <Navbar expand="md" className=" py-3 shadow-sm">
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand href="/" className=" fw-bold fs-4">
          Tawz<span className="text-primary">ify</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarMain" />

        <Navbar.Collapse id="navbarMain">
          <Nav className="ms-auto align-items-center gap-2 mt-3 mt-md-0">
            <Nav.Link href="/">Home</Nav.Link>

            <div className=" d-none d-md-block" />
            <Nav.Link href="/register">Sign In</Nav.Link>
            <Button
              href="/login"
              variant="primary"
              size="sm"
              className="px-4 rounded-pill"
            >
              Log In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarHero;
