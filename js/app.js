'use strict';

/* 
EMERGENCY FUND CALCULATOR

What do we need to do?
1. Set the months the emergency fund is lasting
2. Set all input values to be 0
3. Every time an input changes, update that value
    - turn string to number
4. Run function to calculate everything again

*/

const calcButton = document.getElementById('calculate');
const inputs = document.getElementsByClassName('expenses');
const expenseInputs = [...inputs];

const housingInput = document.getElementById('rentHousing');
const utilitiesInput = document.getElementById('utilities');
const transportInput = document.getElementById('transportation');

let housingValue = 0;
let utilitiesValue = 0;
let transportValue = 0;

expenseInputs.forEach(input => {
    input.addEventListener('change', () => {
        let newHousing = housingInput.value;
        newHousing = parseInt(newHousing, 10);
        housingValue = newHousing;

        let newUtilities = utilitiesInput.value;
        newUtilities = parseInt(newUtilities, 10);
        utilitiesValue = newUtilities;

        let newTransport = transportInput.value;
        newTransport = parseInt(newTransport, 10);
        transportValue = newTransport;

        console.log(`Housing value = ${housingValue}`);
        console.log(`Utilities value = ${utilitiesValue}`);
        console.log(`Transport value = ${transportValue}`);
    })
});
// expenseInputs.addEventListener('change', function() {
//     let newValue = housingInput.value;
//     newValue = parseInt(newValue, 10);
//     console.log(typeof newValue);
// })


