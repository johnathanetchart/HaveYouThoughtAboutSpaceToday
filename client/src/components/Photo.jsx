import React from 'react';

function Photo(props) {
  // console.log(props)
  return (
    <div
    id="mainimage"
    style={
      { backgroundImage: `url(${props.photoUrl})`}
    }
    >
    </div>
  )
}

export default Photo;
