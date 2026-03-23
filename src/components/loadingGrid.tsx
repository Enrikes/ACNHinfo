import React from 'react';
import Card from './creatureCards';
import imageUrl from '../img/grid/loading.png';
import SkeletonCard from '../skeleton/skeletonCard';

interface sketetonCardProp {
  index: Number;
}
export default function LoadingGrid({}: sketetonCardProp): React.ReactElement {
  const loadingCards = [];
  for (let i = 0; i < 80; i++) {
    loadingCards.push(<SkeletonCard index={i} />);
  }

  return loadingCards;
}
