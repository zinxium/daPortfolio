import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import shopiflowPreview from '../assets/shopiflow/Screenshot 2025-03-14 074813.png'
import spotfinderPreview from '../assets/spotfinder/Screenshot 2026-02-26 163819.png'
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
    imagePreview: shopiflowPreview,
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
  },
  {
    id: 7,
    title: 'BI Dashboard - IT Market Intelligence',
    description: 'Comprehensive business intelligence dashboard for monitoring IT job market trends. Features analytics on job missions, technologies, locations, companies, and salary trends. Includes consultant management with CRUD operations, real-time data visualization, role-based access control, and advanced filtering capabilities. Built to provide strategic insights for recruitment and market analysis.',
    tech: ['React', 'Dashboard', 'Analytics', 'Real-time Data', 'Role-Based Access'],
    image: 'BI-Dashboard',
    link: '#'
  },
  {
    id: 8,
    title: 'Bordeaux Guide',
    description: 'Local guide application for the Chartrons district and Gaming Campus area in Bordeaux. Curates the best leisure, health, dining, and commercial spots with a clean, modern interface tailored for students and residents.',
    tech: ['Vue 3', 'Vite', 'Tailwind CSS', 'Responsive'],
    image: 'BG',
    link: '#'
  },
  {
    id: 9,
    title: 'BRVM Advisor',
    description: 'AI-powered investment analysis assistant for the BRVM (West African regional stock exchange). Combines real-time market data with Claude AI and web search to provide intelligent insights, portfolio recommendations, and market trend analysis.',
    tech: ['Next.js', 'TypeScript', 'Claude API', 'AI', 'Finance'],
    image: 'BA',
    link: '#'
  },
  {
    id: 10,
    title: 'ELT E-commerce Pipeline',
    description: 'End-to-end ELT data pipeline processing 100k+ Brazilian e-commerce orders from the Olist dataset. Implements star schema modeling on Snowflake and BigQuery for advanced analytics, customer segmentation, and sales reporting.',
    tech: ['Python', 'Snowflake', 'BigQuery', 'SQL', 'pandas'],
    image: 'ELT',
    link: '#'
  },
  {
    id: 11,
    title: 'FruityX',
    description: 'Cross-platform desktop card-matching game for two players. Match fruits by taste, type, or joker cards with smooth animations, immersive sound effects, and live score tracking. Built as a native desktop app with Tauri for high performance.',
    tech: ['Vue 3', 'Tauri', 'Rust', 'TypeScript', 'Howler.js'],
    image: 'FYX',
    link: '#'
  },
  {
    id: 12,
    title: 'Munchit Refont',
    description: 'Complete frontend redesign of the Munchit food and dining application. Rebuilt the UI from the ground up with a modern component architecture, improved UX flows, and a responsive design system.',
    tech: ['React', 'TypeScript', 'Vite', 'Bootstrap', 'Tailwind CSS'],
    image: 'MUN',
    link: '#'
  },
  {
    id: 13,
    title: 'AgroNova',
    description: 'MVP marketplace platform connecting local farmers directly with consumers for the sale of fresh, organic agricultural products. Includes inventory management, secure payment integration via Interswitch, and a streamlined order workflow. Originally pitched at the Lagos Trip 2025.',
    tech: ['Vue 3', 'Node.js', 'Express', 'MySQL', 'Interswitch API'],
    image: 'AGN',
    link: '#'
  },
  {
    id: 14,
    title: 'SpotFinder',
    description: 'Mobile application for discovering, sharing, and rating places — restaurants, cafés, hotels, museums — in real time. Features include geolocation, favorites, user reviews, and a social discovery feed. Built with React Native and a Django REST backend.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Django', 'NativeWind'],
    image: 'SPF',
    imagePreview: spotfinderPreview,
    link: '#'
  },

]

export default function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="display-4 fw-bold mb-3 section-title">Featured Projects</h2>
          <p className="lead text-muted">Showcase of my recent work and expertise</p>
        </div>

        <Row className="g-4">
          {projectsData.map(project => (
            <Col lg={4} md={6} key={project.id}>
              <Card className="project-card h-100 shadow-sm">
                <div className="project-image">
                  {project.imagePreview ? (
                    <img src={project.imagePreview} alt={`${project.title} preview`} />
                  ) : (
                    project.image
                  )}
                </div>
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
