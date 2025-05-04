import React, { useState } from "react";
import Weather from "./components/Weather";
import DeviceDateTime from './components/DeviceDateTime';

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    setError(""); // clear old errors

    if (city.trim() === "") {
      setWeather(null);
      setError("Please enter a city name.");
      return;
    }

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
        setError("");
      } else {
        setWeather(null);
        setError(data.message || "City not found.");
      }
    } catch (err) {
      setWeather(null);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg">
      <div className="overly"></div>
      <DeviceDateTime />
    <div className="app">
      <h1>🌦️ Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      {weather && !error && <Weather data={weather} />}
    </div>
    </div>
  );
}
