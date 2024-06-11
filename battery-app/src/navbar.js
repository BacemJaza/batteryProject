// Navbar.js

import React from 'react';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <a href="#general" className="btn btn-ghost text-xl">General Information</a>
      <a href="#supply-chain" className="btn btn-ghost text-xl">Supply Chain Information</a>
      <a href="#material" className="btn btn-ghost text-xl">Battery Material and Composition</a>
      <a href="#circularity" className="btn btn-ghost text-xl">Design of Circularity</a>
      <a href="#performance" className="btn btn-ghost text-xl">Performance and Durability</a>
    </div>
  );
}

export default Navbar;
