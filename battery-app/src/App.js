import './App.css';
import Headline from './layout/Headline';
import React from 'react';
import Navbar from './navbar';

function App() {
  return (
    <div>
      <Navbar />
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
    </div>
  );
}

export default App;
