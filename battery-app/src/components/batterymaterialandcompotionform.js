import React, { useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

function BatteryMaterialAndCompositionForm() {
  const [showBatteryCompoForm, setShowBatteryCompoForm] = useState(true);
  const [showBatteryRawForm, setShowBatteryRawForm] = useState(true);

  const toggleBatteryCompoForm = () => {
    setShowBatteryCompoForm(!showBatteryCompoForm);
};
const toggleBatteryRawForm = () => {
  setShowBatteryRawForm(!showBatteryRawForm);
};
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
        <h2 className="text-2xl font-bold">Battery Composition and Capacity Information</h2>
        <button onClick={toggleBatteryCompoForm} className='w-fit rounded-full bg-[#D1D5DB]'>
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
        <h2 className="text-2xl font-bold">Battery raw Material with category uses</h2>
        <button onClick={toggleBatteryRawForm} className='w-fit rounded-full bg-[#D1D5DB]'>
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

export default BatteryMaterialAndCompositionForm;
