import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/country.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
      } catch (error) {
        setError('Uh Oh! Something went wrong!');
      }
    };
    fetchData();
  }, []);

  return { countries, error };
}
