import ICountry from "../types";

interface CountryCardProps {
    country: ICountry
}

export default function CountryCard({ country }: CountryCardProps) {
    return (
        <article className="bg-emerald-300 rounded p-2 border border-emerald-700 shadow-2xl">
            <img src={country.flags.png} alt={country.flags.alt} className="m-auto" />
            <h3 className="text-xl font-bold text-center">{country.name.common}</h3>
        </article>
    );
}