import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function SearchBar() {
  return (
    <Form className="d-flex justify-content-center text-center mt-1 p-2">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2 w-50 "
        aria-label="Search"
      />
      <Button variant="outline-primary">Search</Button>
    </Form>
  );
}

export default SearchBar;
