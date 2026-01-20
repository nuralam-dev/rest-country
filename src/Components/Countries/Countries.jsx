import { use } from "react";
import Country from "./Country";

import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);
  console.log(countries);
  return (
    <div>
      <h1 className="h">Rest Countries : {countries.length}</h1>
      <div className="grid">
        {countries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
