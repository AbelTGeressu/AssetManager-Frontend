import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">DashBoard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Assignments">Assignments</Nav.Link>
            <Nav.Link href="/Assets">Assets</Nav.Link>
            <Nav.Link href="/Contracts">Contracts</Nav.Link>
            
          </Nav>
          <Nav className="ms-auto">
          <Nav.Link href="/Employees">Manage Employees</Nav.Link>
          <Nav.Link href="/login">Settings</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
