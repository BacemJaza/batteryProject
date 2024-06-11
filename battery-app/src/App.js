// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar';

function App() {
  const [message, setMessage] = useState("");

  const handleItemClick = (itemName) => {
    setMessage(`Hello from ${itemName}`);
  };

  return (
    <div>
      <Navbar onItemClick={handleItemClick} />
      <section id="general">
        {/* Contenu de la section General Information */}
      </section>
      <section id="supply-chain">
        {/* Contenu de la section Supply Chain Information */}
      </section>
      <section id="material">
        {/* Contenu de la section Battery Material and Composition */}
      </section>
      <section id="circularity">
        {/* Contenu de la section Design of Circularity */}
      </section>
      <section id="performance">
        {/* Contenu de la section Performance and Durability */}
      </section>
      <div>{message}</div>
    </div>
  );
}

export default App;

