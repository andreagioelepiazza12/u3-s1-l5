
import { Container, Row, Col, Dropdown, ButtonGroup, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container fluid className="bg-dark text-white w-100 p-3 m-0 me-0">
    <Row className="justify-content-between">
      <Col xs={6} className="d-flex">
        <Col className="fs-4">TV Shows</Col>
        <Col className="ms-3">
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="text-white border-white rounded-0">
              Genres
            </Dropdown.Toggle>
  
            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#">Family</Dropdown.Item>
              <Dropdown.Item href="#">Adults</Dropdown.Item>
              <Dropdown.Item href="#">Gianni</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Col>
  
      <Col id="buttonConteiner" xs={6} className="d-flex justify-content-end">
        <ButtonGroup>
          <Button variant="outline-dark" className="p-1 border">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
            </svg>
          </Button>
          <Button variant="outline-dark" className="p-1 border">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
            </svg>
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  </Container>
  );
};

export default Hero;