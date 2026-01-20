import'./Country.css'
const Country = ({ country }) => {
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  return (
    <div className='country'>
      <h2>Name : {country.name.common}</h2>
      <h3>Code Name : {country.cca2}</h3>
      <img src={country.flags.png} alt="" />
      <h2>Capital : {country.capital}</h2>
      <h3>Population : {country.population}</h3>
      <h3>Languages: {languages}</h3>
    </div>
  );
};

export default Country;
