import React from 'react';
import male from '../img/villager/male.png';
import female from '../img/villager/female.png';

export default function VillagerInfo({ villager, toggleIsCreatureInfoShown }) {
  console.log(villager);
  console.log(villager.nameColor);
  const villagerName = {
    color: villager.nameColor,
    backgroundColor: villager.bubbleColor,
  };
  function hideCreatureInfo() {
    toggleIsCreatureInfoShown();
  }
  function gender(genderId) {
    if (genderId === 'Male') {
      return <img className='villager-gender' src={male}></img>;
    } else {
      return <img className='villager-gender' src={female}></img>;
    }
  }
  return (
    <div className='creature-blur' onClick={hideCreatureInfo}>
      <div className='x-mark' onClick={console.log('deez bolas')}>
        <img src='/../src/img/loading/exit-button.png'></img>
      </div>
      <div className='creature-info-container'>
        <h1 className='creature-title' style={villagerName}>
          {villager.name}
        </h1>
        <div className='villager-image-container'>
          <img className='villager-image' src={villager.photoImage}></img>
          <div className='villager-gender-container'>
            {gender(villager.gender)}
          </div>
        </div>
        <div className='creature-description'>
          <div className='catch-phrase'>{villager.favoriteSaying}</div>
        </div>
        <div className='villager-info-container'>
          <div className='villager-desc-1'>
            <div className='villager-desc-box'>
              <div className='villager-desc-title'>Species</div>
              <div className='villager-desc-content'>{villager.species}</div>
            </div>
            <div className='villager-desc-box'>
              <div className='villager-desc-title'>Hobby</div>
              <div className='villager-desc-content'>{villager.hobby}</div>
            </div>
          </div>
          <div className='villager-desc-2'>
            <div className='villager-desc-box'>
              <div className='villager-desc-title'>Personality</div>
              <div className='villager-desc-content'>
                {villager.personality}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
