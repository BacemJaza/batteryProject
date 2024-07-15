import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


function DesignOfCircularityForm() {
    const [showCircularityForm, setShowCircularityForm] = useState(false);
    const [showBatteryForm, setShowBatteryForm] = useState(false);
    const [showRecycledContentForm, setShowRecycledContentForm] = useState(false);
    const [showEndofLifeinformationForm, setShowEndofLifeinformationForm] = useState(false);

    const toggleCircularityForm = () => {
        setShowCircularityForm(!showCircularityForm);
    };

    const toggleBatteryForm = () => {
        setShowBatteryForm(!showBatteryForm);
    };

    const toggleRecycledContentForm = () => {
        setShowRecycledContentForm(!showRecycledContentForm);
    };

    const toggleEndofLifeinformationForm = () => {
        setShowEndofLifeinformationForm(!showEndofLifeinformationForm);
    };

    const buttonClass = "bg-gray-300 hover:bg-gray-500 text-white font-bold p-1 rounded-full w-6 h-6 flex items-center justify-center";

    return (
        <div className="max-w-4xl mx-auto mt-12">
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Design of Circularity</h2>
                    <button onClick={toggleCircularityForm} className={buttonClass}>
                        {showCircularityForm ? (
                      
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
                {showCircularityForm && (
                    <div className="bg-gray-100 p-6 rounded-lg mt-2">
                    <div className="overflow-x-auto">
                        <table className="w-full table-fixed">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="font-semibold text-gray-600 text-left py-2">Information</th>
                                    <th className="font-semibold text-gray-600 text-left py-2">Description</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Postal address of sources for spare parts</td>
                                        <td className="text-gray-800 py-2 align-middle">123 Battery Street, Cityville, USA</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">E-mail address of sources for spare parts</td>
                                        <td className="text-gray-800 py-2 align-middle">spareparts@batteryco.com</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Web address of sources for spare parts</td>
                                        <td className="text-gray-800 py-2 align-middle">www.batteryco.com/spareparts</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Part numbers for components</td>
                                        <td className="text-gray-800 py-2 align-middle">Component A: BP-1234 Component B: BP-5678 Component C: BP-9012</td>
                                            

                                    </tr>
                                    <tr className="border-t border-gray-200">
    <td className="font-semibold text-gray-600 text-left py-2">Manual for removal of the battery from the appliance</td>
    <td className="text-gray-800 py-2 align-middle">
        <a href="/" className="text-blue-900">
            Download file <FontAwesomeIcon icon={faDownload} />
        </a>
    </td>
</tr>
<tr className="border-t border-gray-200">
    <td className="font-semibold text-gray-600 text-left py-2">Manual for disassembly and dismantling of the battery pack</td>
    <td className="text-gray-800 py-2 align-middle">
        <a href="/" className="text-blue-900">
            Download file <FontAwesomeIcon icon={faDownload} />
        </a>
    </td>
</tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Battery Safety Requirements</h2>
                    <button onClick={toggleBatteryForm} className={buttonClass}>
                        {showBatteryForm ? (
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
                {showBatteryForm && (
                    <div className="bg-gray-100 p-6 rounded-lg mt-2">
                    <div className="overflow-x-auto">
                        <table className="w-full table-fixed">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="font-semibold text-gray-600 text-left py-2">Information</th>
                                    <th className="font-semibold text-gray-600 text-left py-2">Description</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Extinguishing agent</td>
                                        <td className="text-gray-800 py-2 align-middle">Use CO2 or dry chemical extinguisher</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
    <td className="font-semibold text-gray-600 text-left py-2">Safety measures/instructions</td>
    <td className="text-gray-800 py-2 align-middle">
        <a href="/" className="text-blue-900">
            Download file <FontAwesomeIcon icon={faDownload} />
        </a>
    </td>
</tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Recycled and Renewable Content</h2>
                    <button onClick={toggleRecycledContentForm} className={buttonClass}>
                        {showRecycledContentForm ? (
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
                {showRecycledContentForm && (
                    <div className="bg-gray-100 p-6 rounded-lg mt-2">
                    <div className="overflow-x-auto">
                        <table className="w-full table-fixed">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="font-semibold text-gray-600 text-left py-2">Information</th>
                                    <th className="font-semibold text-gray-600 text-left py-2">Description</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Pre-consumer recycled nickel share</td>
                                        <td className="text-gray-800 py-2 align-middle">10%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Pre-consumer recycled cobalt share</td>
                                        <td className="text-gray-800 py-2 align-middle">5%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Pre-consumer recycled lithium share</td>
                                        <td className="text-gray-800 py-2 align-middle">15%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Pre-consumer recycled lead share</td>
                                        <td className="text-gray-800 py-2 align-middle">8%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Post-consumer recycled nickel share</td>
                                        <td className="text-gray-800 py-2 align-middle">12%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Post-consumer recycled cobalt share</td>
                                        <td className="text-gray-800 py-2 align-middle">7%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Post-consumer recycled lithium share</td>
                                        <td className="text-gray-800 py-2 align-middle">18%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Post-consumer recycled lead share</td>
                                        <td className="text-gray-800 py-2 align-middle">10%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                    <td className="font-semibold text-gray-600 text-left py-2">Renewable content share</td>
                                    <td className="text-gray-800 py-2 align-middle">20%</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">End-of-Life information</h2>
                    <button onClick={toggleEndofLifeinformationForm} className={buttonClass}>
                        {showEndofLifeinformationForm ? (
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
                {showEndofLifeinformationForm && (
                    <div className="bg-gray-100 p-6 rounded-lg mt-2">
                    <div className="overflow-x-auto">
                        <table className="w-full table-fixed">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="font-semibold text-gray-600 text-left py-2">Information</th>
                                    <th className="font-semibold text-gray-600 text-left py-2">Description</th>
                                </tr>
                            </thead>
                                <tbody>
                                <tr className="border-t border-gray-200">
    <td className="font-semibold text-gray-600 text-left py-2">Role of end-users in contributing to waste prevention</td>
    <td className="text-gray-800 py-2 align-middle">
        <a href="/" className="text-blue-900">
            Download file <FontAwesomeIcon icon={faDownload} />
        </a>
    </td>
</tr>
<tr className="border-t border-gray-200">
    <td className="font-semibold text-gray-600 text-left py-2">Role of end- users in contributing to the separate collection of waste batteries</td>
    <td className="text-gray-800 py-2 align-middle">
        <a href="/" className="text-blue-900">
            Download file <FontAwesomeIcon icon={faDownload} />
        </a>
    </td>
</tr>
<tr className="border-t border-gray-200">
    <td className="font-semibold text-gray-600 text-left py-2">Information on separate collection, take back, collection points and preparing for re-use, preparing for repurposing and recycling operations</td>
    <td className="text-gray-800 py-2 align-middle">
        <a href="/" className="text-blue-900">
            Download file <FontAwesomeIcon icon={faDownload} />
        </a>
    </td>
</tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DesignOfCircularityForm;