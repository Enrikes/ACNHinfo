import React from "react";
export default function VillagerFilter({ setGrid }) {
  function setFilter(species) {
    setGrid("/alligator");
  }
  return (
    <div className="villager-filter-container" onClick={setFilter}>
      <div className="villager-filter">Alligator</div>
    </div>
  );
}
