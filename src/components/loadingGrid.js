import React from "react";
import Card from "./creatureCards";
import imageUrl from "../img/grid/loading.png";
import SkeletonCard from "../skeleton/skeletonCard";

export default function LoadingGrid({}) {
  const loadingCards = [];
  for (let i = 0; i < 80; i++) {
    loadingCards.push(<SkeletonCard />);
  }

  return loadingCards;
}
