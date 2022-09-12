import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { KofiButton } from "react-kofi-button";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-col-1">
          <ul className="social-links">
            <h1 className="social-header">Follow me!</h1>
            <hr className="social-line"></hr>
            <li>
              <a href="https://twitter.com/_Enrikes_" target={"_blank"}>
                Twitter
              </a>
            </li>
            <li>
              <a>LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-2">
          <p>copy right</p>
        </div>
        <div className="footer-col-3"></div>
      </div>
      <div className="footer-row-1">
        <FontAwesomeIcon
          className="social-icons"
          icon={faTwitter}
          onClick={() => {
            window.open("https://twitter.com/_Enrikes_", "_blank");
          }}
        />

        <FontAwesomeIcon
          className="social-icons"
          icon={faGithub}
          onClick={() => {
            window.open("https://github.com/Enrikes", "_blank");
          }}
        />
        <FontAwesomeIcon
          className="social-icons"
          icon={faLinkedin}
          onClick={() => {
            window.open("https://www.linkedin.com/in/enriquetroche/", "_blank");
          }}
        />
      </div>

      <div className="footer-row-1">copyright</div>
    </footer>
  );
}
