import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./creatureCards";

export default function Grid({
  toggleIsCreatureInfoShown,
  grabCreatureInfo,
  setGrid,
}) {
  const [creatures, setCreature] = useState([]);
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
  const villager = creatures.filter(
    (creaturez) => creaturez.sourceSheet === "Villagers"
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
  const displayVillagerGrid = villager.map((creature) => {
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
  return (
    <div>
      <div className="icons">{displayFishGrid}</div>
      <div className="icons">{displayInsectGrid}</div>
      <div className="icons">{displaySeaCreatureGrid}</div>
      <div className="icons">{displayVillagerGrid}</div>
    </div>
  );
}
