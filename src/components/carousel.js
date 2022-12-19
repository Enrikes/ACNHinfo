import React from 'react';

export default function Carousel({ furniture }) {
  const carouselContainer = furniture.map((itemArray) => {
    const villagerFurniture = itemArray.variations ?? [];
    const firstVariation = villagerFurniture[0]?.image;
    const content = firstVariation ?? '';
    const furnitureName = itemArray.name;
    if (content === '')
      return (
        <div className='carousel-item'>
          <div className='furniture-name'>{furnitureName}</div>
          <img src={itemArray.image}></img>
        </div>
      );

    return (
      <div className='carousel-item'>
        <div className='furniture-name'>{furnitureName}</div>
        <img src={content}></img>
      </div>
    );
  });
  return <div className='carousel'>{carouselContainer}</div>;
}
