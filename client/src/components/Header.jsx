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
      <h2>Have you thought about space today?</h2>
      <h4>Well maybe you should.</h4>
    </div>
  )
}

export default Header;
