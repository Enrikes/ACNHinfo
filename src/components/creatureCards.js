import React, { useState } from "react";

export default function Card({
  icon,
  toggleIsCreatureInfoShown,
  name,
  grabCreatureInfo,
  type,
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
          type === "Insects" ? "creature-insect-item" : "creature-fish-item"
        }
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <div id="nameTag">{name}</div>
        <img className={"creature-icon"} src={icon}></img>
      </div>
    </>
  );
}
