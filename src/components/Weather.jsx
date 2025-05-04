// Weather.jsx

import React from "react";

export default function Weather({ data }) {
  const getWeatherIcon = (type) => {
    switch (type) {
      case "Clouds":
        return "☁️";
      case "Rain":
        return "🌧️";
      case "Clear":
        return "☀️";
      case "Snow":
        return "❄️";
      case "Thunderstorm":
        return "⛈️";
      case "Drizzle":
        return "🌦️";
      case "Mist":
      case "Fog":
        return "🌫️";
      default:
        return "🌈"; // fallback
    }
  };

  const weatherType = data.weather[0].main;

  return (
    <div className="card">
    <div className="weather-box">
      <h2>
        {data.name}, {data.sys.country}
      </h2>
      <div style={{ fontSize: "3rem" }}>{getWeatherIcon(weatherType)}</div>
      <p>{weatherType}</p>
      <h3>{Math.round(data.main.temp)}°C</h3>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
    </div>
  );
}
