import React, { useState } from "react";
import Login from "./login";

export default function Dashboard({ setLoginSuccess }) {
  const [loginMode, setLoginMode] = useState(true);
  function toggleLoginMode(value) {
    setLoginMode(!loginMode);
  }

  return (
    <div className="dashboard-wrapper">
      <div className="login-button" onClick={toggleLoginMode}>
        Login
      </div>
      {!loginMode ? (
        <Login setLoginMode={setLoginMode} setLoginSuccess={setLoginSuccess} />
      ) : (
        ""
      )}
    </div>
  );
}
