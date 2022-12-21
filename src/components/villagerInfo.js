import React from 'react';
import male from '../img/villager/male.png';
import female from '../img/villager/female.png';
import Carousel from './carousel';
import OutsideAlerter from './outsideAlerter';
import xMark from '../img/overaly/exit-button.png';

export default function VillagerInfo({
  villager,
  toggleIsCreatureInfoShown,
  furniture,
}) {
  const villagerName = {
    color: villager.nameColor,
    backgroundColor: villager.bubbleColor,
  };
  const villagerDescTab = { backgroundColor: villager.bubbleColor };
  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  disableScroll();
  function hideCreatureInfo() {
    toggleIsCreatureInfoShown();
    enableScroll();
  }

  function enableScroll() {
    document.body.style.overflow = 'scroll';
  }

  function gender(genderId) {
    if (genderId === 'Male') {
      return <img className='villager-gender' src={male}></img>;
    } else {
      return <img className='villager-gender' src={female}></img>;
    }
  }
  return (
    <div className='background-blur'>
      <OutsideAlerter state={hideCreatureInfo}>
        <div className='creature-info-container'>
          <div className='creature-header'>
            <h1 className='creature-title' style={villagerName}>
              {villager.name}
            </h1>
            <div className='x-mark-container'>
              <img
                src={xMark}
                className='x-mark'
                onClick={hideCreatureInfo}
              ></img>
            </div>
          </div>

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
                <div className='villager-desc-title' style={villagerDescTab}>
                  Species
                </div>
                <div className='villager-desc-content'>{villager.species}</div>
              </div>
              <div className='villager-desc-box'>
                <div className='villager-desc-title' style={villagerDescTab}>
                  Hobby
                </div>
                <div className='villager-desc-content'>{villager.hobby}</div>
              </div>
            </div>
            <div className='villager-desc-2'>
              <div className='villager-desc-box'>
                <div className='villager-desc-title' style={villagerDescTab}>
                  Personality
                </div>
                <div className='villager-desc-content'>
                  {villager.personality}
                </div>
              </div>
              <div className='villager-desc-box'>
                <div className='villager-desc-title' style={villagerDescTab}>
                  Favorite Song
                </div>
                <div className='villager-desc-content'>
                  {villager.favoriteSong}
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-container'>
            <div className='carousel-title' style={villagerDescTab}>
              <h1>Furniture in Home</h1>
            </div>

            <Carousel furniture={furniture} />
          </div>
        </div>
      </OutsideAlerter>
    </div>
  );
}
