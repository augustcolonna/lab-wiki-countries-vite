import { React } from "react";
import { useParams, Link } from "react-router-dom";

const CountryDetails = ({ countries }) => {
  const { countryId } = useParams();

  const filteredCountry = countries.filter((country) => {
    return country.alpha3Code === countryId;
  });

  return (
    <>
      <div className="col-7">
        <h1>{filteredCountry[0].name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{filteredCountry[0].capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {filteredCountry[0].area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {filteredCountry[0].borders.map((country) => {
                    return (
                    <li key={country}>
                        <Link to={`/${country}`}>{country}</Link>
                    </li>
                    )
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CountryDetails;
