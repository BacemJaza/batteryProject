import React, { useState } from 'react';
import Navbar from './layout/navbar';
import Headline from './layout/Headline';
import Footer from './layout/footer';
import GeneralInfoForm from './components/GeneralInfoForm';
import BatteryMaterialAndCompositionForm from './components/batterymaterialandcompotionform';
import DesignOfCircularityForm from './components/designofcircularityform';
import PerformanceAndDurabilityForm from './components/performanceanddurabilityform';
import SupplyChainInformationForm from './components/supplychaininformationform';

function App() {
  const [activeForm, setActiveForm] = useState(null);
  const [authentified,setAuthentified] = useState(false);
  const authStyle = {pointerEvents:"none",userSelect:"none",filter:"blur(10px)"}

  const handleItemClick = (itemName) => {
    setActiveForm(itemName);
  };

  return (
    <div>
      <Headline />
      <Navbar onItemClick={handleItemClick} />
      {/* Affichez le formulaire correspondant à l'état actif */}
      {activeForm === "General Information" && <GeneralInfoForm auth={authentified} style={authStyle}/>}
      {activeForm === "Battery Material and Composition" && <BatteryMaterialAndCompositionForm />}
      {activeForm === "Design of Circularity" && <DesignOfCircularityForm />}
      {activeForm === "Performance and Durability" && <PerformanceAndDurabilityForm />}
      {activeForm === "Supply Chain Information" && <SupplyChainInformationForm/>}
      {/* Ajoutez d'autres conditions pour afficher d'autres formulaires si nécessaire */}
      
      {/* Ajoutez le composant Footer à la fin */}
      <Footer />
    </div>
  );
}

export default App;
