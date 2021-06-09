import React from 'react';
import { Navbar, Nav, /*NavDropdown*/ } from 'react-bootstrap';

/**
* @author
* @function Header
**/ 

const Header = (props) => {
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>*/}
        </Nav>
        <Nav>
        <Nav.Link href="#deets">Signin</Nav.Link>

        </Nav>
    </Navbar.Collapse>
    </Navbar>
   )

 }

export default Header