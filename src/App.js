import React, { useState } from "react";
import Header from "./components/header";
import Grid from "./components/creatureGrid";
import CreatureInfo from "./components/creatureInfo";
import Footer from "./components/footer";
import FilterButtons from "./components/filterButtons";

function App({ setGrid, toggleDarkMode }) {
  const [isCreatureInfoShown, setIsCreatureInfoShown] = useState(false);
  const [cardInfo, setCardInfo] = useState();
  const [url, setUrl] = useState("/fish");
  const [darkMode, setDarkMode] = useState();
  function toggleIsCreatureInfoShown() {
    setIsCreatureInfoShown(!isCreatureInfoShown);
  }

  function setCreatureNameToSend(name) {
    setCardInfo(name);
    return cardInfo;
  }
  const time = new Date();
  console.log(time.getHours() + ":" + time.getMinutes());
  function setGrid(value) {
    console.log("poggers");
    setUrl(value);
    return url;
  }
  function toggleDarkMode(value) {
    console.log("I am nig mode");
    setDarkMode(!darkMode);
    if (darkMode) {
      return (document.body.style = "background-color: #121212;");
    }
    return (document.body.style = "background-color: white;");
  }
  return (
    <>
      {isCreatureInfoShown && cardInfo ? (
        <CreatureInfo
          cardInfo={cardInfo}
          toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
        />
      ) : (
        ""
      )}
      <Header setGrid={setGrid} toggledDarkMode={toggleDarkMode} />
      <FilterButtons setGrid={setGrid} />
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
