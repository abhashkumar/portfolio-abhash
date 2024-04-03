import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import '../Styles/Experience.css'; // Import CSS for experience animation

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <Container>
        <h2>Experience & Projects</h2>
        <Row>
          <Col>
            <Card className="mb-3">
              <CardBody>
                <CardTitle tag="h3">Availity, Bangalore — Senior Software Engineer</CardTitle>
                <CardText>
                  May 2023—Current <br />
                  - Spearheaded the development of a common library of reusable components. <br />
                  - Designed and implemented storybooks for UI components. <br />
                  - Successfully migrated AngularJS application to ReactJS. <br />
                  - Developed Webhooks insurance master, PAM portal using React, TypeScript, and Reactstrap.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          {/* Add more experience cards as needed */}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
