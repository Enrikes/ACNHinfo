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
        <div className="footer-col-3">
          <script>
            {kofiWidgetOverlay.draw("twentyfifthcorn", {
              type: "floating-chat",
              "floating-chat.donateButton.text": "Support me",
              "floating-chat.donateButton.background-color": "#00b9fe",
              "floating-chat.donateButton.text-color": "#fff",
            })}
          </script>
          <KofiButton
            username="twentyfifthcorn"
            label="Support me!"
          ></KofiButton>
        </div>
      </div>
      <div className="footer-row-1">
        <FontAwesomeIcon
          href="https://twitter.com/_Enrikes_"
          className="social-icons"
          icon={faTwitter}
        />
        <FontAwesomeIcon href="" className="social-icons" icon={faGithub} />
        <FontAwesomeIcon className="social-icons" icon={faLinkedin} />
      </div>

      <div className="footer-row-1">copyright</div>
    </footer>
  );
}
