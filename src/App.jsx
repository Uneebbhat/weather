// App.jsx
import React, { useState } from "react";
import SearchWeather from "./Components/SearchWeather";
import OtherWeatherData from "./Components/OtherWeatherData";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({
    weather: null,
    error: null,
  });

  const updateWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="main-wrapper">
      <SearchWeather updateWeatherData={updateWeatherData} />
      <OtherWeatherData
        weather={weatherData.weather}
        error={weatherData.error}
      />
    </div>
  );
}

export default App;
