// OtherWeatherData.jsx
import React from "react";

const OtherWeatherData = ({ weather, error }) => {
  console.log(`This is weather data: ${JSON.stringify(weather)}`);
  return (
    <>
      <div className="other-data-wrapper">
        <h1>Other data</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {weather && weather.weather ? (
          <div className="weather-data">
            <p>{weather.name}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default OtherWeatherData;
