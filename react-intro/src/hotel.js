import React from 'react';

export default function Hotel(props) {
  console.log(props);
  return (
    <>
      <div key={`HotelDivKey${props.hotel.name}`} className="borderedDiv">
        <h3 className="hotelNameHeading">{props.hotel.name}</h3>
        <div className="hotelFlexDiv">
          <img className="hotelImage" src={props.hotel.imageURL}></img>
          <div>
            <p>{props.hotel.description}</p>
            <button>Book Now!</button>
          </div>
        </div>
      </div>
    </>
  );
}
