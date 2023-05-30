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
        break;
      case "Sea Creatures":
        return IconCSS["creature-sea-item"];
        break;
      default:
        return IconCSS["creature-fish-item"];
    }
  }
  function handleNameTagAnimation() {
    return `${isHovered ? `${IconCSS.visible}` : "hidden"}`;
  }

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
            <div className={handleNameTagAnimation()} id={IconCSS["name-tag"]}>
              {name}
            </div>
            <img
              className={IconCSS["creature-icon"]}
              onLoad={() => setIsLoading(false)}
              src={icon}
            ></img>
          </>
        ) : (
          <>
            <div style={nametagStyle} id="nameTag">
              {name}
            </div>
            <img
              className={IconCSS["creature-icon"]}
              onLoad={() => setIsLoading(false)}
              src={icon}
            ></img>
          </>
        )}
      </div>
    </>
  );
}
