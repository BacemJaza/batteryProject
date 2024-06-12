// Navbar.js
import React from 'react';

function Navbar({ onItemClick }) {
  return (
    <div className="navbar bg-base-100">
      <a href="#general" className="btn btn-ghost text-xl" onClick={() => onItemClick("General Information")}>General Information</a>
      <a href="#supply-chain" className="btn btn-ghost text-xl" onClick={() => onItemClick("Supply Chain Information")}>Supply Chain Information</a>
      <a href="#material" className="btn btn-ghost text-xl" onClick={() => onItemClick("Battery Material and Composition")}>Battery Material and Composition</a>
      <a href="#circularity" className="btn btn-ghost text-xl" onClick={() => onItemClick("Design of Circularity")}>Design of Circularity</a>
      <a href="#performance" className="btn btn-ghost text-xl" onClick={() => onItemClick("Performance and Durability")}>Performance and Durability</a>
    </div>
  );
}

export default Navbar;

