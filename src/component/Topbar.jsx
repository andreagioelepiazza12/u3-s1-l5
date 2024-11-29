
import { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { BsSearch, BsBellFill } from "react-icons/bs";
import logo from "../assets/netflix_logo.png"
import avatar from "../assets/avatar.png"

class Topbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand href="#">
            <img
              src={logo}
              alt="Netflix Logo"
              className="logo img-fluid"
              style={{ height: "40px" }}
            />
          </Navbar.Brand>

          {/* Toggler */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Navbar Links */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="active">
                Home
              </Nav.Link>
              <Nav.Link href="#">TV Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>

            {/* Right-side Items */}
            <Nav className="ms-auto">
              {/* Search Icon */}
              <Nav.Link href="#">
                <BsSearch size={20} />
              </Nav.Link>

              {/* Kids */}
              <Nav.Link href="#">KIDS</Nav.Link>

              {/* Notifications Icon */}
              <Nav.Link href="#" className="active">
                <BsBellFill size={20} />
              </Nav.Link>

              {/* Dropdown */}
              <NavDropdown
                title={
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="avatar img-fluid"
                    style={{ height: "30px", borderRadius: "50%" }}
                  />
                }
                id="nav-dropdown"
                align="end"
                className="text-white"
              >
                <NavDropdown.Item href="#">Family</NavDropdown.Item>
                <NavDropdown.Item href="#">Adults</NavDropdown.Item>
                <NavDropdown.Item href="#">Gianni</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Topbar;