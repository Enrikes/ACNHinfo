import React, { useState } from "react";
import Header from "./components/header";
import Grid from "./components/creatureGrid";
import CreatureInfo from "./components/creatureInfo";
import Footer from "./components/footer";
import FilterButtons from "./components/filterButtons";
import VillagerFilter from "./components/villagerFilter";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

function App({ setGrid, toggleLoginMode }) {
  const [isCreatureInfoShown, setIsCreatureInfoShown] = useState(false);
  const [cardInfo, setCardInfo] = useState();
  const [url, setUrl] = useState("/fish");
  const [loginMode, setLoginMode] = useState(true);
  const [loginSuccess, setLoginSuccess] = useState();
  const loggedIn = window.localStorage.getItem("isLoggedIn");

  function toggleIsCreatureInfoShown() {
    setIsCreatureInfoShown(!isCreatureInfoShown);
  }
  function setCreatureNameToSend(name) {
    setCardInfo(name);
    return cardInfo;
  }
  const time = new Date();
  function setGrid(value) {
    console.log("poggers");
    setUrl(value);
    return url;
  }
  function toggleLoginMode(value) {
    setLoginMode(!loginMode);
  }
  return (
    <>
      {isCreatureInfoShown && cardInfo ? (
        <CreatureInfo
          cardInfo={cardInfo}
          toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
          url={url}
        />
      ) : (
        ""
      )}
      {loginSuccess === true || loggedIn === "true" ? (
        <Dashboard setLoginSuccess={setLoginSuccess} />
      ) : (
        ""
      )}
      <Header setGrid={setGrid} toggleLoginMode={toggleLoginMode} />
      {!loginMode ? (
        <Login setLoginMode={setLoginMode} setLoginSuccess={setLoginSuccess} />
      ) : (
        ""
      )}
      <FilterButtons setGrid={setGrid} />
      {url === "/villager" ? <VillagerFilter setGrid={url} /> : ""}
      <Grid
        toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
        grabCreatureInfo={setCreatureNameToSend}
        setGrid={url}
      />
      <Footer />
    </>
  );
}

export default App;
