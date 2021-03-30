import React from 'react';

function TopDescription(props) {
  // console.log(props)
  return (
    <div
    id="topDescription">
      {props.title} {props.date}
    </div>
  )
}

export default TopDescription;
