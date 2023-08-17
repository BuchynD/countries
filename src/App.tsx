import React from 'react';
import CountryCard from './components/CountryCard';
import CountryGrid from './components/CountryGrid';

const ukraine = {
  "flags": {
    "png": "https://flagcdn.com/w320/ua.png",
    "svg": "https://flagcdn.com/ua.svg",
    "alt": "The flag of Ukraine is composed of two equal horizontal bands of blue and yellow."
  },
  "name": {
    "common": "Ukraine",
    "official": "Ukraine",
    "nativeName": {
      "ukr": {
        "official": "Україна",
        "common": "Україна"
      }
    }
  }
}

function App() {
  return (
    <div>
      <CountryGrid>
        <CountryCard country={ukraine} />
        <CountryCard country={ukraine} />
        <CountryCard country={ukraine} />
        <CountryCard country={ukraine} />
        <CountryCard country={ukraine} />
        <CountryCard country={ukraine} />
        <CountryCard country={ukraine} />
        <CountryCard country={ukraine} />
        <CountryCard country={ukraine} />
      </CountryGrid>
    </div>
  );
}

export default App;
