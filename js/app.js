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
const fundLengthInput = document.getElementById('fundLength');

const housingInput = document.getElementById('rentHousing');
const utilitiesInput = document.getElementById('utilities');
const transportInput = document.getElementById('transportation');


// Setting default fund length to 6 months
let fundLength = 6;

// Setting expenses to 0
let housingValue = 0;
let utilitiesValue = 0;
let transportValue = 0;
housingInput.value = 0;
utilitiesInput.value = 0;
transportInput.value = 0;

function calcFund(fund, a, b, c) {
    let totalFund = 0;
    let monthlyTotal = a + b + c;
    totalFund = monthlyTotal*fund;
    console.log(totalFund);
}

expenseInputs.forEach(input => {
    input.addEventListener('change', () => {
        let newLength = fundLengthInput.value;
        newLength = parseInt(newLength, 10);
        fundLength = newLength;


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

        // return fundLength, housingValue, utilitiesValue, transportValue;
        calcFund(fundLength, housingValue, utilitiesValue, transportValue);
    })
});


