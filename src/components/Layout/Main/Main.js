import { useState } from 'react';
import { Alert, Container, Row } from 'react-bootstrap';
import { useCountries } from '../../../hooks/useCountries.js';
import CountryCard from '../../CountryCard/CountryCard.js';

export default function Main() {
  const { countries, error } = useCountries();
  const [continent, setContinent] = useState('all');
  const continents = [
    ...new Set(countries.filter(({ continent }) => continent).map(({ continent }) => continent)),
  ];

  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  return (
    <main>
      <Alert show={!!error} className="mx-4" variant="danger">
        {error}
      </Alert>
      <select onChange={(e) => setContinent(e.target.value)}>
        <option value="all">all</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
      <Container fluid className="d-flex my-3">
        <Row className="px-lg-20">
          {filtered.map((country) => (
            <CountryCard key={country.id} {...country} />
          ))}
        </Row>
      </Container>
    </main>
  );
}
