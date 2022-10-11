import React from 'react';
export default function VillagerFilter({ setGrid }) {
  function setSpecies(species) {
    console.log(species);
    setGrid(species);
  }
  return (
    <div className='villager-filter-container'>
      <div
        className='villager-filter'
        onClick={() => {
          setSpecies({ species: 'Alligator', endpoint: 'villagerType' });
        }}
      >
        Alligator
      </div>
      <div
        className='villager-filter'
        onClick={() => {
          setSpecies({ species: 'Dog', endpoint: 'villagerType' });
        }}
      >
        Dog
      </div>
      <div
        className='villager-filter'
        onClick={() => {
          setSpecies({ species: 'Deer', endpoint: 'villagerType' });
        }}
      >
        Deer
      </div>
    </div>
  );
}
