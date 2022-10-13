import React from 'react';
export default function Header({ setGrid, toggleVillager }) {
  function setInsect() {
    setGrid('/insect');
    toggleVillager(false);
  }
  function setFish() {
    setGrid('/fish');
    toggleVillager(false);
  }
  function setVillager() {
    setGrid('/villager');
    toggleVillager(false);
  }
  function setSeaCreature() {
    setGrid('/seaCreature');
    toggleVillager(false);
  }
  function handleVillager() {
    toggleVillager(true);
  }
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img className='primary-logo' src='img/navbar/logo.png' />
      </div>
      <ul className='nav-list' id='navi-list'>
        <li className='list-item'>
          <p onClick={setFish} id='fish' href=''>
            Fish
          </p>
        </li>
        <li className='list-item'>
          <p onClick={setInsect} id='insect'>
            Insect
          </p>
        </li>
        <li className='list-item'>
          <p
            onClick={() => {
              setVillager();
              handleVillager();
            }}
            id='insect'
          >
            Villager
          </p>
        </li>
        <li className='list-item'>
          <p onClick={setSeaCreature} id='insect'>
            Sea Creatures
          </p>
        </li>
      </ul>
      <div className='menu' id='toggle-button'>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
      </div>
    </nav>
  );
}
