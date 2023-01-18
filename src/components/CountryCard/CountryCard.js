import React from 'react';
import { Col } from 'react-bootstrap';

export default function CountryCard({ name, iso2 }) {
  return (
    <Col sm={6} md={4} lg={4} xl={3}>
      <div>{name}</div>
      <img
        src={`https://flagcdn.com/216x162/${iso2.toLowerCase()}.png`}
        width="64"
        alt="South Africa"
      ></img>
    </Col>
  );
}
