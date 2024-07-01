import React, { useState } from 'react';
import Navbar from './layout/navbar';
import Headline from './layout/Headline';
import Footer from './layout/footer';
import GeneralInfoForm from './components/GeneralInfoForm';
import BatteryMaterialAndCompositionForm from './components/batterymaterialandcompotionform';
import DesignOfCircularityForm from './components/designofcircularityform';
import PerformanceAndDurabilityForm from './components/performanceanddurabilityform';
import SupplyChainInformationForm from './components/supplychaininformationform';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [activeForm, setActiveForm] = useState(null);
  const [authentified,setAuthentified] = useState(true);
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
      {!activeForm && <div className='flex flex-col mx-auto justify-center w-[50%] text-2xl font-bold mt-[10%]'>
        <FontAwesomeIcon icon={faCircleUp} />
        <p className='flex mx-auto'>Select one of the items to view information.</p>
        </div>}
      {/* Ajoutez le composant Footer à la fin */}
      <Footer />
    </div>
  );
}

export default App;
