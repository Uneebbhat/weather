// WeatherContext.js
import React, { createContext, useContext, useState } from "react";
import useWeather from "../hooks/useWeather";

export const WeatherContext = createContext();

export const useWeatherData = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const { weather, error, getWeather } = useWeather();
  const [weatherData, setWeatherData] = useState({ weather, error });

  const updateWeatherData = (newData) => {
    setWeatherData(newData);
  };

  return (
    <WeatherContext.Provider
      value={{ weatherData, updateWeatherData, getWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
