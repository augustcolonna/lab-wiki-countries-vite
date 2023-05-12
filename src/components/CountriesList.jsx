
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiURL = "https://ih-countries-api.herokuapp.com/countries"


const CountriesList = () => {
  const [fetching, setFetching] = useState(true);
  const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setCountries(response.data);
            setFetching(false);
        });
    }, []);
  return (
    <>
        {fetching && <p>Loading ...</p>}
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
