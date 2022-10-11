import React from 'react';
export default function VillagerFilter({ setGrid }) {
  function setSpecies(species) {
    setGrid('/alligator');
  }
  return (
    <div className='villager-filter-container' onClick={setSpecies}>
      <div
        className='villager-filter'
        onClick={() => {
          setSpecies('/alligator');
        }}
      >
        Alligator
      </div>
      <div
        className='villager-filter'
        onClick={() => {
          setSpecies('/deer');
        }}
      >
        Deer
      </div>
      <div
        className='villager-filter'
        onClick={() => {
          setSpecies('/dog');
        }}
      >
        Dog
      </div>
    </div>
  );
}
