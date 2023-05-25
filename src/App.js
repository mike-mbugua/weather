import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";

function App() {
  const handleChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
