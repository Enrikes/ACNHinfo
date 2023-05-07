import React, { useState } from "react";
import male from "../img/villager/male.png";
import female from "../img/villager/female.png";
import CarouselOld from "./carousel";
import OutsideAlerter from "./outsideAlerter";
import xMark from "../img/overaly/exit-button.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import villagerCSS from "./villagerInfo.module.css";

export default function VillagerInfo({
  villager,
  toggleIsCreatureInfoShown,
  furniture,
}) {
  villager = villager.filteredCreatures[0];
  furniture = furniture.furnitureArray;
  function BrightColorDetector(color) {
    // Calculate brightness of color
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Return text color based on brightness
    if (brightness > 125) {
      return "black";
    } else {
      return "white";
    }
  }
  BrightColorDetector(villager.bubbleColor);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const villagerName = {
    color: villager.nameColor,
    backgroundColor: villager.bubbleColor,
  };
  const villagerDescTab = {
    backgroundColor: villager.bubbleColor,
    color: BrightColorDetector(villager.bubbleColor),
  };
  function disableScroll() {
    document.body.style.overflow = "hidden";
  }
  disableScroll();
  function hideCreatureInfo() {
    toggleIsCreatureInfoShown();
    enableScroll();
  }

  function enableScroll() {
    document.body.style.overflow = "scroll";
  }

  function gender(genderId) {
    if (genderId === "Male") {
      return <img className="villager-gender" src={male}></img>;
    } else {
      return <img className="villager-gender" src={female}></img>;
    }
  }
  return (
    <div className={villagerCSS["background-blur"]}>
      <OutsideAlerter state={hideCreatureInfo}>
        <div className={villagerCSS["villager-container"]}>
          <div className={villagerCSS["villager-header"]}>
            <h1 className={villagerCSS["villager-title"]} style={villagerName}>
              {villager.name}
            </h1>
            <div className={villagerCSS["x-mark-container"]}>
              <img
                src={xMark}
                className={villagerCSS["x-mark"]}
                onClick={hideCreatureInfo}
              ></img>
            </div>
          </div>

          <div className={villagerCSS["villager-image-container"]}>
            <img
              className={villagerCSS["villager-image"]}
              src={villager.photoImage}
            ></img>
            <div className={villagerCSS["villager-gender-container"]}>
              {gender(villager.gender)}
            </div>
          </div>
          <div className={villagerCSS["villager-description"]}>
            <div className={villagerCSS["villager-phrase"]}>
              {villager.favoriteSaying}
            </div>
          </div>
          <div className={villagerCSS["villager-info-container"]}>
            <div className={villagerCSS["villager-desc-1"]}>
              <div className={villagerCSS["villager-desc-box"]}>
                <div
                  className={villagerCSS["villager-desc-title"]}
                  style={villagerDescTab}
                >
                  Species
                </div>
                <div className={villagerCSS["villager-desc-content"]}>
                  {villager.species}
                </div>
              </div>
              <div className={villagerCSS["villager-desc-box"]}>
                <div
                  className={villagerCSS["villager-desc-title"]}
                  style={villagerDescTab}
                >
                  Hobby
                </div>
                <div className={villagerCSS["villager-desc-content"]}>
                  {villager.hobby}
                </div>
              </div>
            </div>
            <div className={villagerCSS["villager-desc-2"]}>
              <div className={villagerCSS["villager-desc-box"]}>
                <div
                  className={villagerCSS["villager-desc-title"]}
                  style={villagerDescTab}
                >
                  Personality
                </div>
                <div className={villagerCSS["villager-desc-content"]}>
                  {villager.personality}
                </div>
              </div>
              <div className={villagerCSS["villager-desc-box"]}>
                <div
                  className={villagerCSS["villager-desc-title"]}
                  style={villagerDescTab}
                >
                  Favorite Song
                </div>
                <div className={villagerCSS["villager-desc-content"]}>
                  {villager.favoriteSong}
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-container">
            <div className="carousel-title" style={villagerDescTab}>
              <h1>Furniture in Home</h1>
            </div>
            <Carousel responsive={responsive} autoPlay="true">
              {furniture.map((carouselItem) => {
                if (carouselItem.image === undefined) {
                  return (
                    <div className="carousel-item">
                      <div className="furniture-name">{carouselItem.name}</div>

                      <img src={carouselItem.variations[0].image}></img>
                    </div>
                  );
                }
                return (
                  <div className="carousel-item">
                    <div className="furniture-name">{carouselItem.name}</div>

                    <img src={carouselItem.image}></img>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </OutsideAlerter>
    </div>
  );
}
