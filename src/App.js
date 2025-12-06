import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container border rounded p-4 mt-4">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/PheladiR"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pheladi Rachoshi
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/PheladiR/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
};
