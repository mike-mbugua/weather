import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Search from "./components/search/Search";

function App() {
  const handleChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleChange} />
    </div>
  );
}

export default App;
