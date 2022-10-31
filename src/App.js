import React, { useState, useRef } from 'react';
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
  const [isVillagerActive, setIsVillagerActive] = useState(false);
  const loggedIn = window.localStorage.getItem('isLoggedIn');
  const [isDropdownOpen, setIsDropdownOpen] = useState();
  const speciesDropdown = useRef(null);

  const closeOpenMenus = (e) => {
    if (
      speciesDropdown.current &&
      isDropdownOpen &&
      !speciesDropdown.current.contains(e.target)
    ) {
      setIsDropdownOpen(false);
    }
  };
  document.addEventListener('click', closeOpenMenus);

  const kofiWidget = document.querySelector('.floatingchat-container-wrap');
  let scrollPos = 0;
  function checkWindowY() {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
      kofiWidget.classList.add('.is-visible');
      kofiWidget.classList.remove('.is-hidden');
    } else {
      kofiWidget.classList.add('.is-hidden');
      kofiWidget.classList.remove('.is-visible');
    }
    scrollPos = windowY;
  }
  window.addEventListener('scroll', checkWindowY);

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

  function activateVillager(state) {
    setIsVillagerActive(state);
  }

  return (
    <>
      <div ref={speciesDropdown}>
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
        <Header
          setGrid={setGrid}
          toggleLoginMode={toggleLoginMode}
          toggleVillager={activateVillager}
        />
        {!loginMode ? (
          <Login
            setLoginMode={setLoginMode}
            setLoginSuccess={setLoginSuccess}
          />
        ) : (
          ''
        )}
        <FilterButtons setGrid={setGrid} />
        {isVillagerActive ? (
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
      </div>
    </>
  );
}

export default App;
