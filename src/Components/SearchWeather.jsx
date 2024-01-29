import React, { useState } from "react";
import useWeather from "../hooks/useWeather";

const SearchWeather = ({ updateWeatherData }) => {
  const [city, setCity] = useState("");
  const { weather, error, getWeather } = useWeather();

  const handleGetWeather = () => {
    if (city.trim() !== "") {
      getWeather(city)
        .then((response) => {
          updateWeatherData({ weather: response.data, error: null });
        })
        .catch((error) => {
          updateWeatherData({
            weather: null,
            error: "Error fetching weather data",
          });
        });
      setCity("");
    }
  };

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  return (
    <>
      <div className="search-wrapper">
        <div className="search-input">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleGetWeather}>Search</button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {weather && weather.weather ? (
          <div className="weather-data">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
            />
            <h2>{weather.name}</h2>
            <h2>{weather.weather[0].description}</h2>
            <h2>
              Temperature: {kelvinToCelsius(weather.main.temp).toFixed(2)} °C
            </h2>
          </div>
        ) : null}
        {/* <div className="city-name">
          <h3>{city}</h3>
        </div> */}
      </div>
    </>
  );
};

export default SearchWeather;
