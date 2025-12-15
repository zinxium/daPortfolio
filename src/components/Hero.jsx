import { Container, Row, Col, Button } from 'react-bootstrap'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <h1 className="display-3 fw-bold mb-4">
              Hi, I'm <span className="gradient-text">Cynthia Zinsou</span>
            </h1>
            <h2 className="h4 fw-light mb-4 text-white-50">Full Stack Developer</h2>
            <p className="lead mb-4 text-muted">
              Creating beautiful, functional web experiences with modern technologies. 
              Passionate about clean code and user-centered design.
            </p>
            <div className="d-flex gap-3">
              <Button size="lg" className="btn-custom btn-primary">
                View My Work
              </Button>
              <Button size="lg" className="btn-custom btn-outline-primary">
                Get In Touch
              </Button>
            </div>
          </Col>
          <Col lg={6} className="hero-image">
            <div className="profile-image-container">
              <img 
                src="https://via.placeholder.com/300x300?text=Your+Photo" 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
