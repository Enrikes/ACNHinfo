import React, { useState } from 'react';

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
  console.log(name.length);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
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
            <div id='nameTag'>{name} deez</div>
            <img
              className={'creature-icon'}
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
              className={'creature-icon'}
              onLoad={() => setIsLoading(false)}
              src={icon}
            ></img>
          </>
        )}
      </div>
    </div>
  );
}
