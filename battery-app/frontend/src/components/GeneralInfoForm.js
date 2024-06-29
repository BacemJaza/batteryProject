import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendar, faFilter, faBolt, faIdCard, faFlask, faBatteryFull, faBalanceScale, faInfoCircle, faClock, faTag, faPassport, faIndustry } from '@fortawesome/free-solid-svg-icons';
import AuthLayout from '../layout/AuthLayout';

function GeneralInfoForm({auth,style}) {
  return (
    <div className="max-w-4xl mx-auto p-4 mt-12">
      <h2 className="text-2xl font-bold mb-4">EV Battery</h2>
      <div >
        {/* authentification style */}
      <p className="mb-4" style={!auth?style:{}}> 
        
        An electric vehicle battery (EVB, also known as a traction battery) is a rechargeable battery used to power the electric motors of a battery electric vehicle (BEV) or hybrid electric vehicle (HEV). Electric vehicle batteries differ from starting, lighting, and ignition (SLI) batteries, as they are typically lithium-ion batteries that are designed for high power-to-weight ratio and energy density. Smaller, lighter batteries are desirable because they reduce the weight of the vehicle and therefore improve its performance. Compared to liquid fuels, most current battery technologies have much lower specific energy, and this often impacts the maximum range of all-electric vehicles. Unlike earlier battery chemistries, notably nickel-cadmium, lithium-ion batteries can be discharged and recharged daily and at any state of charge. Other types of rechargeable batteries used in electric vehicles include lead–acid, nickel-cadmium, nickel–metal hydride, and others.
      </p>
      {/* {!auth&&(
          <AuthLayout/>
        )} */}

      </div>
      
      <div className="flex space-x-4 mb-4">
        <div className="flex-1 bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Greenhouse Gas</h3>
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

        <div className="w-1/4 bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Child Labour</h3>
          <p>Score</p>
          <p className="text-4xl font-bold flex items-center">
            86
            <span className="inline-block w-3 h-3 bg-green-400 rounded-full ml-2"></span>
          </p>
        </div>
        <div className="w-1/4 bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Human Rights</h3>
          <p>Score</p>
          <p className="text-4xl font-bold flex items-center">
            88
            <span className="inline-block w-3 h-3 bg-green-400 rounded-full ml-2"></span>
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Basic Data</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="relative bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Manufacturer Identification</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">GM-LG Chem</p>
            <FontAwesomeIcon
              icon={faIndustry}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>
        <div className="relative bg-gray-100 p-4 rounded shadow">
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
        <div className="relative bg-gray-100 p-4 rounded shadow">
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
        <div className="relative bg-gray-100 p-4 rounded shadow">
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
        <div className="relative bg-gray-100 p-4 rounded shadow">
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
        <div className="relative bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">EU Declaration Of Conformity</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">Compliant</p>
            <FontAwesomeIcon
              icon={faPassport}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Technical Data</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Part #</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">H8-AGM</p>
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>
        <div className="relative bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">SKU #</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">319459</p>
            <FontAwesomeIcon
              icon={faTag}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>
        <div className="relative bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Negative Terminal Location</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">Top Left Front</p>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>
        <div className="relative bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Reserve Capacity</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">160min</p>
            <FontAwesomeIcon
              icon={faClock}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>
        <div className="relative bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Cold Cranking Amps</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">900</p>
            <FontAwesomeIcon
              icon={faBolt}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>
        <div className="relative bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Chemistry</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">Lead-Acid</p>
            <FontAwesomeIcon
              icon={faFlask}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>
        <div className="relative bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Warranty</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">3 Year</p>
            <FontAwesomeIcon
              icon={faIdCard}
              className="text-blue-900 absolute right-0 top-0 mt-1"
              size="lg"
            />
          </div>
        </div>
        <div className="relative bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold">Battery Voltage</h3>
          <div className="relative">
            <p className="text-blue-900 inline-block align-middle">12V</p>
            <FontAwesomeIcon
              icon={faBatteryFull}
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