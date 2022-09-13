import React from "react";

export default function VillagerInfo({ villager, toggleIsCreatureInfoShown }) {
  console.log(villager);
  function hideCreatureInfo() {
    toggleIsCreatureInfoShown();
  }
  return (
    <div className="creature-blur" onClick={hideCreatureInfo}>
      <div className="x-mark" onClick={console.log("deez bolas")}>
        <img src="/../src/img/loading/exit-button.png"></img>
      </div>
      <div className="creature-info-container">
        <h1 className="creature-title">{villager.name}</h1>
        <div className="villager-image-container">
          <img className="villager-image" src={villager.iconImage}></img>
        </div>
        <div className="creature-description"></div>
      </div>
    </div>
  );
}
