import React from "react"
import { Link } from 'react-router-dom';
import { Nav, Container, Navbar, Button, NavDropdown } from "react-bootstrap"
import logoNav from "./img/logo-nav.png"

const NavHead = ({ isNightMode, setIsNightMode }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logoNav}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />{' '}Gallery Ultra
        </Navbar.Brand>
        <Nav className="ms-auto">
          <NavDropdown title="Season" id="basic-nav-dropdown">
            <NavDropdown.Item href="#showa">Showa</NavDropdown.Item>
            <NavDropdown.Item href="#heisei">Heisei</NavDropdown.Item>
            <NavDropdown.Item href="#reiwa">Reiwa</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/EvilUltra">
              EvilUltra
            </NavDropdown.Item>
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

export default React.memo(NavHead);