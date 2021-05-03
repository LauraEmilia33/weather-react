import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      {/* Humidity */}
      <p className="humidity-text">
        Humidity:
        <span className="humidity">82</span>%
      </p>
      {/* Wind */}
      <p className="wind-text">
        Wind:
        <span className="wind">32</span>
        km/h
      </p>
    </div>
  );
}