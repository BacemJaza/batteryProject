import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faIdCard,
  faLocationDot,
  faCalendar,
  faFilter,
  faBolt,
  faFlask,
  faBatteryFull,
  faBalanceScale,
  faInfoCircle,
  faClock,
  faTag,
  faFileArrowDown,
  faIndustry,
} from '@fortawesome/free-solid-svg-icons';
import AuthLayout from '../layout/AuthLayout';

function GeneralInfoForm({ auth, style }) {
  // Fonction pour gérer le téléchargement de fichier
  const handleFileDownload = () => {
    // Simuler le téléchargement d'un fichier
    const data = 'Données du fichier à télécharger';
    const blob = new Blob([data], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nom-du-fichier.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-12">
      {/* Flex container for EV Battery and Greenhouse Gas */}
      <div className="flex mb-4">
        {/* Left section for EV Battery */}
        <div className="flex-1 pr-4">
          <h2 className="text-2xl font-bold mb-4">EV Battery</h2>
          <p className="mb-4 text-sm" style={!auth ? style : {}}>
            An electric vehicle battery (EVB, also known as a traction battery) is a rechargeable battery used to power the electric motors of a battery electric vehicle (BEV) or hybrid electric vehicle (HEV). Electric vehicle batteries differ from starting, lighting, and ignition (SLI) batteries, as they are typically lithium-ion batteries that are designed for high power-to-weight ratio and energy density.
          </p>
        </div>
        {/* Right section for Greenhouse Gas */}
        <div className="flex-1">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-2xl font-bold mb-4">Greenhouse Gas</h3>
            <div className="flex justify-between text-sm font-normal mt-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#1c2c4c] rounded-full"></div>
                <p>Performance Category</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#1c2c4c] rounded-full"></div>
                <p>CO2 footprint</p>
              </div>
            </div>
            <div className="flex mt-2 items-center">
              <p className="text-2xl font-bold text-[#1c2c4c]">A</p>
              <div className="flex-1 flex items-center space-x-2 ml-2">
                <div className="w-16 h-2 bg-gradient-to-r from-green-400 to-red-400"></div>
                <p className="text-2xl text-[#1c2c4c] ml-auto">200 kg CO₂ e</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Centered grid for remaining form fields */}
      <div className="mx-auto grid grid-cols-2 gap-4">

      <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Battery passport identification</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">USA</p>
            <FontAwesomeIcon
              icon={faIdCard}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Battery identification</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">USA</p>
            <FontAwesomeIcon
              icon={faIdCard}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>


        
        {/* Battery Category */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Battery Category</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">EV</p>
            <FontAwesomeIcon
              icon={faFilter}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>


        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Battery status</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">EV</p>
            <FontAwesomeIcon
              icon={faFilter}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>



        {/* Manufacturer Identification */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Manufacturer Identification</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">GM-LG Chem</p>
            <FontAwesomeIcon
              icon={faIndustry}
              className="text-blue-900 absolute right-0 top-0 mt-1 cursor-pointer"
              size="lg"
              onClick={handleFileDownload} // Appeler la fonction de téléchargement au clic
            />
          </div>
        </div>

        {/* Manufacturing Date */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Manufacturing Date</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">2021-02-14</p>
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>

        {/* Manufacturing Place */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Manufacturing Place</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">USA</p>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>

        


        {/* Battery Weight */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Battery Weight</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">454 kg</p>
            <FontAwesomeIcon
              icon={faBalanceScale}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>

        {/* EU Declaration Of Conformity */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">EU Declaration Of Conformity</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">Compliant</p>
            <FontAwesomeIcon
              icon={faFileArrowDown}
              className="text-blue-900 absolute right-0 top-0 mt-1 cursor-pointer"
              size="lg"
              onClick={handleFileDownload} // Appeler la fonction de téléchargement au clic
            />
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">ID of EU declaration of conformity</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">USA</p>
            <FontAwesomeIcon
              icon={faIdCard}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>


        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Results of tests reports</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">Compliant</p>
            <FontAwesomeIcon
              icon={faFileArrowDown}
              className="text-blue-900 absolute right-0 top-0 mt-1 cursor-pointer"
              size="lg"
              onClick={handleFileDownload} // Appeler la fonction de téléchargement au clic
            />
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Separate collection symbol </h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">Compliant</p>
            <FontAwesomeIcon
              icon={faFileArrowDown}
              className="text-blue-900 absolute right-0 top-0 mt-1 cursor-pointer"
              size="lg"
              onClick={handleFileDownload} // Appeler la fonction de téléchargement au clic
            />
          </div>
        </div>

        {/* Negative Terminal Location */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Cadmium and lead symbols</h3>
           <div className="relative">
            <p className="text-blue-900 inline-block align-middle">Compliant</p>
            <FontAwesomeIcon
              icon={faFileArrowDown}
              className="text-blue-900 absolute right-0 top-0 mt-1 cursor-pointer"
              size="lg"
              onClick={handleFileDownload} // Appeler la fonction de téléchargement au clic
            />
          </div>
        </div>


        {/* Reserve Capacity */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">carbon footprint performance class </h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">160min</p>
            <FontAwesomeIcon
              icon={faClock}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>

        {/* Cold Cranking Amps */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">CO2 footprint</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">900</p>
            <FontAwesomeIcon
              icon={faBolt}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default GeneralInfoForm;
