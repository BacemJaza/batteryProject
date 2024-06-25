import React, { useState } from 'react';
import AuthLayout from '../layout/AuthLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

function SupplyChainInformationForm() {
  // Définir les états pour les champs du formulaire
  // const [supplyChain, setSupplyChain] = useState('');
  // const [information, setInformation] = useState('');

  // // Gérer la soumission du formulaire
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Envoyer les données du formulaire
  //   console.log('Supply Chain:', supplyChain);
  //   console.log('Information:', information);
  //   // Réinitialiser les champs du formulaire après soumission
  //   setSupplyChain('');
  //   setInformation('');
  // };
  const [showSupplyChainForm, setshowSupplyChainForm] = useState(true);
  const toggleSupplyChainForm = () => {
    setshowSupplyChainForm(!showSupplyChainForm);
};

  return (
    <div className='flex-col justify-center p-10'>
      <div className='flex mx-auto justify-between w-[50%]'>
        <h2 className="text-2xl font-bold">Supply Chain Information</h2>
        <button onClick={toggleSupplyChainForm} className='w-fit rounded-full bg-[#D1D5DB] text-white hover:bg-gray-500 p-2'>
            {showSupplyChainForm ? (
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
      {showSupplyChainForm && (
        <div className="overflow-x-auto">
          <div className="grid text-lg grid-cols-2 m-4">
            <div className='flex justify-between pt-5 pb-5 pr-2 pl-2 mx-auto mr-2 mb-2 bg-[#F3F4F6] w-[350px]'>
            <h3 className='text-sm font-bold'>Information of the due diligence report</h3>
            <a href='/' className="text-blue-900"><FontAwesomeIcon icon={faFile} size="lg"/></a>
            </div>
            <div className='flex justify-between pt-5 pb-5 pr-2 pl-2 mx-auto ml-2 mb-2 bg-[#F3F4F6] w-[350px]'>
            <h3 className='text-sm font-bold'>Third party supply chain assurances</h3>
            <a href='/' className="text-blue-900"><FontAwesomeIcon icon={faFile} size="lg"/></a>
              
            </div>
            <div className='flex justify-between pt-5 pb-5 pr-2 pl-2 mx-auto mr-2 bg-[#F3F4F6] w-[350px]'>
            <h3 className='text-sm font-bold'>EU Taxonomy disclosure statement</h3>
            <a href='/' className="text-blue-900"><FontAwesomeIcon icon={faFile}  size="lg"/></a>
            </div>
            <div className='flex justify-between pt-5 pb-5 pr-2 pl-2 mx-auto ml-2 bg-[#F3F4F6] w-[350px]'>
            <h3 className='text-sm font-bold'>Sustainability report</h3>
            <a href='/' className="text-blue-900"><FontAwesomeIcon icon={faFile} size="lg"/></a>
            </div>
            
          </div>
          
      </div>
      )}
      </div>
    </div>
    
  );
  
}

export default SupplyChainInformationForm;
