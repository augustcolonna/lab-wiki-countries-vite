import { React } from "react";
import { Link } from "react-router-dom";

const CountriesList = ({ countries }) => {
  return (
    <>
      <ul>
        {countries.map((country) => {
          const countryLowerCase = country.alpha2Code.toLowerCase();
          return (
            <div key={country.name.common}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${countryLowerCase}.png`}
                alt=""
              />
              <li>
                <Link to={`/${country.alpha3Code}`}>{country.alpha3Code}</Link>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default CountriesList;
