import React, { useEffect, useState } from "react";
import axios from "axios";
import MonthGrid from "./monthGrid";
import Timeline from "./timeLine";
import VillagerInfo from "./villagerInfo";

export default function CreatureInfo({
  cardInfo,
  toggleIsCreatureInfoShown,
  url,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [creature, setCreature] = useState();
  const [villager, setVillager] = useState();
  const [urlState, setUrlState] = useState();
  function hideCreatureInfo() {
    toggleIsCreatureInfoShown();
  }
  function setUrlNewState() {
    setUrlState(url);
  }
  useEffect(() => {
    console.log("i ran");
    if (url === "/villager") {
      console.log("i ran");

      axios
        .get("/singleVillager", { params: { name: cardInfo } })
        .then((res) => {
          console.log(res.data);
          setVillager(res.data[0]);
        });
    } else {
      axios
        .get("/singleCreature", { params: { name: cardInfo } })
        .then((res) => {
          console.log(res.data[0]);
          setCreature(res.data[0]);
        });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  console.log(villager);
  if (url === "/villager") {
    return isLoading ? (
      <div className="creature-blur"></div>
    ) : (
      <VillagerInfo
        villager={villager}
        toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
      />
    );
  } else {
    console.log("I SHOULD NOT BE CONSOLINH");
    const months = creature?.hemispheres.north.monthsArray;
    const price = (150 / 100) * creature?.sell;

    return isLoading ? (
      <div className="creature-blur"></div>
    ) : (
      <div className="creature-container">
        <div className="creature-blur" onClick={hideCreatureInfo}></div>
        <div className="creature-info-container">
          <div className="creature-header" onClick={hideCreatureInfo}>
            <h1 className="creature-title">{creature.name}</h1>
            <div className="x-mark">X</div>
          </div>

          <img id="creature-img" src={creature.critterpediaImage}></img>
          <div className="creature-catch-phrase-container">
            <p id="creature-catch-phrase">{creature.catchPhrase}</p>
          </div>
          <MonthGrid months={months} />
          <div className="creature-time-container">
            <p id="creature-time">{creature?.hemispheres.north.time}</p>
          </div>
          <h1 className="acHeader">Active Hours</h1>

          <Timeline time={creature.hemispheres.north.timeArray} />
          <div className="creature-description">
            <div className="creature-location">
              <h1>Location</h1>
              <p>{creature.whereHow}</p>
            </div>
            <div className="creature-price">
              <h1>Price</h1>
              <p>{creature.sell} Bells</p>
              <p>
                <b>Flick Price:</b> {price} Bells
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
