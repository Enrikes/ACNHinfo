import React from "react";
import { KofiButton } from "react-kofi-button";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-col-1">
          <p>links</p>
        </div>
        <div className="footer-col-2">
          <p>copy right</p>
        </div>
        <div className="footer-col-3">
          {" "}
          <KofiButton
            username="twentyfifthcorn"
            label="Support me!"
          ></KofiButton>{" "}
        </div>
      </div>
    </footer>
  );
}
