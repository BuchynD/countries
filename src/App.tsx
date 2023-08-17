import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import CountryCard from './components/CountryCard';
import CountryGrid from './components/CountryGrid';
import Error from './components/Error';
import ICountry from './types';

// const ukraine = {
//   "flags": {
//     "png": "https://flagcdn.com/w320/ua.png",
//     "svg": "https://flagcdn.com/ua.svg",
//     "alt": "The flag of Ukraine is composed of two equal horizontal bands of blue and yellow."
//   },
//   "name": {
//     "common": "Ukraine",
//     "official": "Ukraine",
//     "nativeName": {
//       "ukr": {
//         "official": "Україна",
//         "common": "Україна"
//       }
//     }
//   }
// }

function App() {
  const url = "https://restcountries.com/v3.1/all?fields=name,flags";

  const [error, setError] = useState("");

  const [countries, setCountries] = useState<ICountry[]>([]);

  async function fetchCountries() {
    try {
      const { data } = await axios.get<ICountry[]>(url);
      data.sort((country1, country2) => (country1.name.common < country2.name.common ? -1 : 1))
      setCountries(data);
      setError("");
    } catch (e: unknown) {
      console.log(e);
      const error = e as AxiosError;
      setError(`Error: ${error.message}`);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      {error && <Error error={error} />}
      <CountryGrid>
        {countries.map(country => <CountryCard country={country} key={country.name.common} />)}
      </CountryGrid>
    </div>
  );
}

export default App;
