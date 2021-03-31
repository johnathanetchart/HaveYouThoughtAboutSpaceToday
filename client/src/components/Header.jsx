import React from 'react';

function Header() {

  return (
    <div
    id="header">
      <i
        id="logo"
        style={
        { backgroundImage: `url(http://i.imgur.com/NSOcrhj.png)`}
        }
      />
      <h1>Have you thought about space today?</h1>
    </div>
  )
}

export default Header;
