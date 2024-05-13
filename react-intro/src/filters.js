import React from 'react';
import Filter from './filter';

export default function Filters(props) {
  return (
    <div>
      {Object.keys(props.filterData).map((key) => {
        return (
          <Filter
            key={key}
            filterName={key}
            filterList={props.filterData[key]}
          />
        );
      })}
    </div>
  );
}
