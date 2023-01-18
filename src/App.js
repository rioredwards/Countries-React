import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <Container fluid className="px-0">
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>
      <Row className="">
        <Col>Main</Col>
      </Row>
      <Row>
        <Col>
          <Footer></Footer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
