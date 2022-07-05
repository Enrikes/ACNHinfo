import React from "react";
export default function Header({ setGrid, toggledDarkMode }) {
  function setInsect() {
    console.log("i have been clicked");
    setGrid("/insect");
  }
  function setFish() {
    setGrid("/fish");
  }
  function setVillager() {
    setGrid("/villager");
  }
  function darkMode() {
    toggledDarkMode();
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="primary-logo" src="img/navbar/logo.png" />
      </div>
      <ul className="nav-list" id="navi-list">
        <li className="list-item">
          <p onClick={setFish} id="fish" href="">
            Fish
          </p>
        </li>
        <li className="list-item">
          <p onClick={setInsect} id="insect">
            Insect
          </p>
        </li>
        <li className="list-item">
          <p onClick={setVillager} id="insect">
            Villager
          </p>
        </li>
      </ul>
      <div onClick={darkMode}>darkmode</div>
      <div className="menu" id="toggle-button">
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </nav>
  );
}
