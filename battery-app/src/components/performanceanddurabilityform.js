import React, { useState } from 'react';

function PerformanceAndDurabilityForm() {
  // Définir les états pour les champs du formulaire
  const [performance, setPerformance] = useState('');
  const [durability, setDurability] = useState('');

  // Gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du formulaire
    console.log('Performance:', performance);
    console.log('Durability:', durability);
    // Réinitialiser les champs du formulaire après soumission
    setPerformance('');
    setDurability('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="performance">Performance:</label>
        <input 
          type="text" 
          id="performance" 
          name="performance" 
          value={performance}
          onChange={(event) => setPerformance(event.target.value)}
          required 
        />
      </div>
      <div>
        <label htmlFor="durability">Durability:</label>
        <input 
          type="text" 
          id="durability" 
          name="durability" 
          value={durability}
          onChange={(event) => setDurability(event.target.value)}
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PerformanceAndDurabilityForm;
