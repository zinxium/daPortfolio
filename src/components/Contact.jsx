import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Initialize EmailJS with your public key from .env
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
      })
      
      setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ type: 'danger', message: 'Failed to send message. Please try again.' })
      console.error('Error sending email:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="display-4 fw-bold mb-3 section-title">Let's Connect</h2>
          <p className="lead text-muted">Have a project in mind? Let's talk!</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={6}>
            <div className="contact-box p-5">
              {status.message && (
                <Alert variant={status.type} dismissible onClose={() => setStatus({ type: '', message: '' })}>
                  {status.message}
                </Alert>
              )}
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
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>

              <div className="social-links mt-5 text-center">
                <p className="text-muted mb-3">Or connect with me on:</p>
                <div className="d-flex justify-content-center gap-3">
                  <a href="https://github.com/cyndzx02" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                  <a href="https://github.com/zinxium" target="_blank" rel="noopener noreferrer" className="social-link">GitHub 2</a>
                  <a href="https://www.linkedin.com/in/cynthia-zinsou-656715258" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
