import React, { useState } from 'react';

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
        <h2 className="text-2xl font-bold">Battery raw Material with category uses</h2>
        <button onClick={toggleSupplyChainForm} className='w-fit rounded-full bg-[#D1D5DB]'>
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
          <table className="table bg-[#F3F4F6] text-lg">
            {/* head */}
            <thead>
              <tr className='text-lg'>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
      </div>
      )}
      </div>
    </div>
  );
}

export default SupplyChainInformationForm;
