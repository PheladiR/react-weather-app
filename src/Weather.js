import React from 'react';

export default function Weather() {
  return (
    <div className="Weather container">
      <form>
        <input type="search" placeholder="Enter a city"/>
        <button type="submit">
          Search
        </button>
      </form>
      <div className="row">
        <div className="col">
          <h1>☀️27°C</h1>
          <ul>
            <li>Precipitation: 19%</li>
            <li>Humidity: 40%</li>
            <li>Wind: 10km/h</li>
          </ul>
        </div>
        <div class="col">
          <h2>Polokwane</h2>
          <ul>
            <li>Saturday 10:00</li>
            <li>Sunny</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h3>Sat</h3>
          <ul>
            <li>☀️27°C</li>
          </ul>
        </div>
        <div class="col">
          <h3>Sun</h3>
          <ul>
            <li>☀️27°C</li>
          </ul>
        </div>
        <div class="col">
          <h3>Mon</h3>
          <ul>
            <li>☀️27°C</li>
          </ul>
        </div>
        <div class="col">
          <h3>Tue</h3>
          <ul>
            <li>☀️27°C</li>
          </ul>
        </div>
        <div class="col">
          <h3>Wed</h3>
          <ul>
            <li>☀️27°C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}