import React from "react";

export default function Description() {
  return (
    <div className="Description">
      <h2 className="description">Cloudy</h2>
      <span className="degrees">19</span>
      <span className="units">ºC</span>
      <span className="main-icon">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          id="icon"
          alt="sunny"
        />
      </span>
    </div>
  );
}
