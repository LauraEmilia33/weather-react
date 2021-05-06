import React from "react";

export default function Footer(){
  return(
    <div className="Footer">
    <footer>
        <p className="codedby">
          <a
            href="https://github.com/LauraEmilia33/weather-react"
            target="_blank"
            rel="noreferrer"
            alt="Github link"
          >Open Source</a> by <a
            href="https://www.linkedin.com/in/laura-emilia-barojas/"
            target="_blank"
            rel="noreferrer"
            alt="LinkedIn link"
          >
            Laura Barojas
          </a><img src="./me.png" width="15px" height="20px" alt="" />
        </p>
      </footer>
    </div>
  );
}