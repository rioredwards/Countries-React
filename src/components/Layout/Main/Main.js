import { useEffect, useState } from 'react';
import { fetchCountries } from '../../../services/country.js';

export default function Main() {
  const [country, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);

  return (
    <main className="bg-white">
      <p>Hello World</p>
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
