import React from 'react';
import { useState } from 'react';
import DropdownItem from './dropdown';
export default function VillagerFilter({ setGrid, villager }) {
  const [isOpen, setIsOpen] = useState(false);
  function setSpecies(species) {
    console.log(species);
    setGrid(species);
  }

  return (
    <div className='dropdown-menu'>
      <div
        className='dropdown-btn'
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        <p className='dropdown-pad'>Species</p>
      </div>
      {isOpen && (
        <div className='dropdown-content'>
          <div
            className='dropdown-item'
            onClick={() => {
              setSpecies({ species: 'Dog', endpoint: 'villagerType' });
            }}
          >
            Dog
          </div>
          <div
            className='dropdown-item'
            onClick={() => {
              setSpecies({ species: 'Alligator', endpoint: 'villagerType' });
            }}
          >
            Aliigator
          </div>
        </div>
      )}
    </div>
  );
}
// <div className='villager-filter-container'>
//   <div
//     className='villager-filter'
//     onClick={() => {
//       setSpecies({ species: 'Alligator', endpoint: 'villagerType' });
//     }}
//   >
//     Alligator
//   </div>
//   <div
//     className='villager-filter'
//     onClick={() => {
//       setSpecies({ species: 'Dog', endpoint: 'villagerType' });
//     }}
//   >
//     Dog
//   </div>
//   <div
//     className='villager-filter'
//     onClick={() => {
//       setSpecies({ species: 'Deer', endpoint: 'villagerType' });
//     }}
//   >
//     Deer
//   </div>
// </div>
