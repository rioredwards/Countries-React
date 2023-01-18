import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
      <Container fluid className="d-flex">
        <Row>
          {countries.map((country) => (
            <CountryCard key={country.id} {...country} />
          ))}
        </Row>
      </Container>
    </main>
  );
}

const countryModel = {
  id: 1,
  continent: null,
  iso2: 'BQ',
  iso3: 'BES',
  local_name: null,
  name: 'Bonaire, Sint Eustatius and Saba',
};
