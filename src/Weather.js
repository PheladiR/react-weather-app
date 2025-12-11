import React, { useState, useEffect, useCallback } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Polokwane");

  const handleResponse = useCallback((response) => {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      precipitation: response.data.precipitation,
      condition: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      city: response.data.city,
    });
  }, []);

  const search = useCallback(() => {
    const apikey = "f4b51cbf6039365ob7atd180fe5e0c57";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }, [city, handleResponse]);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  useEffect(() => {
    search();
  }, [search]);

  if (!weatherData.ready) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-app">
      <header>
        <form className="search-form" id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            id="search-form-input"
            className="search-form-input"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>

      <div className="weather container mt-4">
        <div className="row align-items-center">
          {/* ICON */}
          <div className="col-4 text-center">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.condition}
              className="weather-icon img-fluid"
            />
          </div>

          {/* CITY + CONDITION + DATE */}
          <div className="col-8">
            <h2 className="city">{weatherData.city}</h2>
            <p className="condition text-capitalize">{weatherData.condition}</p>
            <FormattedDate date={weatherData.date} />
          </div>
        </div>

        {/* Temperature + details */}
        <div className="row mt-4">
          <div className="col">
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    </div>
  );
}
