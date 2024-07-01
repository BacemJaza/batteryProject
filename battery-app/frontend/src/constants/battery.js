import React from 'react'

const battery = {
    generalInformation:{
            batteryPassportId:"",
            batteryId:"",
            ManifacturerId:"",
            manufacturingDate:"",
            manifacturingPlace:"",
            batteryCategory:"",
            batteryWeight:"",
            batteryStatus:"",
            euDeclaration:"",
            resultsOfTestReports:"",
            carbonFootprintPerformanceClass:"",
            co2Footprint:""

    },
    batteryMaterialsCompositions:{
        materials:{
            cRawMaterials:"",
            batteryChemistry:"",
            nameCAE:"",  //persons with a legitimate interest and the Commission 
            rIdCAE:"",  //persons with a legitimate interest and the Commission - ID
            compoCAE:"" //persons with a legitimate interest and the Commission - decimal number
        },
        subtances:{
            name:"",
            classesOrCategories:"", //string or integer
            rId:"", //ID
            location:"",
            concentrationRange:"", //decimal number
            impact:""
        }
    },
    supplyChain:{
        dueDelegenceReport:"",
        thirdPartySCAssurances: "", // representation to document (and string)
        euTaxonomyDisclosureStatement:"", //representation to document
        sustainabilityReport:"", //representation to document
    },
    performanceAndDurability:{
        batteryLifetime:{
            expectedLifetime:"",
            cycleLifeRefTest:"",
            cRateOfReleventCycleLifeTest:"",
            capacityThresholdForExhaustion:"",
            soceThresholdForExhaustion:"",
            warrantyPeriodOfBattery:"",
            dateOfService:"" //persons with a legitimate interest
        },
        capacityAndPower:{
            ratedCapacity:"",
            nominalVoltage:"",
            minimumVoltage:"",
            maximumVoltage:"",
            originalPowerCapability:"",
            maximumPermittedBatteryPower:""
        },
        tempretureConditions:{
            lowerBoundary:"",
            upperBoundary:""
        },
        internalResistance:{
            cellLevel:"",
            packLevel:""
        },
        roundTripEnergyEfficiencyAndSelfDischarge:{ // only lmt and Stationary >2kWh
            initialSelfDischargingRate:"", //Decimal - persons with a legitimate interest
            initialRTEfficiency:"", //Integer - Dynamic - persons with a legitimate interest
            rtEnergyEfficiency:""
        },
        negativeEvents:{
            informationOnAccidents:"", //persons with a legitimate interest
            numberOfDeepDischargeEvents:"" //persons with a legitimate interest
        }


        // capEnergySOHVoltage:{
        //     ubeCertified:"", //kWh (Only EVbattery)
        //     ubeMesured:"", //Wh - persons with a legitimate interest - Dynamic - Individual battery (Only EVbattery)
        //     soce:"", //integer (%) - persons with a legitimate interest - Dynamic (Only EVbattery)
        //     ratedCapacuty:"", //Integer 
        //     remainingCapacity:"", //Integer - dynamic - persons with a legitimate interest
        //     capacityFade:"", //Integer - dynamic - persons with a legitimate interest
        //     soc:"",  //Integer - dynamic - persons with a legitimate interest
        //     nominalVoltage:"",
        // },
        
        
    },
    designOfCircularity:{
        design:{
            postalAdress:"", //persons with a legitimate interest and the Commission
            emailAdress:"", //persons with a legitimate interest and the Commission
            webAdress:"",
            partNumbersForComponents:"",
            manualForRemoval:"",
            manualForDisassembly:""
            
        },
        batterySafetyRequirements:{
            estinguishingAgent:"",
            safetyMesures:"" //document - persons with a legitimate interest and the Commission
        },
        recycledAndRenewableContent:{
            preNickelShare:"",
            preCobaltShare:"",
            preLithiumShare:"",
            preLeadShare:"",
            postNickelShare:"",
            postCobaltShare:"",
            postLithiumShare:"",
            postLeadShare:"",
            renewableContentShare:""

        },
        endOfLifeInformation:{
            roleToWastePrevention:"",
            roleToTheSeperateCollection:""
        }
    }


}

export default battery
