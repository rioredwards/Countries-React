import React from 'react';
import { Col, Card } from 'react-bootstrap';

export default function CountryCard({ name, iso2 }) {
  return (
    <Col sm={6} md={4} lg={4} xl={3}>
      <Card className="my-2" bg="light" style={{ width: '12rem', height: '12rem' }}>
        <Card.Header className="text-center">{name}</Card.Header>
        <Card.Body className="d-flex justify-content-center align-items-center">
          <Card.Img
            style={{ width: '8rem', maxHeight: '6rem' }}
            src={`https://flagcdn.com/216x162/${iso2.toLowerCase()}.png`}
          />
        </Card.Body>
      </Card>
    </Col>
  );
}
