import React from 'react';

function TopDescription(props) {
  // console.log(props)
  return (
    <div
    id="topDescription">
      <h2>Happy Thoughts | {props.title} {props.date}</h2>
    </div>
  )
}

export default TopDescription;
