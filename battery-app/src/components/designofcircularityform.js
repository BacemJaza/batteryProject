import React, { useState } from 'react';

function DesignOfCircularityForm() {
    const [showCircularityForm, setShowCircularityForm] = useState(false);
    const [showBatteryForm, setShowBatteryForm] = useState(false);
    const [showRecycledContentForm, setShowRecycledContentForm] = useState(false);

    const toggleCircularityForm = () => {
        setShowCircularityForm(!showCircularityForm);
    };

    const toggleBatteryForm = () => {
        setShowBatteryForm(!showBatteryForm);
    };

    const toggleRecycledContentForm = () => {
        setShowRecycledContentForm(!showRecycledContentForm);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Design of Circularity</h2>
                <button onClick={toggleCircularityForm} className="flex items-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    {showCircularityForm ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </button>
            </div>
            {showCircularityForm && (
                <div className="bg-gray-100 p-6 rounded-lg mt-4">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <tbody>
                                <tr className="border-t border-gray-200">
                                    <td className="font-semibold text-gray-600 text-left py-2">Postal address of sources for spare parts</td>
                                    <td className="text-gray-800 py-2">123 Battery Street, Cityville, USA</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="font-semibold text-gray-600 text-left py-2">E-mail address of sources for spare parts</td>
                                    <td className="text-gray-800 py-2">spareparts@batteryco.com</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="font-semibold text-gray-600 text-left py-2">Web address of sources for spare parts</td>
                                    <td className="text-gray-800 py-2">www.batteryco.com/spareparts</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="font-semibold text-gray-600 text-left py-2">Part numbers for components</td>
                                    <td className="text-gray-800 py-2">
                                        <div>Component A: BP-1234</div>
                                        <div>Component B: BP-5678</div>
                                        <div>Component C: BP-9012</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <div className="flex items-center justify-between mt-8">
                <h2 className="text-2xl font-bold">Battery Safety Requirements</h2>
                <button onClick={toggleBatteryForm} className="flex items-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
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
                <div className="bg-gray-100 p-6 rounded-lg mt-4">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <tbody>
                                <tr className="border-t border-gray-200">
                                    <td className="font-semibold text-gray-600 text-left py-2">Extinguishing agent</td>
                                    <td className="text-gray-800 py-2">Use CO2 or dry chemical extinguisher</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="font-semibold text-gray-600 text-left py-2">Safety measures/instructions</td>
                                    <td className="text-gray-800 py-2">
                                        <ol>
                                            <li>Avoid exposure to open flames</li>
                                            <li>Store in a cool and dry place</li>
                                        </ol>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <div className="flex items-center justify-between mt-8">
                <h2 className="text-2xl font-bold">Recycled and Renewable Content</h2>
                <button onClick={toggleRecycledContentForm} className="flex items-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    {showRecycledContentForm ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </button>
            </div>
            {showRecycledContentForm && (
                <div className="bg-gray-100 p-6 rounded-lg mt-4">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <tbody>
                                <tr className="border-t border-gray-200">
                                    <td className="font-semibold text-gray-600 text-left py-2">Pre-consumer recycled nickel share</td>
                                    <td className="text-gray-800 py-2">10%</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="font-semibold text-gray-600 text-left py-2">Pre-consumer recycled cobalt share</td>
                                    <td className="text-gray-800 py-2">5%</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="font-semibold text-gray-600 text-left py-2">Pre-consumer recycled lithium share</td>
                                    <td className="text-gray-800 py-2">15%</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="font-semibold text-gray-600 text-left py-2">Pre-consumer recycled lead share</td>
                                    <td className="text-gray-800 py-2">8%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DesignOfCircularityForm;
