import { Container, Row, Col, Button } from 'react-bootstrap'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <h1 className="display-3 fw-bold mb-4">
              Hello, I'm a <span className="gradient-text">Full Stack Developer</span>
            </h1>
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
            <div className="animated-circle"></div>
            <div className="code-snippet">
              &lt;Developer /&gt;
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
