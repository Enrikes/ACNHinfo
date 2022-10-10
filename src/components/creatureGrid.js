import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './creatureCards';
import LoadingGrid from './loadingGrid';

export default function Grid({
  toggleIsCreatureInfoShown,
  grabCreatureInfo,
  setGrid,
}) {
  const [creatures, setCreature] = useState([]);
  const villagerType = ['villager', 'Alligator'];
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
    retrieveGridData();
  }, [setGrid]);
  const fish = creatures.filter(
    (creaturez) => creaturez.sourceSheet === 'Fish'
  );
  const insect = creatures.filter(
    (creaturez) => creaturez.sourceSheet === 'Insects'
  );
  const seaCreature = creatures.filter(
    (creaturez) => creaturez.sourceSheet === 'Sea Creatures'
  );
  const villager = creatures.filter(
    (creaturez) => creaturez.sourceSheet === 'Villagers'
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
      {creatures.length === 0 ? (
        <div className='icons'>
          <LoadingGrid />
        </div>
      ) : (
        <div className='icons'>{displayFishGrid}</div>
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
      {setGrid === '/villager' || setGrid === '/alligator' ? (
        <div className='icons'>{displayVillagerGrid}</div>
      ) : (
        ''
      )}
    </div>
  );
}
