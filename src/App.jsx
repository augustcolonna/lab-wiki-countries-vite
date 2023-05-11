import "./App.css";
import countriesJson from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [allCountries, setallCountry] = useState(countriesJson);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={allCountries} />
      <Routes>
        <Route path="/:countryId" element={<CountryDetails countries={allCountries}/>} />
      </Routes>
    </div>
  );
}

export default App;

