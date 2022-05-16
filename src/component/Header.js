import React from 'react';


export default function Header(props) {
  return (
    <header>
      <div>
        <a href="#/">
          <h1 className="ecom-item">ECOM</h1>
        </a>
      </div>
      <div>
        
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}