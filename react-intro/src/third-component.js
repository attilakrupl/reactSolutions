import React from 'react';

function something(item, idx) {
  return <li key={idx}>{item}</li>;
}

export default function ThirdComponent(props) {
  return <ul>{props.items.map(something)}</ul>;
}
