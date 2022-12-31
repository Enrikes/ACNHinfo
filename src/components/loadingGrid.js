import React from 'react';
import Card from './creatureCards';
import imageUrl from '../img/grid/loading.png';

export default function LoadingGrid({}) {
  const loadingItems = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  const loadingCards = loadingItems.map((items) => {
    return <Card name={items} icon={imageUrl} />;
  });

  return loadingCards;
}
