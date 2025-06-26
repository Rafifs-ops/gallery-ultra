import { Nav, Container, Navbar, Button, NavDropdown } from "react-bootstrap"

const NavHead = ({ isNightMode, setIsNightMode }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Gallery Ultra</Navbar.Brand>
        <Nav className="ms-auto">
          <NavDropdown title="Season" id="basic-nav-dropdown">
            <NavDropdown.Item href="#showa">Showa</NavDropdown.Item>
            <NavDropdown.Item href="#heisei">Heisei</NavDropdown.Item>
            <NavDropdown.Item href="#reiwa">Reiwa</NavDropdown.Item>
          </NavDropdown>
          {isNightMode ? (
            <Button variant="warning" onClick={() => setIsNightMode(false)}>
              Light Mode
            </Button>
          ) : (
            <Button variant="warning" onClick={() => setIsNightMode(true)}>
              Night Mode
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavHead

