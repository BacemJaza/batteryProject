import React, { useState } from 'react';

function PerformanceAndDurabilityForm() {
    const [showCapacityEnergySoHVoltageForm, setShowCapacityEnergySoHVoltageForm] = useState(false);
    const [showEnergyForm, setShowEnergyForm] = useState(false);
    const [showResistanceForm, setShowResistanceForm] = useState(false);
    const [showLifetimeForm, setShowLifetimeForm] = useState(false);
    const [showTemperatureForm, setShowTemperatureForm] = useState(false);
    const [showEventForm, setShowEventForm] = useState(false);

    const toggleCapacityEnergySoHVoltageForm = () => {
        setShowCapacityEnergySoHVoltageForm(!showCapacityEnergySoHVoltageForm);
    };

    const toggleEnergyForm = () => {
        setShowEnergyForm(!showEnergyForm);
    };

    const toggleResistanceForm = () => {
        setShowResistanceForm(!showResistanceForm);
    };

    const toggleLifetimeForm = () => {
        setShowLifetimeForm(!showLifetimeForm);
    };

    const toggleTemperatureForm = () => {
        setShowTemperatureForm(!showTemperatureForm);
    };

    const toggleEventForm = () => {
        setShowEventForm(!showEventForm);
    };

    const buttonClass = "bg-gray-300 hover:bg-gray-500 text-white font-bold p-1 rounded-full w-6 h-6 flex items-center justify-center";

    return (
        <div className="max-w-4xl mx-auto mt-12">
            {/* Form for Capacity, energy, SoH & voltage */}
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Capacity, energy, SoH & voltage</h2>
                    <button onClick={toggleCapacityEnergySoHVoltageForm} className={buttonClass}>
                        {showCapacityEnergySoHVoltageForm ? (
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
                {showCapacityEnergySoHVoltageForm && (
                    <div className="bg-gray-100 p-6 rounded-lg mt-2">
                          <div className="overflow-x-auto overflow-y-auto max-h-48"> 
                            <table className="w-full table-fixed">
                                <thead>
                                    <tr className="border-t border-gray-200 bg-gray-200">
                                        <th className="font-semibold text-gray-600 text-left py-2 px-4">SECTION</th>
                                        <th className="font-semibold text-gray-600 text-left py-2 px-4">UBECERTIFIED</th>
                                        <th className="font-semibold text-gray-600 text-left py-2 px-4">UBEMEASURED</th>
                                        <th className="font-semibold text-gray-600 text-left py-2 px-4">SOCE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-gray-200">
                                        <td className="text-gray-800 py-2 px-4">Capacity</td>
                                        <td className="text-gray-800 py-2 px-4">1000 Ah</td>
                                        <td className="text-gray-800 py-2 px-4">950 Ah</td>
                                        <td className="text-gray-800 py-2 px-4">95%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="text-gray-800 py-2 px-4">Energy</td>
                                        <td className="text-gray-800 py-2 px-4">500 kWh</td>
                                        <td className="text-gray-800 py-2 px-4">480 kWh</td>
                                        <td className="text-gray-800 py-2 px-4">96%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="text-gray-800 py-2 px-4">SoH (State of Health)</td>
                                        <td className="text-gray-800 py-2 px-4">97%</td>
                                        <td className="text-gray-800 py-2 px-4">98%</td>
                                        <td className="text-gray-800 py-2 px-4">99%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="text-gray-800 py-2 px-4">Voltage</td>
                                        <td className="text-gray-800 py-2 px-4">400 V</td>
                                        <td className="text-gray-800 py-2 px-4">395 V</td>
                                        <td className="text-gray-800 py-2 px-4">98%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {/* Energy Form */}
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Round trip energy efficiency & self-discharge</h2>
                    <button onClick={toggleEnergyForm} className={buttonClass}>
                        {showEnergyForm ? (
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
                {showEnergyForm && (
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
                                        <td className="font-semibold text-gray-600 text-left py-2">Round trip energy efficiency</td>
                                        <td className="text-gray-800 py-2 align-middle">90% 85% 80% 10%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Self-discharge</td>
                                        <td className="text-gray-800 py-2 align-middle">2% per month 1% per month Improving</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Initial self-discharging rate</td>
                                        <td className="text-gray-800 py-2 align-middle">1% per day</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Current self-discharging rate</td>
                                        <td className="text-gray-800 py-2 align-middle">0.5% per day </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Evolution of self-discharging rates</td>
                                        <td className="text-gray-800 py-2 align-middle">Stable</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Initial round trip energy efficiency</td>
                                        <td className="text-gray-800 py-2 align-middle">95% </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Round trip energy efficiency at 50% of cycle life</td>
                                        <td className="text-gray-800 py-2 align-middle">90%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Remaining round trip energy efficiency</td>
                                        <td className="text-gray-800 py-2 align-middle">85%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Round trip energy efficiency fade</td>
                                        <td className="text-gray-800 py-2 align-middle">5%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {/* Internal Resistance Form */}
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Internal resistance</h2>
                    <button onClick={toggleResistanceForm} className={buttonClass}>
                        {showResistanceForm ? (
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
                {showResistanceForm && (
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
                                        <td className="font-semibold text-gray-600 text-left py-2">Initial internal resistance on battery cell level</td>
                                        <td className="text-gray-800 py-2 align-middle"> 0.05 Ohms </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Current internal resistance on battery cell level</td>
                                        <td className="text-gray-800 py-2 align-middle">0.07 Ohms </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Internal resistance increase on battery cell level
                                        </td>
                                        <td className="text-gray-800 py-2 align-middle">0.02 Ohms </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Initial internal resistance on battery pack level</td>
                                        <td className="text-gray-800 py-2 align-middle"> 0.15 Ohms </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Current internal resistance on battery pack level</td>
                                        <td className="text-gray-800 py-2 align-middle"> 0.18 Ohms </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Initial internal resistance on battery module level</td>
                                        <td className="text-gray-800 py-2 align-middle"> 0.10 Ohms </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Current internal resistance on battery module level</td>
                                        <td className="text-gray-800 py-2 align-middle">0.13 Ohms </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Internal resistance increase on battery module level</td>
                                        <td className="text-gray-800 py-2 align-middle">0.03 Ohms</td>
                                    </tr>
                                    

                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {/* Lifetime Form */}
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Battery lifetime</h2>
                    <button onClick={toggleLifetimeForm} className={buttonClass}>
                        {showLifetimeForm ? (
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
                {showLifetimeForm && (
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
                                        <td className="font-semibold text-gray-600 text-left py-2">Expected lifetime: Number of charge-discharge cycles</td>
                                        <td className="text-gray-800 py-2 align-middle">5000 cycles</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Number of (full) charge-discharge cycles</td>
                                        <td className="text-gray-800 py-2 align-middle">3000 cycles</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Cycle-life reference test</td>
                                        <td className="text-gray-800 py-2 align-middle">IEC 62660-2:2016</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">C-rate of relevant cycle-life test</td>
                                        <td className="text-gray-800 py-2 align-middle">0.5C</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Energy throughput</td>
                                        <td className="text-gray-800 py-2 align-middle">250 MWh</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Capacity throughput</td>
                                        <td className="text-gray-800 py-2 align-middle">5000 Ah</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Capacity threshold for exhaustion</td>
                                        <td className="text-gray-800 py-2 align-middle">80%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">SOCE threshold for exhaustion</td>
                                        <td className="text-gray-800 py-2 align-middle">20%</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Warranty period of the battery</td>
                                        <td className="text-gray-800 py-2 align-middle">5 years</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Date of putting the battery into service</td>
                                        <td className="text-gray-800 py-2 align-middle">2022-01-01</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {/* Temperature Form */}
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Temperature conditions</h2>
                    <button onClick={toggleTemperatureForm} className={buttonClass}>
                        {showTemperatureForm ? (
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
                {showTemperatureForm && (
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
                                        <td className="font-semibold text-gray-600 text-left py-2">Temperature range idle state (lower boundary)</td>
                                        <td className="text-gray-800 py-2 align-middle"> -10°C</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Temperature range idle state (upper boundary)</td>
                                        <td className="text-gray-800 py-2 align-middle">45°C</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2"> Time spent in extreme temperatures above boundary</td>
                                        <td className="text-gray-800 py-2 align-middle"> 2 hours</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Time spent in extreme temperatures below boundary</td>
                                        <td className="text-gray-800 py-2 align-middle">1.5 hours </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Time spent charging during extreme temperatures above boundary</td>
                                        <td className="text-gray-800 py-2 align-middle">30 minutes</td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Time spent charging during extreme temperatures below boundary</td>
                                        <td className="text-gray-800 py-2 align-middle">45 minutes
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {/* Event Form */}
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Negative event</h2>
                    <button onClick={toggleEventForm} className={buttonClass}>
                        {showEventForm ? (
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
                {showEventForm && (
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
                                        <td className="font-semibold text-gray-600 text-left py-2">Information on accidents</td>
                                        <td className="text-gray-800 py-2 align-middle"> None </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Number of deep discharge events</td>
                                        <td className="text-gray-800 py-2 align-middle"> 2 </td>
                                    </tr>
                                    <tr className="border-t border-gray-200">
                                        <td className="font-semibold text-gray-600 text-left py-2">Number of overcharge events</td>
                                        <td className="text-gray-800 py-2 align-middle"> 1 </td>
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

export default PerformanceAndDurabilityForm;