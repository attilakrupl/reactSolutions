import React from 'react';
import Hotel from './hotel';

export default function Hotels(props) {
  return (
    <>
      {props.hotelData.map((hotelObject) => {
        return <Hotel key={hotelObject.name} hotel={hotelObject} />;
      })}
    </>
  );
}
