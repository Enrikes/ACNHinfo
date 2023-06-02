import React, { useState } from "react";
import IconCSS from "./creatureCards.module.css";

export default function GridItem({
  icon,
  toggleIsCreatureInfoShown,
  name,
  grabCreatureInfo,
  type,
  nametagStyle,
  creatureTrigger,
}) {
  const [isLoading, setIsLoading] = useState(true);
  function handleClick(e) {
    toggleIsCreatureInfoShown();
    grabCreatureInfo(name);
    creatureTrigger(true);
    return;
  }
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  function handleClassName(type) {
    switch (type) {
      case "Insects":
        return IconCSS["creature-insect-item"];
      case "Sea Creatures":
        return IconCSS["creature-sea-item"];
      default:
        return IconCSS["creature-fish-item"];
    }
  }
  const className = `${isHovered ? `${IconCSS.visible}` : IconCSS["fade-out"]}`;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={handleClassName(type)}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {nametagStyle === undefined ? (
          <>
            <div className={className} id={IconCSS["name-tag"]}>
              {name}
            </div>
            <img
              className={IconCSS["creature-icon"]}
              onLoad={() => setIsLoading(false)}
              src={icon}
              alt={name}
            ></img>
          </>
        ) : (
          <>
            <div style={nametagStyle} id={IconCSS["name-tag"]}>
              {name}
            </div>
            <img
              className={IconCSS["creature-icon"]}
              onLoad={() => setIsLoading(false)}
              src={icon}
              alt={name}
            ></img>
          </>
        )}
      </div>
    </>
  );
}
