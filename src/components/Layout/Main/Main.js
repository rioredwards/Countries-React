import { Alert, Container, Row } from 'react-bootstrap';
import { useCountries } from '../../../hooks/useCountries.js';
import CountryCard from '../../CountryCard/CountryCard.js';

export default function Main() {
  const { countries, error } = useCountries();

  return (
    <main>
      <Alert show={!!error} className="mx-4" variant="danger">
        {error}
      </Alert>
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
