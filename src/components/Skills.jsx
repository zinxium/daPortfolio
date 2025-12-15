import { Container, Row, Col, ProgressBar } from 'react-bootstrap'
import '../styles/Skills.css'

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Bootstrap', level: 90 }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Express.js', level: 85 },
      { name: 'SQL', level: 80 }
    ]
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'REST APIs', level: 90 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Problem Solving', level: 95 }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section py-5 bg-light">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Skills & Technologies</h2>
          <p className="lead text-muted">Technologies and tools I work with</p>
        </div>

        <Row className="g-4">
          {skillsData.map((category, idx) => (
            <Col lg={4} md={6} key={idx}>
              <div className="skill-category">
                <h4 className="fw-bold mb-4">{category.category}</h4>
                {category.skills.map((skill, i) => (
                  <div key={i} className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="fw-medium">{skill.name}</span>
                      <span className="text-primary fw-bold">{skill.level}%</span>
                    </div>
                    <ProgressBar 
                      now={skill.level} 
                      className="progress-bar-custom"
                      style={{ height: '8px' }}
                    />
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
