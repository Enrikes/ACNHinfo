import React from "react";
export default function RegisterButton({ registerClick }) {
  console.log(registerClick);
  return (
    <div className="register-wrapper">
      <h1 id="register">Need an account?</h1>
      <button id="login-submit" onClick={registerClick}>
        Register
      </button>
    </div>
  );
}
