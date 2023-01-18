import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/Layout/Header/Header.js';
import Footer from './components/Layout/Footer/Footer.js';
import Main from './components/Layout/Main/Main.js';

function App() {
  return (
    <Container fluid className="px-0">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Main />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
