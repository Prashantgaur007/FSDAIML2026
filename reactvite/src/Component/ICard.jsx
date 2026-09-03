import React from 'react';

function ICard() {
    let a = 10;
  let name = "John Doe";
    return (
    <div style={{border: '1px solid black', padding: '20px'}}>
        <h2 style={{ color: 'blue' }}>ICard</h2>
      <h2 style={{ color: 'blue' }}>Welcome to Vite</h2>
      <h2>Value of a: {a}</h2>
      <h2>Name: {name}</h2>
    </div>
    )
}

export default ICard;