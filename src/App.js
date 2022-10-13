import React, { useState } from 'react';
import Header from './components/header';
import Grid from './components/creatureGrid';
import CreatureInfo from './components/creatureInfo';
import Footer from './components/footer';
import FilterButtons from './components/filterButtons';
import VillagerFilter from './components/villagerFilter';
import Login from './components/login';
import Dashboard from './components/dashboard';

function App({ setGrid, toggleLoginMode }) {
  const [isCreatureInfoShown, setIsCreatureInfoShown] = useState(false);
  const [cardInfo, setCardInfo] = useState();
  const [url, setUrl] = useState('/fish');
  const [loginMode, setLoginMode] = useState(true);
  const [loginSuccess, setLoginSuccess] = useState();
  const [villagerInfo, setVillagerInfo] = useState();
  const loggedIn = window.localStorage.getItem('isLoggedIn');

  function toggleIsCreatureInfoShown() {
    setIsCreatureInfoShown(!isCreatureInfoShown);
  }
  function setCreatureNameToSend(name) {
    setCardInfo(name);
    return cardInfo;
  }
  function setGrid(value) {
    setUrl(value);
    return url;
  }
  function toggleLoginMode(value) {
    setLoginMode(!loginMode);
  }
  function moveVillagerInfo(info) {
    setVillagerInfo(info);
    return villagerInfo;
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
        ''
      )}
      <Dashboard setLoginSuccess={setLoginSuccess} />
      <Header setGrid={setGrid} toggleLoginMode={toggleLoginMode} />
      {!loginMode ? (
        <Login setLoginMode={setLoginMode} setLoginSuccess={setLoginSuccess} />
      ) : (
        ''
      )}
      <FilterButtons setGrid={setGrid} />
      {url === '/villager' || villagerInfo ? (
        <VillagerFilter setGrid={setGrid} villager={villagerInfo} />
      ) : (
        ''
      )}
      <Grid
        toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
        grabCreatureInfo={setCreatureNameToSend}
        setGrid={url}
        villagerInfo={moveVillagerInfo}
      />
      <Footer />
    </>
  );
}

export default App;
