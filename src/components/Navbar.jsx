import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <BootstrapNavbar bg="dark" expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <BootstrapNavbar.Brand href="#" className="fw-bold fs-4 d-flex align-items-center justify-content-between gap-2">
          <span className="brand-name">CYNTHIA</span> 
          <span className="brand-name">ZINSOU</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}
