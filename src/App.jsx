import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import LocationById from "./components/LocationById";
import ResidentCard from "./components/ResidentCard";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [apiData, setApiData] = useState();
  const [inputValue, setInputValue] = useState();
  const [random, setRandom] = useState(Math.floor(Math.random() * 126) + 1);
  const [hasError, setHasError] = useState(false);
  // let random = Math.floor(Math.random() * 126) + 1;
  let url;
  if (inputValue) {
    url = `https://rickandmortyapi.com/api/location/${inputValue}`;
  } else {
    url = `https://rickandmortyapi.com/api/location/${random}`;
  }

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setApiData(res.data);
        setHasError(false);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      });
  }, [inputValue]);
  const handleSubmut = (e) => {
    e.preventDefault();
    setInputValue(e.target.inputSearch.value);
    e.target.inputSearch.value = "";
  };
  return (
    <div className="App">
      <header className="header">
        <img src={"header.webp"} alt="" />
        <div className="logo abs-center-h">
          <img src="logo.webp" alt="" />
        </div>
        <div className="search abs-center-h">
          <form className="input" onSubmit={handleSubmut}>
            <input
              type="text"
              id="inputSearch"
              placeholder="Search location by id"
              title="ingrese un numero"
            />
            <button>
              <i className="bx bx-search-alt-2"></i>
            </button>
          </form>
        </div>
        <p className="location abs-center-h">
          Residents in location by id N° {inputValue ? inputValue : random}
          <br />
          <br />
          <i class="bx bx-chevrons-down bx-fade-up"></i>
        </p>
      </header>
      {hasError ? (
        <ErrorMessage />
      ) : (
        <>
          <LocationById apiData={apiData} />
          <div className="card-container flex-galery">
            {apiData?.residents.map((item) => (
              <ResidentCard key={item} url={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
//https://rickandmortyapi.com/api/location/3
