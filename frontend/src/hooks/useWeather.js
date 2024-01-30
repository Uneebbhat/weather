// useWeather.js
import { useState } from "react";
import axios from "axios";

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  axios.defaults.withCredentials = true;

  const getWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://weather-backend-inky.vercel.app/${city}`
      );
      setWeather(response.data);
      console.log(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setWeather(null);
      setError("Error fetching weather data");
    }
  };

  return { weather, error, getWeather };
};

export default useWeather;
