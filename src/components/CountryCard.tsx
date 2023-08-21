import ICountry from "../types";

interface CountryCardProps {
  country: ICountry;
}

export default function CountryCard({ country }: CountryCardProps) {
  const countryLanguage = Object.keys(country.name.nativeName ?? {})[0];

  return (
    <article
      className={`break-words rounded border p-2 shadow-lg ${
        country.independent ? "independent" : "dependent"
      }`}
    >
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className="m-auto h-20"
      />
      <h3 className="text-center text-xl font-bold">{country.name.common}</h3>
      {country.name.nativeName && (
        <strong className="block text-center text-lg font-bold">
          {country.name.nativeName[countryLanguage]?.common}
        </strong>
      )}
    </article>
  );
}
