import React, { useState } from 'react';
import logo from '../img/navbar/logo.png';
import OutsideAlerter from './outsideAlerter';
import HeaderCSS from './header.module.css';
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
  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
      setIsMenuOpen(false);
    }
  });
  return (
    <OutsideAlerter state={setIsMenuOpen}>
      <nav className={HeaderCSS.navbar}>
        <div className={HeaderCSS.logo}>
          <img className={HeaderCSS['primary-logo']} src={logo} />
        </div>

        <ul
          className={
            isMenuOpen ? HeaderCSS['nav-list.active'] : HeaderCSS['nav-list']
          }
          id={HeaderCSS['navi-list']}
        >
          <li className={HeaderCSS['list-item']}>
            <p
              onClick={() => {
                setFish();
                setIsMenuOpen(false);
              }}
              id={HeaderCSS.fish}
              href=''
            >
              Fish
            </p>
          </li>
          <li className={HeaderCSS['list-item']}>
            <p
              onClick={() => {
                setInsect();
                setIsMenuOpen(false);
              }}
              id={HeaderCSS.insect}
            >
              Insect
            </p>
          </li>
          <li className={HeaderCSS['list-item']}>
            <p
              onClick={() => {
                setVillager();
                handleVillager();
                setIsMenuOpen(false);
              }}
              id={HeaderCSS.insect}
            >
              Villager
            </p>
          </li>
          <li className={HeaderCSS['list-item']}>
            <p
              onClick={() => {
                setSeaCreature();
                setIsMenuOpen(false);
              }}
              id={HeaderCSS.insect}
            >
              Sea Creatures
            </p>
          </li>
        </ul>
        <div
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className={HeaderCSS.menu}
          id='toggle-button'
        >
          <div className={HeaderCSS['menu-line']}></div>
          <div className={HeaderCSS['menu-line']}></div>
          <div className={HeaderCSS['menu-line']}></div>
        </div>
      </nav>
    </OutsideAlerter>
  );
}
