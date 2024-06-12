import React, { useState } from 'react';
import './App.css';
import Navbar from './layout/navbar';
import Headline from './layout/Headline';
import GeneralInfoForm from './components/GeneralInfoForm';
import BatteryMaterialAndCompositionForm from './components/batterymaterialandcompotionform';
import DesignOfCircularityForm from './components/designofcircularityform';
import PerformanceAndDurabilityForm from './components/performanceanddurabilityform';
import SupplyChainInformationForm from './components/supplychaininformationform';

function App() {
  const [activeForm, setActiveForm] = useState(null);

  const handleItemClick = (itemName) => {
    // Mettez à jour l'état avec le nom de l'élément cliqué pour afficher le formulaire correspondant
    setActiveForm(itemName);
  };

  return (
    <div>
      <Headline />
      <Navbar onItemClick={handleItemClick} />
      {/* Affichez le formulaire correspondant à l'état actif */}
      {activeForm === "General Information" && <GeneralInfoForm />}
      {activeForm === "Battery Material and Composition" && <BatteryMaterialAndCompositionForm />}
      {activeForm === "Design of Circularity" && <DesignOfCircularityForm />}
      {activeForm === "Performance and Durability" && <PerformanceAndDurabilityForm />}
      {activeForm === "Supply Chain Information" && <SupplyChainInformationForm />}
      {/* Ajoutez d'autres conditions pour afficher d'autres formulaires si nécessaire */}
      {/* Contenu des autres sections */}
    </div>
  );
}

export default App;
