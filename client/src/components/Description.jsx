import React from 'react';

function Description(props) {
  // console.log(props)
  return (
    <div
    id="bottomDescription">
      <p>{props.explanation}</p>
    </div>
  )
}

export default Description;
