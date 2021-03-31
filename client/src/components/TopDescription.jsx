import React from 'react';

function TopDescription(props) {
  // console.log(props)
  return (
    <div
    id="topDescription">
      <h2>{props.title} {props.date}</h2>
    </div>
  )
}

export default TopDescription;
