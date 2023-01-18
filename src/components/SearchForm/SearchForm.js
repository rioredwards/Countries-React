import { Col, Container, Form, Row } from 'react-bootstrap';

export default function SearchForm({ continents, setContinent }) {
  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col xs={8} md={6} lg={4}>
          <Form.Label as="h4" className="text-center" htmlFor="inputPassword5">
            Continent
          </Form.Label>
          <Form.Select onChange={(e) => setContinent(e.target.value)}>
            <option value="all">all</option>
            {continents.map((continent) => (
              <option key={continent} value={continent}>
                {continent}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
