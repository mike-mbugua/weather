import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API, geoApiOptions } from "../api";
import "./search.css";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);
  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((res) => {
        return {
          options: res.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name},${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="search-container">
      <AsyncPaginate
        className="search-bar"
        placeholder="Enter the city"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </div>
  );
}

export default Search;
