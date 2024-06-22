import React from 'react';

function Navbar({ onItemClick }) {
  return (
    <div className="navbar bg-base-100 flex flex-wrap justify-center border-solid border-4 border-[#33333338] bg-[#3B97C6]">
      <a href="#general" className="btn btn-ghost text-xl text-white" onClick={() => onItemClick("General Information")}>General Information</a>
      <a href="#supply-chain" className="btn btn-ghost text-xl text-white" onClick={() => onItemClick("Supply Chain Information")}>Supply Chain Information</a>
      <a href="#material" className="btn btn-ghost text-xl text-white" onClick={() => onItemClick("Battery Material and Composition")}>Battery Material and Composition</a>
      <a href="#circularity" className="btn btn-ghost text-xl text-white" onClick={() => onItemClick("Design of Circularity")}>Design of Circularity</a>
      <a href="#performance" className="btn btn-ghost text-xl text-white" onClick={() => onItemClick("Performance and Durability")}>Performance and Durability</a>
    </div>
  );
}

export default Navbar;

