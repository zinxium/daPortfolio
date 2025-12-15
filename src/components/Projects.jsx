import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import '../styles/Projects.css'

const projectsData = [
  {
    id: 1,
    title: 'Soul Connection',
    description: 'Social networking platform connecting people with shared interests and passions. Built with React frontend and Django backend, featuring real-time messaging and community features.',
    tech: ['React', 'Django', 'PostgreSQL', 'WebSocket'],
    image: 'SC',
    link: '#'
  },
  {
    id: 2,
    title: 'Shopiflow',
    description: 'E-commerce platform for local businesses and merchants. Built with React, featuring product management, shopping cart, order tracking, and local seller integration.',
    tech: ['React', 'Laravel', 'MySQL', 'Stripe'],
    image: 'SF',
    link: '#'
  },
  {
    id: 3,
    title: 'Area',
    description: 'Automation and automation platform for task workflows. Built with React frontend, allowing users to create and manage automated workflows and integrations.',
    tech: ['React', 'API', 'JavaScript', 'Responsive'],
    image: 'AR',
    link: '#'
  },
  {
    id: 4,
    title: 'Where2Go',
    description: 'Travel and destination discovery application. Built with React frontend, featuring interactive maps, destination recommendations, and travel planning tools.',
    tech: ['React', 'API', 'Maps', 'Responsive'],
    image: 'W2G',
    link: '#'
  },
  {
    id: 5,
    title: 'Legendary Cave',
    description: 'Photo gallery and portfolio showcase for my promotion cohort. Built with React frontend, featuring image galleries, student profiles, and memories from our time together.',
    tech: ['React', 'JavaScript', 'Responsive', 'Gallery'],
    image: 'LC',
    link: '#'
  },
  {
    id: 6,
    title: 'KPS Groupe Website',
    description: 'Professional corporate website for KPS Groupe. Built with Vue.js frontend and Appwrite backend, featuring company information, services showcase, and client portfolio.',
    tech: ['Vue.js', 'Appwrite', 'Responsive', 'SEO'],
    image: 'KPS',
    link: 'https://kpsgroupe.com'
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
