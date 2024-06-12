import React, { useState } from 'react';

function DesignOfCircularityForm() {
  // Définir les états pour les champs du formulaire
  const [circleType, setCircleType] = useState('');
  const [circleSize, setCircleSize] = useState('');

  // Gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du formulaire
    console.log('Circle Type:', circleType);
    console.log('Circle Size:', circleSize);
    // Réinitialiser les champs du formulaire après soumission
    setCircleType('');
    setCircleSize('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="circleType">Circle Type:</label>
        <input 
          type="text" 
          id="circleType" 
          name="circleType" 
          value={circleType}
          onChange={(event) => setCircleType(event.target.value)}
          required 
        />
      </div>
      <div>
        <label htmlFor="circleSize">Circle Size:</label>
        <input 
          type="text" 
          id="circleSize" 
          name="circleSize" 
          value={circleSize}
          onChange={(event) => setCircleSize(event.target.value)}
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DesignOfCircularityForm;


