// OtherWeatherData.jsx
import React from "react";
// import Card from "./Card";

const OtherWeatherData = ({ weather }) => {
  // console.log(`This is weather data: ${JSON.stringify(weather)}`);
  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return date.toLocaleTimeString();
  };

  return (
    <>
      <div className="other-data-wrapper">
        <div className="card-wrapper">
          <div className="card">
            <p>Feels Like</p>
            <h3>{kelvinToCelsius(weather.main.feels_like).toFixed(2)} °C</h3>
          </div>
          <div className="card">
            <p>Pressure</p>
            <h3>{weather.main.pressure} hPa</h3>
          </div>
          <div className="card">
            <p>Temp Max</p>
            <h3>{kelvinToCelsius(weather.main.temp_max).toFixed(2)} °C</h3>
          </div>
          <div className="card">
            <p>Temp Min</p>
            <h3>{kelvinToCelsius(weather.main.temp_min).toFixed(2)} °C</h3>
          </div>
          <div className="card">
            <p>Sunrise</p>
            <h3>{formatTime(weather.sys.sunrise)}</h3>
          </div>
          <div className="card">
            <p>Sunset</p>
            <h3>{formatTime(weather.sys.sunset)}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherWeatherData;
