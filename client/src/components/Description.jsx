import React from 'react';

function Description(props) {
  // console.log(props)
  return (
    <div
    id="bottomDescription">
      {props.explanation}
    </div>
  )
}

export default Description;
