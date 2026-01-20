import "./App.css";
import Countries from "./Components/Countries/Countries";

const countriesPromise = fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,population,languages,capital",
).then((res) => res.json());
console.log(countriesPromise)

function App() {
  return (
    <>
      <div>
        <Countries></Countries>
      </div>
    </>
  );
}

export default App;
