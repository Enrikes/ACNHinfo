import React from 'react';

export default function Carousel({ furniture }) {
  console.log(furniture);
  const carouselContainer = furniture.map((itemArray) => {
    const villagerFurniture = itemArray.variations ?? [];
    const firstVariation = villagerFurniture[0]?.image;
    const content = firstVariation ?? '';

    // const image = itemArray?.map((single) => {
    //   console.log(single);
    //   return single;
    // });
    return (
      <div className='carousel-item'>
        <img src={content}></img>
      </div>
    );
  });
  return <div className='carousel'>{carouselContainer}</div>;
}
