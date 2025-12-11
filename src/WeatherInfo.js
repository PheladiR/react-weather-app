import React from "react";

export default function WeatherInfo(props) {
  const data = props.data;

  return (
    <div className="WeatherInfo mt-4">
      <h1 className="temperature-display">{data.temperature}°C</h1>

      <ul className="list-unstyled details-list">
        <li>Precipitation: {data.precipitation}%</li>
        <li>Humidity: {data.humidity}%</li>
        <li>Wind: {data.wind} km/h</li>
      </ul>
    </div>
  );
}
