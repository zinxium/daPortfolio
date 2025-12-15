import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import '../styles/Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Let's Connect</h2>
          <p className="lead text-muted">Have a project in mind? Let's talk!</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={6}>
            <div className="contact-box p-5">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="form-control-custom"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="form-control-custom"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="form-control-custom"
                    required
                  />
                </Form.Group>

                <Button 
                  type="submit" 
                  className="btn-custom btn-primary w-100 py-3 fw-bold"
                  size="lg"
                >
                  Send Message
                </Button>
              </Form>

              <div className="social-links mt-5 text-center">
                <p className="text-muted mb-3">Or connect with me on:</p>
                <div className="d-flex justify-content-center gap-3">
                  <a href="#" className="social-link">GitHub</a>
                  <a href="#" className="social-link">LinkedIn</a>
                  {/* <a href="#" className="social-link">Twitter</a> */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
