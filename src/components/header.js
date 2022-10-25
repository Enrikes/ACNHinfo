import React, { useState } from 'react';
import logo from '../img/navbar/logo.png';
export default function Header({ setGrid, toggleVillager }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <img className='primary-logo' src={logo} />
      </div>
      <ul
        className={isMenuOpen ? 'nav-list.active' : 'nav-list'}
        id='navi-list'
      >
        <li className='list-item'>
          <p
            onClick={() => {
              setFish();
              setIsMenuOpen(false);
            }}
            id='fish'
            href=''
          >
            Fish
          </p>
        </li>
        <li className='list-item'>
          <p
            onClick={() => {
              setInsect();
              setIsMenuOpen(false);
            }}
            id='insect'
          >
            Insect
          </p>
        </li>
        <li className='list-item'>
          <p
            onClick={() => {
              setVillager();
              handleVillager();
              setIsMenuOpen(false);
            }}
            id='insect'
          >
            Villager
          </p>
        </li>
        <li className='list-item'>
          <p
            onClick={() => {
              setSeaCreature();
              setIsMenuOpen(false);
            }}
            id='insect'
          >
            Sea Creatures
          </p>
        </li>
      </ul>
      <div
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        className='menu'
        id='toggle-button'
      >
        <div className='menu-line'></div>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
      </div>
    </nav>
  );
}
