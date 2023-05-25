import React from "react";
import "./currentWeather.css";
function CurrentWeather({ data }) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather__description">{data.weather[0].description}</p>
        </div>
        <div>
          <img
            src={`icons/${data.weather[0].icon}.png`}
            className="weather__icon"
            alt=""
          />
        </div>
      </div>

      {/* the bottom part */}
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)} °C</p>
        <div className="details">
          <div className="parameter__row">
            <span className="parameter__label top">Details</span>
          </div>
          <div className="parameter__row">
            <span className="parameter__label">Feels like</span>
            <span className="parameter__value">{data.main.feels_like}°C</span>
          </div>
          <div className="parameter__row">
            <span className="parameter__label">Wind</span>
            <span className="parameter__value">
              {Math.round(data.wind.speed)} m/s
            </span>
          </div>
          <div className="parameter__row">
            <span className="parameter__label">Humidity</span>
            <span className="parameter__value">{data.main.humidity}%</span>
          </div>
          <div className="parameter__row">
            <span className="parameter__label">Pressure</span>
            <span className="parameter__value">{data.main.pressure}hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
