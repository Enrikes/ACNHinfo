import React, { useEffect, useState } from "react";
import axios from "axios";
import MonthGrid from "./monthGrid";
import Timeline from "./timeLine";

export default function CreatureInfo({ cardInfo, toggleIsCreatureInfoShown }) {
  const [isLoading, setIsLoading] = useState(true);
  const [creature, setCreature] = useState();
  function hideCreatureInfo() {
    toggleIsCreatureInfoShown();
  }
  useEffect(() => {
    axios.get("/singleCreature", { params: { name: cardInfo } }).then((res) => {
      console.log(res.data[0]);
      setCreature(res.data[0]);
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const months = creature?.hemispheres.north.monthsArray;
  const price = (150 / 100) * creature?.sell;

  return isLoading ? (
    <div className="creature-blur"></div>
  ) : (
    <div className="creature-blur">
      <div className="x-mark" onClick={hideCreatureInfo}>
        <img src="/../src/img/loading/exit-button.png"></img>
      </div>
      <div className="creature-info-container">
        <h1 className="creature-title">{creature.name}</h1>
        <img id="creature-img" src={creature.critterpediaImage}></img>
        <p style={{ textAlign: "center" }}>{creature.catchPhrase}</p>
        <MonthGrid months={months} />
        <h1 className="acHeader">Active Hours</h1>
        <div className="creature-time">
          <p>{creature?.hemispheres.north.time}</p>
        </div>

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
