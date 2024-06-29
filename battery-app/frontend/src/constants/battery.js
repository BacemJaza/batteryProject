import React from 'react'

const battery = {
    generalInformation:{
        identification:{
            batteryPassportId:"",
            batteryId:"",
            respEconomicOperatorId:"",
            ManifacturerId:"",
            manufacturingDate:"",
            manifacturingPlace:""

        },
        generalCharestatics:{
            batteryCategory:"",
            batteryWeight:"",
            batteryStatus:""
        },

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
        dueDelegenceReport:{
            information: "" // representation to document
        }, 
        additionalVoluntary:{
            scAssurances: "", // representation to document (and string)
            euTaxonomyDisclosureStatement:"", //representation to document
            sustainabilityReport:"", //representation to document
        }
    },
    performanceAndDurability:{
        capEnergySOHVoltage:{
            ubeCertified:"", //kWh (Only EVbattery)
            ubeMesured:"", //Wh - persons with a legitimate interest - Dynamic - Individual battery (Only EVbattery)
            soce:"", //integer (%) - persons with a legitimate interest - Dynamic (Only EVbattery)
            ratedCapacuty:"", //Integer 
            remainingCapacity:"", //Integer - dynamic - persons with a legitimate interest
            capacityFade:"", //Integer - dynamic - persons with a legitimate interest
            soc:"",  //Integer - dynamic - persons with a legitimate interest
            nominalVoltage:"",
        },
        roundTripEnergyEfficiencyAndSelfDischarge:{ // only lmt and Stationary >2kWh
            iSelfDischargingRate:"", //Decimal - persons with a legitimate interest
            currentSelfDischargingRate:"", //Decimal - Dynamic - persons with a legitimate interest
            evolution:"", //Integer - Dynamic - persons with a legitimate interest
        }
        
    }


}

export default battery
