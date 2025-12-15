import { Container, Row, Col } from 'react-bootstrap'
import '../styles/Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer bg-dark text-white py-5">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Cynthia Zinsou</h5>
            <p className="text-muted">
              Full-stack developer passionate about creating amazing web experiences.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold mb-3">Contact</h5>
            <p className="text-muted mb-1"><a href="mailto:zinsouanne4@gmail.com" className="footer-link">zinsouanne4@gmail.com</a></p>
            <p className="text-muted">Cynthia Zinsou</p>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <div className="text-center text-muted">
          <p className="mb-0">
            © {currentYear} All rights reserved. Made with passion using React
          </p>
        </div>
      </Container>
    </footer>
  )
}
