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
const dispMonthTotal = document.getElementById('monthlyExpenses');
const dispFundTotal = document.getElementById('fundTotal');
const dispLength = document.getElementById('monthsLasting');

const calcButton = document.getElementById('calculate');
const inputs = document.getElementsByClassName('expenses');
const expenseInputs = [...inputs];

const fundLengthInput = document.getElementById('fundLength');
const housingInput = document.getElementById('rentHousing');
const utilitiesInput = document.getElementById('utilities');
const transportInput = document.getElementById('transportation');


// Setting default fundlength and expenses
let fundLength = 6;
let housingValue = 0;
let utilitiesValue = 0;
let transportValue = 0;

// Setting default input values
fundLengthInput.value = 6;
housingInput.value = 0;
utilitiesInput.value = 0;
transportInput.value = 0;


// Setting default display values
dispMonthTotal.innerHTML = 0;
dispFundTotal.innerHTML = 0;
dispLength.innerHTML = 6;

function calcFund(fund, a, b, c) {
    let totalFund = 0;
    let monthlyTotal = a + b + c;
    return monthlyTotal*fund;
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

        let monthlyTotal = housingValue + utilitiesValue + transportValue;
        let totalFund = calcFund(fundLength, housingValue, utilitiesValue, transportValue);

        dispMonthTotal.innerHTML = monthlyTotal;
        dispFundTotal.innerHTML = totalFund;
        dispLength.innerHTML = fundLength;
    })
});


