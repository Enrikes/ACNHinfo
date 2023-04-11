import React, { useState } from 'react';
import IconCSS from './creatureCards.module.css';

export default function GridItem({
  icon,
  toggleIsCreatureInfoShown,
  name,
  grabCreatureInfo,
  type,
  nametagStyle,
}) {
  const [isLoading, setIsLoading] = useState(true);
  function handleClick(e) {
    toggleIsCreatureInfoShown();
    grabCreatureInfo(name);
    return;
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <div
        className={
          type === 'Insects'
            ? IconCSS['creature-insect-item']
            : type === 'Sea Creatures'
            ? IconCSS['creature-sea-item']
            : IconCSS['creature-fish-item']
        }
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {nametagStyle === undefined ? (
          <>
            <div id={IconCSS['name-tag']}>{name}</div>
            <img
              className={IconCSS['creature-icon']}
              onLoad={() => setIsLoading(false)}
              src={icon}
            ></img>
          </>
        ) : (
          <>
            <div style={nametagStyle} id='nameTag'>
              {name}
            </div>
            <img
              className={IconCSS['creature-icon']}
              onLoad={() => setIsLoading(false)}
              src={icon}
            ></img>
          </>
        )}
      </div>
    </>
  );
}
