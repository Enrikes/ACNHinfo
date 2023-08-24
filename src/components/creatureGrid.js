import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./creatureCards";
import LoadingGrid from "./loadingGrid";
import GridItem from "./gridItem";

export default function Grid({
  toggleIsCreatureInfoShown,
  grabCreatureInfo,
  setGrid,
  villagerInfo,
  trigger,
  creatureTrigger,
}) {
  const [creatures, setCreature] = useState([]);
  useEffect(() => {
    // Sends grid name to enpoint to recieve info.
    const retrieveGridData = async () => {
      try {
        const resp = await axios.get(setGrid);
        setCreature(resp.data);
      } catch (err) {
        return err;
      }
    };
    const retrieveVillagerGridData = async () => {
      try {
        console.log(setGrid.endpoint);
        const resp = await axios.get(setGrid.endpoint, {
          params: { species: setGrid.species },
        });
        setCreature(resp.data);
      } catch (err) {
        return err;
      }
    };
    if (setGrid.endpoint === "villagerType" || typeof setGrid === "object") {
      retrieveVillagerGridData();
    } else {
      retrieveGridData();
    }
  }, [setGrid]);
  const endpoints = [
    "villagerType",
    "/villager",
    "villager",
    "villagerPersonality",
    "villagerHobby",
  ];
  console.log(setGrid.endpoint);

  const fish = creatures.filter(
    (creatures) => creatures.sourceSheet === "Fish"
  );
  const insect = creatures.filter(
    (creatures) => creatures.sourceSheet === "Insects"
  );
  const seaCreature = creatures.filter(
    (creatures) => creatures.sourceSheet === "Sea Creatures"
  );
  const villager = creatures.filter(
    (creatures) => creatures.sourceSheet === "Villagers"
  );
  villagerInfo();

  const displayFishGrid = fish.map((creature) => {
    return (
      <GridItem
        toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
        key={creature.name}
        icon={creature.iconImage}
        name={creature.name}
        grabCreatureInfo={grabCreatureInfo}
        type={creature.sourceSheet}
        creatureTrigger={creatureTrigger}
      />
    );
  });
  const displayInsectGrid = insect.map((creature) => {
    return (
      <GridItem
        toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
        key={creature.name}
        icon={creature.iconImage}
        name={creature.name}
        grabCreatureInfo={grabCreatureInfo}
        type={creature.sourceSheet}
        creatureTrigger={creatureTrigger}
      />
    );
  });
  const displaySeaCreatureGrid = seaCreature.map((creature) => {
    return (
      <GridItem
        toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
        key={creature.name}
        icon={creature.iconImage}
        name={creature.name}
        grabCreatureInfo={grabCreatureInfo}
        type={creature.sourceSheet}
        creatureTrigger={creatureTrigger}
      />
    );
  });
  const displayVillagerGrid = villager.map((creature) => {
    const villagerNameStyle = {
      color: creature.nameColor,
      backgroundColor: creature.bubbleColor,
    };
    return (
      <GridItem
        toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
        key={creature.name}
        icon={creature.iconImage}
        name={creature.name}
        grabCreatureInfo={grabCreatureInfo}
        type={creature.sourceSheet}
        nametagStyle={villagerNameStyle}
        trigger={trigger}
        creatureTrigger={creatureTrigger}
      />
    );
  });
  return (
    <div className="grid-container">
      {creatures.length === 0 ? (
        <div className="icons">
          <LoadingGrid />
        </div>
      ) : (
        ""
      )}
      {setGrid === "/caughtNow" ? (
        <div className="icons">
          {displayFishGrid}
          {displayInsectGrid}
          {displaySeaCreatureGrid}
        </div>
      ) : (
        ""
      )}
      {setGrid === "/fish" ? (
        <div className="icons">{displayFishGrid}</div>
      ) : (
        ""
      )}
      {setGrid === "/insect" ? (
        <div className="icons">{displayInsectGrid}</div>
      ) : (
        ""
      )}
      {setGrid === "/seaCreature" ? (
        <div className="icons">{displaySeaCreatureGrid}</div>
      ) : (
        ""
      )}
      {endpoints.includes(setGrid) || endpoints.includes(setGrid.endpoint) ? (
        <div className="icons">{displayVillagerGrid}</div>
      ) : (
        ""
      )}
    </div>
  );
}
