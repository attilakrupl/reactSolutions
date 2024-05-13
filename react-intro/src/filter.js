import React from 'react';

function listFilterValues(filterValue, index) {
  const inputId = `vehicle${index}`;

  // Format string in JS: "vehicle" + ${index} + "car"
  // Format string v2: `vehicle${index}car`

  return (
    <>
      <input
        checked={filterValue.checked}
        type="checkbox"
        id={inputId}
        name={inputId}
        onChange={() => {
          console.log('checkbox clicked: ' + inputId);
        }}
      />
      <label className="filterCheckBox">{filterValue.name}</label>
      <br />
    </>
  );
}

export default function Filter(props) {
  return (
    <>
      <div key={`PropertyDivKey${props.filterName}`} className="borderedDiv">
        <h4>{props.filterName}</h4>
        {props.filterList.map(listFilterValues)}
      </div>
    </>
  );
}
