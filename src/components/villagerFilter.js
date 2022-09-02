import React from "react";
export default function VillagerFilter({ setGrid }) {
  console.log(setGrid);
  function setFilter(species) {
    console.log("hello");

    setGrid("/alligator");
  }
  return (
    <div className="villager-filter-container" onClick={setFilter}>
      <div className="villager-filter">Alligator</div>
    </div>
  );
}
