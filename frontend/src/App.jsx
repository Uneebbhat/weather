// App.jsx
import React, { useState } from "react";
import SearchWeather from "./Components/SearchWeather";
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
    </div>
  );
}

export default App;
