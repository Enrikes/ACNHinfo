import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./creatureCards";

export default function Grid({
  toggleIsCreatureInfoShown,
  grabCreatureInfo,
  setGrid,
}) {
  const [creatures, setCreature] = useState([]);
  const [ hover, setHover ] = useState(false)

  useEffect(() => {
    axios.get(setGrid).then(function (response) {
      setCreature(response.data);
    });
  }, [setGrid]);
  const fish = creatures.filter(
    (creaturez) => creaturez.sourceSheet === "Fish"
  );
  const insect = creatures.filter(
    (creaturez) => creaturez.sourceSheet === "Insects"
  );
  const seaCreature = creatures.filter(
    (creaturez) => creaturez.sourceSheet === "Sea Creature"
  );
  const displayFishGrid = fish.map((creature) => {
    return (
      <Card
        toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
        key={creature.name}
        icon={creature.iconImage}
        name={creature.name}
        grabCreatureInfo={grabCreatureInfo}
        type={creature.sourceSheet}
      />
    );
  });
  const displayInsectGrid = insect.map((creature) => {
    return (
      <Card
        toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
        key={creature.name}
        icon={creature.iconImage}
        name={creature.name}
        grabCreatureInfo={grabCreatureInfo}
        type={creature.sourceSheet}
      />
    );
  });
  const displaySeaCreatureGrid = seaCreature.map((creature) => {
    return (
      <Card
        toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
        key={creature.name}
        icon={creature.iconImage}
        name={creature.name}
        grabCreatureInfo={grabCreatureInfo}
        type={creature.sourceSheet}
      />
    );
  });
  const displayGrid = creatures.map((creature) => {
    return (
      <>
        <Card
          toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
          key={creature.name}
          icon={creature.iconImage}
          name={creature.name}
          grabCreatureInfo={grabCreatureInfo}
        />
      </>
    );
  });
  return (
    <div className="">
      <div id="grid-title">
        {displayInsectGrid.length === 0 ? <div>fishybois</div> : null}
        <div className="icons"> {displayFishGrid}</div>
      </div>

      <div id="grid-title">
        {displayFishGrid.length === 0 ? <div>Insects</div> : null}
        <div className="icons"> {displayInsectGrid}</div>
      </div>

      <div className="icons">{displaySeaCreatureGrid}</div>
    </div>
  );
}
