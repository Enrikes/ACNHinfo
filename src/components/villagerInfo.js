import React from 'react';

export default function VillagerInfo({ villager, toggleIsCreatureInfoShown }) {
  console.log(villager);
  function hideCreatureInfo() {
    toggleIsCreatureInfoShown();
  }
  function gender(genderId) {
    if (genderId === 'Male') {
      return 'M';
    } else {
      return 'F';
    }
  }
  console.log(villager);
  return (
    <div className='creature-blur' onClick={hideCreatureInfo}>
      <div className='x-mark' onClick={console.log('deez bolas')}>
        <img src='/../src/img/loading/exit-button.png'></img>
      </div>
      <div className='creature-info-container'>
        <h1 className='creature-title'>
          {villager.name}
          <div id='villager-gender'>{gender(villager.gender)}</div>
        </h1>
        <div className='villager-image-container'>
          <img className='villager-image' src={villager.photoImage}></img>
        </div>
        <div className='creature-description'></div>
      </div>
    </div>
  );
}
