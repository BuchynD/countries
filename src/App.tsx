import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";
import CountryGrid from "./components/CountryGrid";
import Error from "./components/Error";
import Loading from "./components/Loading";
import ICountry from "./types";

function App() {
  const url =
    "https://restcountries.com/v3.1/all?fields=name,flags,independent,region";

  const [error, setError] = useState("");

  const [countries, setCountries] = useState<ICountry[]>([]);
  const regions = Array.from(
    new Set(countries.map((country) => country.region)),
  );

  async function fetchCountries() {
    try {
      const { data } = await axios.get<ICountry[]>(url);
      data.sort((country1, country2) =>
        country1.name.common < country2.name.common ? -1 : 1,
      );
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
    <>
      {!countries.length && !error && <Loading />}
      {error && <Error error={error} />}
      {regions.map((region) => (
        <section key={region}>
          <h1 className="my-3 text-3xl">{region}</h1>
          <CountryGrid key={region}>
            {countries
              .filter((country) => country.region === region)
              .map((country) => (
                <CountryCard country={country} key={country.name.common} />
              ))}
          </CountryGrid>
        </section>
      ))}
    </>
  );
}

export default App;
