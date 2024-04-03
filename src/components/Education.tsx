import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import '../Styles/Education.css'; // Import CSS for education animation

const Education: React.FC = () => {
  return (
    <section id="education" className="education">
      <Container>
        <h2>Education</h2>
        <Row>
          <Col>
            <Card className="mb-3">
              <CardBody>
                <CardTitle tag="h3">Jadavpur University, Kolkata</CardTitle>
                <CardText>
                  Master in Computer Science and Engineering | Aug 2015 - March 2017 | GPA: 7.57
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card className="mb-3">
              <CardBody>
                <CardTitle tag="h3">Netaji Subhash Engineering College, Kolkata</CardTitle>
                <CardText>
                  Bachelor of Technology, Computer Science and Engineering | Aug 2011 - March 2015 | GPA: 8.04
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
