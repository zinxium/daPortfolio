import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import '../styles/Projects.css'

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '🛍️',
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates. Built with React, Firebase, and Material-UI for seamless team collaboration.',
    tech: ['React', 'Firebase', 'Material-UI', 'Redux'],
    image: '✓',
    link: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with detailed forecasts. Uses OpenWeather API and provides location-based weather information with smooth animations.',
    tech: ['React', 'API', 'CSS3', 'Geolocation'],
    image: '🌦️',
    link: '#'
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics. Real-time data visualization with charts and insights. Built with React and Chart.js.',
    tech: ['React', 'Chart.js', 'API', 'Bootstrap'],
    image: '📊',
    link: '#'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website showcasing projects and skills. Optimized for SEO and mobile devices with smooth scrolling.',
    tech: ['React', 'Bootstrap', 'CSS', 'Responsive'],
    image: '💼',
    link: '#'
  },
  {
    id: 6,
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered features. Built with WebSocket support and modern UI components for smooth messaging.',
    tech: ['React', 'WebSocket', 'Node.js', 'AI API'],
    image: '💬',
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Featured Projects</h2>
          <p className="lead text-muted">Showcase of my recent work and expertise</p>
        </div>

        <Row className="g-4">
          {projectsData.map(project => (
            <Col lg={4} md={6} key={project.id}>
              <Card className="project-card h-100 shadow-sm">
                <div className="project-image">{project.image}</div>
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-3">{project.description}</Card.Text>
                  <div className="tech-badges mb-3">
                    {project.tech.map((tech, idx) => (
                      <Badge bg="primary" className="me-2 mb-2" key={idx}>{tech}</Badge>
                    ))}
                  </div>
                </Card.Body>
                <Card.Footer className="bg-white border-top-0">
                  <Button variant="primary" className="w-100" href={project.link}>
                    View Project
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
