import React, { useState } from 'react';

function BatteryMaterialAndCompositionForm() {
  // Définir les états pour les champs du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du formulaire
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Réinitialiser les champs du formulaire après soumission
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={name}
          onChange={(event) => setName(event.target.value)}
          required 
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required 
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required 
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input 
          type="password" 
          id="confirmPassword" 
          name="confirmPassword" 
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BatteryMaterialAndCompositionForm;
