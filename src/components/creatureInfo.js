import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MonthGrid from './monthGrid';
import Timeline from './timeLine';
import VillagerInfo from './villagerInfo';
import xMark from '../img/overaly/exit-button.png';
import Loading from './loading';
import CardCSS from './creatureInfo.module.css';

export default function CreatureInfo({
  cardInfo,
  toggleIsCreatureInfoShown,
  url,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [creature, setCreature] = useState();
  const [villager, setVillager] = useState();
  const [furniture, setFurniture] = useState();
  const [urlState, setUrlState] = useState();
  function hideCreatureInfo(e) {
    if (e.currentTarget != e.target) return;
    e.stopPropagation();
    toggleIsCreatureInfoShown();
    enableScroll();
  }
  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  disableScroll();
  function enableScroll() {
    document.body.style.overflow = 'scroll';
  }
  console.log(isLoading);
  useEffect(() => {
    if (!isLoading) {
      const parent1 = document.querySelectorAll(
        '.timeline-mobile-am-container .timeline-hour-active'
      );
      const currentHourAM = document.querySelectorAll(
        '.timeline-mobile-am-container .timeline-hour-active-current'
      );
      const parent2 = document.querySelectorAll(
        '.timeline-mobile-pm-container .timeline-hour-active'
      );
      console.log(currentHourAM);
      if (
        currentHourAM[0]?.classList.contains('timeline-hour-active-current')
      ) {
        currentHourAM[0].style.borderRadius = '0 0 8px 8px';
      } else {
        console.log('test');
      }
      if (parent1[0].classList.contains('timeline-hour-active')) {
        parent1[0].style.borderRadius = '8px 0 0 8px';
        parent1[0].style.backgroundColor = 'red';
      }

      if (parent2[0].classList.contains('timeline-hour-active')) {
        parent2[0].style.borderRadius = '0 0 0 0';
      }
      if (
        parent2[parent2.length - 1].classList.contains('timeline-hour-active')
      ) {
        parent2[parent2.length - 1].style.borderRadius = '0 8px 8px 0';
        parent2[parent2.length - 1].style.backgroundColor = 'green';
        parent2[parent2.length - 1].style.border = 'none';
      }
    }
  }, [isLoading]);
  const endpoints = [
    'villager',
    'villagerType',
    'villagerPersonality',
    'villagerHobby',
  ];

  useEffect(() => {
    if (endpoints.includes(url.endpoint)) {
      axios
        .get('/singleVillager', { params: { name: cardInfo } })
        .then((res) => {
          setVillager(res.data.filteredCreatures[0]);
          setFurniture(res.data.furnitureArray);
          setIsLoading(false);
        });
    } else {
      axios
        .get('/singleCreature', { params: { name: cardInfo } })
        .then((res) => {
          setCreature(res.data[0]);
          setIsLoading(false);
        });
    }
  }, []);

  if (
    url === '/villager' ||
    url.endpoint === 'villagerType' ||
    url.endpoint === 'villagerPersonality' ||
    url.endpoint === 'villagerHobby'
  ) {
    return isLoading ? (
      <div className='creature-blur'></div>
    ) : (
      <VillagerInfo
        villager={villager}
        toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
        furniture={furniture}
      />
    );
  } else {
    const months = creature?.hemispheres.north.monthsArray;
    const price = (150 / 100) * creature?.sell;

    return isLoading ? (
      <div className={CardCSS['background-blur']}>
        <Loading />
      </div>
    ) : (
      <div className={'creature-container'}>
        <div
          className={CardCSS['background-blur']}
          onClick={(e) => {
            hideCreatureInfo(e);
          }}
        >
          <div className={CardCSS['creature-info-container']}>
            <div className={CardCSS['creature-header']}>
              <h1 className={CardCSS['creature-title']}>{creature.name}</h1>
              <div
                className={CardCSS['x-mark-container']}
                onClick={hideCreatureInfo}
              >
                <img
                  className={CardCSS['x-mark']}
                  src={xMark}
                  onClick={hideCreatureInfo}
                ></img>
              </div>
            </div>
            <img
              id={CardCSS['creature-img']}
              src={creature.critterpediaImage}
            ></img>
            <div className={CardCSS['creature-catch-phrase-container']}>
              <p id={CardCSS['creature-catch-phrase']}>
                {creature.catchPhrase}
              </p>
            </div>
            <div className={CardCSS['availability']}>
              <MonthGrid months={months} />

              <Timeline
                time={creature.hemispheres.north.timeArray}
                timeFormat={creature?.hemispheres.north.time}
              />
            </div>

            <div className={CardCSS['creature-description']}>
              <div className={CardCSS['creature-desc-1']}>
                <div className={CardCSS['creature-desc-box']}>
                  <h1 className={CardCSS['creature-desc-title']}>Location</h1>
                  <div className={CardCSS['creature-desc-content']}>
                    <p>{creature.whereHow}</p>
                  </div>
                </div>
              </div>

              <div className={CardCSS['creature-desc-2']}>
                <div className={CardCSS['creature-desc-box']}>
                  <h1 className={CardCSS['creature-desc-title']}>Price</h1>
                  <div className={CardCSS['creature-desc-content']}>
                    <p>{creature.sell} Bells</p>
                    <p>Flick Price: {price} Bells</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
