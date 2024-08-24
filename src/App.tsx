import React, { useState, useRef } from 'react';
import Header from './components/header';
import Grid from './components/creatureGrid';
import CreatureInfo from './components/creatureInfo';
import Footer from './components/footer';
import FilterButtons from './components/filterButtons';
import VillagerFilter from './components/villagerFilter';
import Login from './components/login';
import Dashboard from './components/dashboard';
import SkeletonElement from './skeleton/skeletonElement';

interface creatureInfoProps {
  cardInfo: string;
  toggleIsCreatureInfoShown: () => void;
  url: string;
  isVillagerActive: boolean;
  isCreatureActive: boolean;
}

const App: React.FC = (): React.ReactNode => {
  const [isCreatureInfoShown, setIsCreatureInfoShown] = useState(false);
  const [cardInfo, setCardInfo] = useState('');
  const [url, setUrl] = useState('/fish');
  const [loginMode, setLoginMode] = useState(true);
  const [loginSuccess, setLoginSuccess] = useState();
  const [villagerInfo, setVillagerInfo] = useState<object>({});
  const [isVillagerActive, setIsVillagerActive] = useState<boolean>(false);
  const [isCreatureActive, setIsCreatureActive] = useState<boolean>(false);
  const loggedIn = window.localStorage.getItem('isLoggedIn');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>();
  const speciesDropdown = useRef(null);

  const closeOpenMenus = (e: MouseEvent): void => {
    const target = e.target as Node;
    const speciesDropdown = useRef<HTMLDivElement>(null);
    if (
      speciesDropdown.current &&
      isDropdownOpen &&
      !speciesDropdown.current.contains(target)
    ) {
      setIsDropdownOpen(false);
    }
  };
  document.addEventListener('click', closeOpenMenus);

  function toggleIsCreatureInfoShown(): void {
    setIsCreatureInfoShown(!isCreatureInfoShown);
    if (isCreatureInfoShown) {
      document.title = `ACNHInfo`;
    }
  }
  function setCreatureNameToSend(name: string): string {
    setCardInfo(name);
    return cardInfo;
  }
  function setGrid(value: string): string {
    setUrl(value);
    return url;
  }
  function toggleLoginMode(): void {
    setLoginMode(!loginMode);
  }
  function moveVillagerInfo(info: object): object {
    setVillagerInfo(info);
    return villagerInfo;
  }

  function activateCreature(state: boolean) {
    setIsCreatureActive(state);
  }
  function activateVillager(state: boolean) {
    setIsVillagerActive(state);
  }

  return (
    <>
      <div ref={speciesDropdown}>
        <SkeletonElement type='avatar' />
        {isCreatureInfoShown && cardInfo ? (
          <CreatureInfo
            cardInfo={cardInfo}
            toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
            url={url}
            isVillagerActive={isVillagerActive}
            isCreatureActive={isCreatureActive}
          />
        ) : (
          ''
        )}

        <Dashboard setLoginSuccess={setLoginSuccess} />
        <Header setGrid={setGrid} toggleVillager={activateVillager} />
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
          trigger={setIsVillagerActive}
          creatureTrigger={activateCreature}
        />
        <Footer />
      </div>
    </>
  );
};

export default App;
