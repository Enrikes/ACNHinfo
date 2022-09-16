import React from "react";
export default function RegisterButton({ registerClick }) {
  return (
    <div className="register-wrapper">
      <button id="login-submit" onClick={registerClick}>
        Register
      </button>
    </div>
  );
}
