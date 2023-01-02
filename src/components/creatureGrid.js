import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './creatureCards';
import LoadingGrid from './loadingGrid';
import GridItem from './gridItem';

export default function Grid({
  toggleIsCreatureInfoShown,
  grabCreatureInfo,
  setGrid,
  villagerInfo,
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
        const resp = await axios.get(setGrid.endpoint, {
          params: { species: setGrid.species },
        });
        setCreature(resp.data);
      } catch (err) {
        return err;
      }
    };
    if (setGrid.endpoint === 'villagerType' || typeof setGrid === 'object') {
      retrieveVillagerGridData();
    } else {
      retrieveGridData();
    }
  }, [setGrid]);

  const fish = creatures.filter(
    (creatures) => creatures.sourceSheet === 'Fish'
  );
  const insect = creatures.filter(
    (creatures) => creatures.sourceSheet === 'Insects'
  );
  const seaCreature = creatures.filter(
    (creatures) => creatures.sourceSheet === 'Sea Creatures'
  );
  const villager = creatures.filter(
    (creatures) => creatures.sourceSheet === 'Villagers'
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
    const villagerNameStyle = {
      color: creature.nameColor,
      backgroundColor: creature.bubbleColor,
    };
    return (
      <Card
        toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
        key={creature.name}
        icon={creature.iconImage}
        name={creature.name}
        grabCreatureInfo={grabCreatureInfo}
        type={creature.sourceSheet}
        nametagStyle={villagerNameStyle}
      />
    );
  });
  return (
    <div className='grid-container'>
      {creatures.length === 0 ? (
        <div className='icons'>
          <LoadingGrid />
        </div>
      ) : (
        ''
      )}
      {setGrid === '/fish' ? (
        <div className='icons'>{displayFishGrid}</div>
      ) : (
        ''
      )}
      {setGrid === '/insect' ? (
        <div className='icons'>{displayInsectGrid}</div>
      ) : (
        ''
      )}
      {setGrid === '/seaCreature' ? (
        <div className='icons'>{displaySeaCreatureGrid}</div>
      ) : (
        ''
      )}
      {setGrid.endpoint === 'villagerType' ||
      setGrid === '/villager' ||
      setGrid.endpoint === 'villager' ||
      setGrid.endpoint === 'villagerPersonality' ||
      setGrid.endpoint === 'villagerHobby' ? (
        <div className='icons'>{displayVillagerGrid}</div>
      ) : (
        ''
      )}
    </div>
  );
}
