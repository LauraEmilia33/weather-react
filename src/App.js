import './App.css';
import Header from "./Header.js";
import Weather from "./Weather.js";
import Description from "./Description.js";
import ExtendedForecast from "./ExtendedForecast";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <Header />
       {/* Main */}
      <div className="main">
       {/* Weather = Humidity & Wind */}
       <Weather />
        {/* City */}
        <h2 className="city">Barcelona</h2>
        {/* Description = description, degrees, units and icon */}
        <Description />
        <ExtendedForecast />
         {/* Search Form */}
        <div className="form-div">
          <form id="search-city">
            <input
              type="text"
              placeholder="Enter Your City"
              autofocus="on"
              autocomplete="off"
              id="search-input"
            />
            <input id="search-button" type="submit" value="Search" />
          </form>
        </div>
         {/* Current Location Button */}
        <button id="location">
          <span role="img" aria-label="location">
            📍
          </span>
        </button>
        {/* Unit conversion */}
        <button id="fahrenheit">ºF</button>
        <button id="celsius">ºC</button>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}


