import React, { useEffect, useState } from "react";
import axios from "axios";
import MonthGrid from "./monthGrid";
import Timeline from "./timeLine";
import VillagerInfo from "./villagerInfo";
import xMark from "../img/overaly/exit-button.png";
import Loading from "./loading";
import CardCSS from "./creatureInfo.module.css";
import TimelineCSS from "./timeline.module.css";
import { useQuery } from "@tanstack/react-query";

export default function CreatureInfo({
  cardInfo,
  toggleIsCreatureInfoShown,
  url,
  handleFetchData,
  isVillagerActive,
  isCreatureActive,
}) {
  function hideCreatureInfo(e) {
    if (e.currentTarget != e.target) return;
    e.stopPropagation();
    toggleIsCreatureInfoShown();
    enableScroll();
  }
  function disableScroll() {
    document.body.style.overflow = "hidden";
  }
  disableScroll();
  function enableScroll() {
    document.body.style.overflow = "scroll";
  }
  const endpoints = [
    "/villager",
    "villagerType",
    "villagerPersonality",
    "villagerHobby",
  ];
  const fetchVillager = async () => {
    const { data } = await axios.get("/singleVillager", {
      params: { name: cardInfo },
    });
    const res = data;
    return res;
  };
  const fetchCreature = async () => {
    const { data } = await axios.get("/singleCreature", {
      params: { name: cardInfo },
    });
    const res = data;
    return res;
  };
  function useVillagerQuery(name) {}
  const {
    data: villager,
    isLoading: villagerLoading,
    isFetching,
  } = useQuery(["villager"], fetchVillager, {
    enabled: isVillagerActive,
  });
  const { data: creature, isLoading } = useQuery(["creature"], fetchCreature, {
    enabled: isCreatureActive,
    select: (data) => data[0],
  });

  if (
    url === "/villager" ||
    url.endpoint === "villagerType" ||
    url.endpoint === "villagerPersonality" ||
    url.endpoint === "villagerHobby"
  ) {
    return isFetching ? (
      <div className={CardCSS["background-blur"]}></div>
    ) : (
      <VillagerInfo
        villager={villager}
        toggleIsCreatureInfoShown={toggleIsCreatureInfoShown}
        furniture={villager}
      />
    );
  } else {
    const months = creature?.hemispheres.north.monthsArray;
    const price = (150 / 100) * creature?.sell;

    return isLoading ? (
      <div className={CardCSS["background-blur"]}>
        <Loading />
      </div>
    ) : (
      <div className={"creature-container"}>
        <div
          className={CardCSS["background-blur"]}
          onClick={(e) => {
            hideCreatureInfo(e);
          }}
        >
          <div className={CardCSS["creature-info-container"]}>
            <div className={CardCSS["creature-header"]}>
              <h1 className={CardCSS["creature-title"]}>{creature.name}</h1>
              <div
                className={CardCSS["x-mark-container"]}
                onClick={hideCreatureInfo}
              >
                <img
                  className={CardCSS["x-mark"]}
                  src={xMark}
                  onClick={hideCreatureInfo}
                ></img>
              </div>
            </div>
            <img
              id={CardCSS["creature-img"]}
              src={creature.critterpediaImage}
            ></img>
            <div className={CardCSS["creature-catch-phrase-container"]}>
              <p id={CardCSS["creature-catch-phrase"]}>
                {creature.catchPhrase}
              </p>
            </div>
            <div className={CardCSS["availability"]}>
              <MonthGrid months={months} />

              <Timeline
                time={creature.hemispheres.north.timeArray}
                timeFormat={creature?.hemispheres.north.time}
              />
            </div>

            <div className={CardCSS["creature-description"]}>
              <div className={CardCSS["creature-desc-1"]}>
                <div className={CardCSS["creature-desc-box"]}>
                  <h1 className={CardCSS["creature-desc-title"]}>Location</h1>
                  <div className={CardCSS["creature-desc-content"]}>
                    <p>{creature.whereHow}</p>
                  </div>
                </div>
              </div>

              <div className={CardCSS["creature-desc-2"]}>
                <div className={CardCSS["creature-desc-box"]}>
                  <h1 className={CardCSS["creature-desc-title"]}>Price</h1>
                  <div className={CardCSS["creature-desc-content"]}>
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
