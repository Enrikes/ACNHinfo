import React, { useState } from 'react';
import IconCSS from './creatureCards.module.css';

export default function Card({
  icon,
  toggleIsCreatureInfoShown,
  name,
  grabCreatureInfo,
  type,
  nametagStyle,
}) {
  function handleClick(e) {
    toggleIsCreatureInfoShown();
    grabCreatureInfo(name);
    return;
  }

  return (
    <>
      <div
        className={
          type === 'Insects'
            ? IconCSS['creature-insect-item']
            : type === 'Sea Creatures'
            ? IconCSS['creature-sea-item']
            : 'creature-fish-item'
        }
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {nametagStyle === undefined ? (
          <>
            <div id={IconCSS['name-tag']}>{name}</div>
            <img className={IconCSS['creature-icon']} src={icon}></img>
          </>
        ) : (
          <>
            <div style={nametagStyle} id={IconCSS['name-tag']}>
              {name}
            </div>
            <img className={IconCSS['creature-icon']} src={icon}></img>
          </>
        )}
      </div>
    </>
  );
}
