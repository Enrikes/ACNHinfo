import React, { useState } from 'react';

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
  console.log(type);

  return (
    <>
      <div
        className={
          type === 'Insects'
            ? 'creature-insect-item'
            : type === 'Sea Creatures'
            ? 'creature-sea-item'
            : 'creature-fish-item'
        }
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {nametagStyle === undefined ? (
          <>
            <div id='nameTag'>{name}</div>
            <img className={'creature-icon'} src={icon}></img>
          </>
        ) : (
          <>
            <div style={nametagStyle} id='nameTag'>
              {name}
            </div>
            <img className={'creature-icon'} src={icon}></img>
          </>
        )}
      </div>
    </>
  );
}
