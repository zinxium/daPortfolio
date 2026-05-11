import { Container, Row, Col, Badge } from 'react-bootstrap'
import '../styles/Certifications.css'

const certificationsData = [
  {
    id: 1,
    title: 'Build a Data Warehouse with BigQuery Skill Badge',
    issuer: 'Google',
    issuerInitial: 'G',
    issuerClass: 'issuer-google',
    date: 'Apr 2026',
    credentialId: null
  },
  {
    id: 2,
    title: 'BigQuery Fundamentals for Snowflake Professionals',
    issuer: 'Google',
    issuerInitial: 'G',
    issuerClass: 'issuer-google',
    date: 'Apr 2026',
    credentialId: '23517629'
  },
  {
    id: 3,
    title: 'Hands-On Essentials: Data Engineering Workshop',
    issuer: 'Snowflake',
    issuerInitial: 'S',
    issuerClass: 'issuer-snowflake',
    date: 'Mar 2026',
    credentialId: '177816040'
  },
  {
    id: 4,
    title: 'Hands-On Essentials: Data Lake Workshop',
    issuer: 'Snowflake',
    issuerInitial: 'S',
    issuerClass: 'issuer-snowflake',
    date: 'Jan 2026',
    credentialId: null,
    skills: ['Snowflake stages', 'Querying staged data', 'File formats', 'Directory Tables', 'Marketplace', 'Datashare']
  },
  {
    id: 5,
    title: 'Hands-On Essentials: Collaboration, Marketplace & Cost Estimation Workshop',
    issuer: 'Snowflake',
    issuerInitial: 'S',
    issuerClass: 'issuer-snowflake',
    date: 'Jan 2026',
    credentialId: '170906475'
  },
  {
    id: 6,
    title: 'Hands-On Essentials: Data Warehousing Workshop',
    issuer: 'Snowflake',
    issuerInitial: 'S',
    issuerClass: 'issuer-snowflake',
    date: 'Dec 2025',
    credentialId: '170143678'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="display-4 fw-bold mb-3 section-title">Certifications</h2>
          <p className="lead text-muted">Professional credentials & continuous learning</p>
        </div>

        <Row className="g-4">
          {certificationsData.map(cert => (
            <Col lg={6} md={6} key={cert.id}>
              <div className="cert-card h-100">
                <div className={`cert-issuer-logo ${cert.issuerClass}`}>
                  {cert.issuerInitial}
                </div>
                <div className="cert-body">
                  <h5 className="cert-title">{cert.title}</h5>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">Issued: {cert.date}</p>
                  {cert.credentialId && (
                    <p className="cert-credential">
                      Credential ID: <span className="credential-id">{cert.credentialId}</span>
                    </p>
                  )}
                  {cert.skills && (
                    <div className="cert-skills mt-3">
                      {cert.skills.map((skill, idx) => (
                        <Badge bg="primary" className="me-2 mb-2" key={idx}>{skill}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
