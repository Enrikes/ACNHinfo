import React from 'react';

export default function Carousel({ furniture }) {
  const carouselContainer = furniture.map((itemArray) => {
    const furnitureImage = itemArray;

    const image = furnitureImage?.map((single) => {
      console.log(single);
      return single;
    });
    return (
      <div className='carousel-item'>
        <img src={image}></img>
      </div>
    );
  });
  return <div className='carousel'>{carouselContainer}</div>;
}
