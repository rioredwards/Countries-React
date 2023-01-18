import React from 'react';
import { Col } from 'react-bootstrap';

export default function CountryCard({ name, id }) {
  return (
    <Col sm={6} md={4} lg={4} xl={3}>
      <div>{name}</div>
      <div>{id}</div>
    </Col>
  );
}
