import React from 'react';
import { useState } from 'react';
import DropdownItem from './dropdownitem';
export default function VillagerFilter({ setGrid, villager }) {
  const [isOpen, setIsOpen] = useState(false);
  function setSpecies(species) {
    setGrid(species);
  }

  return (
    <div className='dropdown-container'>
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
            <DropdownItem
              type='All'
              endpoint='villager'
              function={setSpecies}
            />
            <DropdownItem
              type='Alligator'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Bear'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Cat'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Deer'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Eagle'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Goat'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Hippo'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Koala'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Mouse'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Penguin'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Rhinoceros'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Tiger'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Anteater'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Bird'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Chicken'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Dog'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Elephant'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Gorilla'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Horse'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Lion'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Octopus'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Pig'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Sheep'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Wolf'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Bull'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Cow'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Duck'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Frog'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Hamster'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Kangaroo'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Monkey'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Ostrich'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Rabbit'
              endpoint='villagerType'
              function={setSpecies}
            />
            <DropdownItem
              type='Squirrel'
              endpoint='villagerType'
              function={setSpecies}
            />
            <div className='dropdown-item-dummy'>&nbsp;&nbsp;&nbsp; </div>
          </div>
        )}
      </div>
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
