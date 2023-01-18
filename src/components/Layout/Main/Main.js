import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { fetchCountries } from '../../../services/country.js';
import CountryCard from '../../CountryCard/CountryCard.js';

export default function Main() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);

  return (
    <main>
      <Container fluid className="d-flex my-3">
        <Row className="px-lg-20">
          {countries.map((country) => (
            <CountryCard key={country.id} {...country} />
          ))}
        </Row>
      </Container>
    </main>
  );
}
