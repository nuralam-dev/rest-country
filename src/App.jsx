import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";

const countriesPromise = fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,population,languages,capital,cca2",
).then((res) => res.json());


function App() {
  return (
    <>
      <div>
        <Suspense fallback={<h1>Loading.....</h1>}>
          <Countries countriesPromise ={countriesPromise}></Countries>
          
        </Suspense>
      </div>
    </>
  );
}

export default App;
