import React from "react";

export default function Header() {
  return (
    <div className="Header-Container">
      <div className="Header">
        <h1>Weather App</h1>
      </div>
      {/*   Last Updated   */}
      <p className="timeandday">
        Last updated:
        <span id="date"></span>
      </p>
    </div>
  );
}