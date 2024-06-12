import React, { useState } from 'react';

function SupplyChainInformationForm() {
  // Définir les états pour les champs du formulaire
  const [supplyChain, setSupplyChain] = useState('');
  const [information, setInformation] = useState('');

  // Gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du formulaire
    console.log('Supply Chain:', supplyChain);
    console.log('Information:', information);
    // Réinitialiser les champs du formulaire après soumission
    setSupplyChain('');
    setInformation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="supplyChain">Supply Chain:</label>
        <input 
          type="text" 
          id="supplyChain" 
          name="supplyChain" 
          value={supplyChain}
          onChange={(event) => setSupplyChain(event.target.value)}
          required 
        />
      </div>
      <div>
        <label htmlFor="information">Information:</label>
        <textarea 
          id="information" 
          name="information" 
          value={information}
          onChange={(event) => setInformation(event.target.value)}
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SupplyChainInformationForm;
