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

const expenseInputs = document.getElementsByClassName('expenses');
const calcButton = document.getElementById('calculate');

let housingValue = 0;
let utilitiesValue = 0;
let transportValue = 0;


// expenseInputs.addEventListener('change', function() {
//     let newValue = housingInput.value;
//     newValue = parseInt(newValue, 10);
//     console.log(typeof newValue);
// })


