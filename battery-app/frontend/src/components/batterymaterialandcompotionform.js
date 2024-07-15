import React, { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function BatteryMaterialAndCompositionForm() {
  const [showBatteryChemForm, setShowBatteryChemForm] = useState(true);
  const [showBatteryRawForm, setShowBatteryRawForm] = useState(true);
  const [showBatteryCompoForm, setShowBatteryCompoForm] = useState(true);
  const [showHazardousSubForm, setShowHazardousSubForm] = useState(true);
  const [showRelatedIdsForm,setShowRelatedIdsForm] = useState(true);
  const [showConcentrationForm,setShowConcentrationForm] = useState(true);
  const [showImpactForm, setShowImpactForm] = useState(true);
  const [showLocationForm,setLocationForm] = useState(true);
  const [showRelatedHazClassForm,setShowRelatedHazClassForm] = useState(true)
  const [showCompoCAEForm,setShowCompoCAEForm] = useState(true)
  const [showHazClassForm, setShowHazClassForm] = useState(true)
  const [showDescription,setShowDescription] = useState("cathode")
  const [cathodeDescription, setCathodeDescription] = useState("");
  const [anodeDescription, setAnodeDescription] = useState("")
  const [electrolyteDescription, setElectrolyteDescription] = useState("")

  const toggleBatteryChemForm = () => {
    setShowBatteryChemForm(!showBatteryChemForm);
};
  const toggleBatteryRawForm = () => {
    setShowBatteryRawForm(!showBatteryRawForm);
  };
  const toggleBatteryCompoForm = () => {
    setShowBatteryCompoForm(!showBatteryCompoForm);
  };
  const toggleHazardousSubForm = () => {
    setShowHazardousSubForm(!showHazardousSubForm);
  };
  const toggleImpactForm = () => {
    setShowImpactForm(!showImpactForm);
  };

  const toggleRelatedIdsForm = () =>{
    setShowRelatedIdsForm(!showRelatedIdsForm);
  }

  const toggleConcentrationForm = () => {
    setShowConcentrationForm(!showConcentrationForm);
  }

  const toggleLocationForm = () => {
    setLocationForm(!showLocationForm);
  }

  const toggleRelatedHazClassForm = () =>{
    setShowRelatedHazClassForm(!showRelatedHazClassForm)
  }

  const toggleCompoCAEForm = () =>{
    setShowCompoCAEForm(showCompoCAEForm);
  }

  const toggleHazClassForm = () =>{
    setShowHazClassForm(!showHazClassForm)
  }
  const handleShowDescription = (event)=>{
    // console.log(event.target.id)
    setShowDescription(event.target.id)
  }
  // // Définir les états pour les champs du formulaire
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  // // Gérer la soumission du formulaire
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Envoyer les données du formulaire
  //   console.log('Name:', name);
  //   console.log('Email:', email);
  //   console.log('Password:', password);
  //   console.log('Confirm Password:', confirmPassword);
  //   // Réinitialiser les champs du formulaire après soumission
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  //   setConfirmPassword('');
  // };

  return (
    <div className='flex-col justify-center p-10'>
      <div className='flex mx-auto justify-between w-[50%] mb-5'>
        <h2 className="text-2xl font-bold">Battery chemistry</h2>
        <button onClick={toggleBatteryChemForm} className='w-fit rounded-full bg-[#D1D5DB] text-white hover:bg-gray-500 p-2'>
            {showBatteryChemForm ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            )}
        </button>
      </div>
      <div className='flex pb-10'>
      {showBatteryChemForm && (
        <div className='flex mx-auto min-w-[45%] justify-center p-5 bg-[#F3F4F6] rounded-lg'>
          Li-ion
        </div>
      )}
      </div>
      <div className='flex mx-auto justify-between w-[50%] mb-5'>
        <h2 className="text-2xl font-bold">Battery Component</h2>
        <button onClick={toggleBatteryCompoForm} className='w-fit rounded-full bg-[#D1D5DB] text-white hover:bg-gray-500 p-2'>
            {showBatteryCompoForm ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            )}
        </button>
      </div>
      <div className='flex pb-10'>
      {showBatteryCompoForm && (
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 7, label: 'Aliminium' },
                { id: 1, value: 14, label: 'Copper' },
                { id: 2, value: 3, label: 'Binder' },
                { id: 3, value: 2, label: 'Carbon black' },
                { id: 4, value: 16, label: 'Graphite' },
                { id: 5, value: 16, label: 'Plastic' },
                { id: 6, value: 31, label: 'LNMCO' },
                { id: 7, value: 12, label: 'Electrolyte' },
              ],
            },
          ]}
          width={1000}
          height={500}
        />
      )}
      </div>
      <div className='flex mx-auto justify-between w-[50%]'>
        <h2 className="text-2xl font-bold">Battery raw Material</h2>
        <button onClick={toggleBatteryRawForm} className='w-fit rounded-full bg-[#D1D5DB] text-white hover:bg-gray-500 p-2'>
            {showBatteryRawForm ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            )}
        </button>
      </div>
      <div className='flex justify-center p-5'>
      {showBatteryRawForm && (
        <div className='flex mx-auto min-w-[45%] justify-center p-5 bg-[#F3F4F6] rounded-lg'>
        Text here
      </div>
      )}
      </div>

      <div className='flex mx-auto justify-between w-[50%] mb-5'>
        <h2 className="text-2xl font-bold">Related identifiers of the cathode, anode, electrolyte materials</h2>
        <button onClick={toggleRelatedIdsForm} className='w-fit rounded-full bg-[#D1D5DB] text-white hover:bg-gray-500 p-2'>
            {showRelatedIdsForm ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            )}
        </button>
      </div>
      <div className='flex pb-10'>
      {showRelatedIdsForm && (
                <div className='flex mx-auto min-w-[45%] justify-center p-5 bg-[#F3F4F6] rounded-lg'>
                Text here
              </div>
      )}
      </div>
      <div className='flex mx-auto justify-between w-[50%] mb-5'>
        <h2 className="text-2xl font-bold">Composition of the cathode, anode, electrolyte materials</h2>
        <button onClick={toggleCompoCAEForm} className='w-fit rounded-full bg-[#D1D5DB] text-white hover:bg-gray-500 p-2'>
            {showCompoCAEForm ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            )}
        </button>
      </div>
      <div className='flex pb-10'>
      {showCompoCAEForm && (
      <div className='flex flex-col justify-center mx-auto min-w-[45%] p-5 bg-[#F3F4F6] rounded-lg'>
      <div className='flex gap-5 mx-auto justify-center font-bold w-[45%]'>
        <button className='btn' type="button" id='cathode' onClick={handleShowDescription}>Cathode</button>
        <button className='btn' type="button" id='anode' onClick={handleShowDescription}>Anode</button>
        <button className='btn' type="button" id='electrolyte' onClick={handleShowDescription}>Electrolyte</button>
      </div>
        <div className="flex space-x-4 mx-auto justify-between">
         <label className="text-sm text-gray-700 font-bold w-64 pt-5">Description of {showDescription}</label>
         <div className='flex flex-col min-h-[200px]'>
         <div className='flex pt-5'>
         <FontAwesomeIcon icon={faCircle} width='7px' className='p-1' />  material name
         </div>
         <div className='flex min-h-[200px] pt-5 items-start'>
         <FontAwesomeIcon icon={faCircle} width='7px' className='p-1' />  material name
         </div>
         </div>
         
        </div>
  </div>
      )}
      </div>

      <div className='flex mx-auto justify-between w-[50%] mb-5'>
        <h2 className="text-2xl font-bold">Name of hazardous substances</h2>
        <button onClick={toggleHazardousSubForm} className='w-fit rounded-full bg-[#D1D5DB] text-white hover:bg-gray-500 p-2'>
            {showHazardousSubForm ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            )}
        </button>
      </div>
      <div className='flex pb-10'>
      {showHazardousSubForm && (
        <div className='flex mx-auto min-w-[45%] justify-center p-5 bg-[#F3F4F6] rounded-lg'>
        Text here
      </div>
      )}
      </div>
      <div className='flex mx-auto justify-between w-[50%] mb-5'>
        <h2 className="text-2xl font-bold">Hazard classes</h2>
        <button onClick={toggleHazClassForm} className='w-fit rounded-full bg-[#D1D5DB] text-white hover:bg-gray-500 p-2'>
            {showHazClassForm? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            )}
        </button>
      </div>
      <div className='flex pb-10'>
      {showHazClassForm  && (
        <div className='flex mx-auto min-w-[45%] justify-center p-5 bg-[#F3F4F6] rounded-lg'>
        Text here
      </div>
      )}
      </div>

      <div className='flex mx-auto justify-between w-[50%] mb-5'>
        <h2 className="text-2xl font-bold">Related identifiers of hazardous substances</h2>
        <button onClick={toggleRelatedHazClassForm} className='w-fit rounded-full bg-[#D1D5DB] text-white hover:bg-gray-500 p-2'>
            {showRelatedHazClassForm ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            )}
        </button>
      </div>
      <div className='flex pb-10'>
      {showRelatedHazClassForm && (
        <div className='flex mx-auto min-w-[45%] justify-center p-5 bg-[#F3F4F6] rounded-lg'>
        Text here
      </div>
      )}
      </div>

      <div className='flex mx-auto justify-between w-[50%] mb-5'>
        <h2 className="text-2xl font-bold">Location of hazardous substances</h2>
        <button onClick={toggleLocationForm} className='w-fit rounded-full bg-[#D1D5DB] text-white hover:bg-gray-500 p-2'>
            {showLocationForm ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            )}
        </button>
      </div>
      <div className='flex pb-10'>
      {showLocationForm && (
        <div className='flex mx-auto min-w-[45%] justify-center p-5 bg-[#F3F4F6] rounded-lg'>
        Text here
      </div>
      )}
      </div>
      <div className='flex mx-auto justify-between w-[50%] mb-5'>
        <h2 className="text-2xl font-bold">Concentration range of hazardous substances</h2>
        <button onClick={toggleConcentrationForm} className='w-fit rounded-full bg-[#D1D5DB] text-white hover:bg-gray-500 p-2'>
            {showConcentrationForm ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            )}
        </button>
      </div>
      <div className='flex pb-10'>
      {showConcentrationForm && (
        <div className='flex mx-auto min-w-[45%] justify-center p-5 bg-[#F3F4F6] rounded-lg'>
        Text here
      </div>
      )}
      </div>
      <div className='flex mx-auto justify-between w-[50%] mb-5'>
        <h2 className="text-2xl font-bold">Impact of substances on the environment, human health, safety</h2>
        <button onClick={toggleImpactForm} className='w-fit rounded-full bg-[#D1D5DB] text-white hover:bg-gray-500 p-2'>
            {showImpactForm ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            )}
        </button>
      </div>
      <div className='flex pb-10'>
      {showImpactForm && (
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 7, label: 'Aliminium' },
                { id: 1, value: 14, label: 'Copper' },
                { id: 2, value: 3, label: 'Binder' },
                { id: 3, value: 2, label: 'Carbon black' },
                { id: 4, value: 16, label: 'Graphite' },
                { id: 5, value: 16, label: 'Plastic' },
                { id: 6, value: 31, label: 'LNMCO' },
                { id: 7, value: 12, label: 'Electrolyte' },
              ],
            },
          ]}
          width={1000}
          height={500}
        />
      )}
      </div>
    </div>
  );
}

export default BatteryMaterialAndCompositionForm;
