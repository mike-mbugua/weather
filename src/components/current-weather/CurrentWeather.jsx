import React from "react";
import "./currentWeather.css";
function CurrentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Nairobi</p>
          <p className="weather__description">Sunny</p>
        </div>
        <div>
          <img src="icons/01d.png" className="weather__icon" alt="" />
        </div>
      </div>

      {/* the bottom part */}
      <div className="bottom">
        <p className="temperature">18 °C</p>
        <div className="details">
          <div className="parameter__row">
            <span className="parameter__label top">Details</span>
          </div>
          <div className="parameter__row">
            <span className="parameter__label">Feels like</span>
            <span className="parameter__value">12°C</span>
          </div>
          <div className="parameter__row">
            <span className="parameter__label">Wind</span>
            <span className="parameter__value">2 m/s</span>
          </div>
          <div className="parameter__row">
            <span className="parameter__label">Humidity</span>
            <span className="parameter__value">12%</span>
          </div>
          <div className="parameter__row">
            <span className="parameter__label">Pressure</span>
            <span className="parameter__value">12°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
