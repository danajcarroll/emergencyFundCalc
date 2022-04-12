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

/* ********** VARIABLES ********** */
// Modal Elements
const modalButton = document.getElementById('modal-button');
const modal = document.getElementById('instructions-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('modal-close');

// Category Buttons
const tabNodeList = document.getElementsByClassName('categoryTab');
const allTabButtons = [...tabNodeList];

// Input Sections
const inputSectionNodeList = document.getElementsByClassName('inputSection');
const allInputSections = [...inputSectionNodeList];

// All Inputs
const fundLengthInput = document.getElementById('fundLength');
const allExpenseInputs = document.getElementsByClassName('expenses');
const expenseInputs = [...allExpenseInputs];

    // Housing Inputs
const housingInputBox = document.getElementById('housingInputBox');
const allHousingInputs = housingInputBox.getElementsByTagName('input');
const housingInputList = [...allHousingInputs];
    // Transportation Inputs
const transportInputBox = document.getElementById('transportInputBox');
const allTransportInputs = transportInputBox.getElementsByTagName('input');
const transportInputList = [...allTransportInputs];
    // Food and Health Inputs
const personalInputBox = document.getElementById('personalInputBox');
const allPersonalInputs = personalInputBox.getElementsByTagName('input');
const personalInputList = [...allPersonalInputs];
// Loan Inputs
const loanInputBox = document.getElementById('loanInputBox');
const allLoanInputs = loanInputBox.getElementsByTagName('input');
const loanInputList = [...allLoanInputs];

// Monthly Totals
const allSectionsMonthly = document.getElementsByClassName('sectionMonthly');
const sectionsMonthly = [...allSectionsMonthly];
const housingMonthly = document.getElementById('housingMonthly');
const transportMonthly = document.getElementById('transportMonthly');
const personalMonthly = document.getElementById('personalMonthly');
const loanMonthly = document.getElementById('loanMonthly');

// Display Final Fund totals
const dispMonthTotal = document.getElementById('monthlyExpenses');
const dispFundTotal = document.getElementById('fundTotal');
const dispLength = document.getElementById('monthsLasting');

// ********** SETTING DEFAULT VALUES **********
// Set default fundlength and expenses
fundLengthInput.value = 6;
let fundLength = 6;
let fundTotal = 0;

// Set section monthly totals
let housingMonthlyTotal = 0;
let transportMonthlyTotal = 0;
let personalMonthlyTotal = 0;
let loanMonthlyTotal = 0;
let monthlyTotal = 0;
let chartData = [housingMonthlyTotal, transportMonthlyTotal, personalMonthlyTotal, loanMonthlyTotal];

// Set all input values to 0
sectionsMonthly.forEach(section => {
    section.innerHTML = 0;
});
expenseInputs.forEach(input => {
    input.value = 0;
});

// Set default display values
dispMonthTotal.innerHTML = 0;
dispFundTotal.innerHTML = 0;
dispLength.innerHTML = 6;

// Set arrays for each section
let housingInputs = [];
let transportInputs = [];
let personalInputs = [];
let loanInputs = [];


function updateDisplay() {
    monthlyTotal = 
        housingMonthlyTotal + transportMonthlyTotal + personalMonthlyTotal + loanMonthlyTotal;
    fundTotal = monthlyTotal*fundLength;
    dispMonthTotal.innerHTML =  addComma(monthlyTotal);
    dispFundTotal.innerHTML = addComma(fundTotal);
    dispLength.innerHTML = addComma(fundLength);
}

/* 
1. DONE Take the number - the parameter going into the function
2. DONE Take the number, break each character into a string, put into array
3. if there are 1, 2 or 3 strings in the array, join characters back togther, return the number
4. if there are 4 strings, put comma after 1st string in array, join back together, return number
5. i fthere are 5 strings, comma after 2nd string, join together, return number
6. if there are 6 strings, comma after 3rd string, join together, return number
7. if there are 7 strings, comma after 1ST and 4TH (can this be done at the same time?), join together, return number

*/
function addComma(number) {
    let string = number.toString();
    let splitString =  string.split('');
    if (splitString.length <= 3) {
        let newString = splitString.join('');
        return splitString.join('');

    } if (splitString.length == 4) {
        splitString.splice(1, 0, ',');
        return splitString.join('');

    } if (splitString.length == 5) {
        splitString.splice(2, 0, ',');
        return splitString.join('');

    } if (splitString.length == 6) {
        splitString.splice(3, 0, ',');
        return splitString.join('');

    } if (splitString.length == 7) {
        splitString.splice(1, 0, ',') && splitString.splice(5, 0, ',');
        return splitString.join('');
    }
}

// ********** OPEN / CLOSE MODAL **********
modalButton.addEventListener('click', () => {
    modal.classList.remove('shrinkOff');
    modalContent.classList.remove('offScreen');
    modal.style.display = 'block';
})
closeModal.addEventListener('click', () => {
    modalContent.classList.add('offScreen');
    modal.classList.add('shrinkOff');
    // modal.style.display = 'none';
})
window.addEventListener('click', (event) => {
    if (event.target == modal && modal.style.display == 'block') {
        modalContent.classList.add('offScreen');
        modal.classList.add('shrinkOff');
        // modal.style.display = 'none';
    }
})


// ********** INPUT CHANGE EVENTS **********
// When fund length changes
fundLengthInput.addEventListener('change', () => {
    let newLength = fundLengthInput.value;
    newLength = parseInt(newLength, 10);
    fundLength = newLength;

    updateDisplay()
})

// Housing Section Inputs
housingInputList.forEach(input => {
    // Starting input array values for section all at 0
    let inputString = input.value;
    let inputNum = parseInt(inputString, 10);
    housingInputs.push(inputNum);

    input.addEventListener('change', () => {
        let newInputs = [];
        // Update all input values and push to sections input array
        housingInputList.forEach(input => {
            let newInputValue = input.value ? input.value : 0;
            let newInputNum = parseInt(newInputValue, 10);
            newInputs.push(newInputNum);
            housingInputs.splice(0, housingInputs.length, ...newInputs);
        });
        console.log('--- HOUSING INPUTS ---');
        console.log(housingInputs);
        // Update total monthly amount for section
        let sum = [...housingInputs].reduce((a , b) => a + b, 0);
        housingMonthly.innerHTML = addComma(sum);
        housingMonthlyTotal = sum;
        updateDisplay(housingMonthlyTotal, fundLength);

        console.log(`Housing monthly total = ${housingMonthlyTotal}`);
        console.log(`New overall monthly total = ${monthlyTotal}`);
        chartData.splice(0, 1, housingMonthlyTotal);
        console.log(chartData);
        myChart.update();
    })
});
// Transport Section Inputs
transportInputList.forEach(input => {
    // Starting input array values for section all at 0
    let inputString = input.value;
    let inputNum = parseInt(inputString, 10);
    transportInputs.push(inputNum);

    input.addEventListener('change', () => {
        let newInputs = [];
        // Update all input values and push to sections input array
        transportInputList.forEach(input => {
            let newInputValue = input.value ? input.value : 0;
            let newInputNum = parseInt(newInputValue, 10);
            newInputs.push(newInputNum);
            transportInputs.splice(0, transportInputs.length, ...newInputs);
        });
        console.log('--- TRANSPORT INPUTS ---');
        console.log(transportInputs);
        // Update total monthly amount for section
        let sum = [...transportInputs].reduce((a , b) => a + b, 0);
        transportMonthly.innerHTML = addComma(sum);
        transportMonthlyTotal = sum;
        updateDisplay();

        console.log(`Transport monthly total = ${transportMonthlyTotal}`);
        console.log(`New overall monthly total = ${monthlyTotal}`);
        chartData.splice(1, 1, transportMonthlyTotal);
        console.log(chartData);
        myChart.update();
    })
});
// Personal Section Inputs
personalInputList.forEach(input => {
    // Starting input array values for section all at 0
    let inputString = input.value;
    let inputNum = parseInt(inputString, 10);
    personalInputs.push(inputNum);

    input.addEventListener('change', () => {
        let newInputs = [];
        // Update all input values and push to sections input array
        personalInputList.forEach(input => {
            let newInputValue = input.value ? input.value : 0;
            let newInputNum = parseInt(newInputValue, 10);
            newInputs.push(newInputNum);
            personalInputs.splice(0, personalInputs.length, ...newInputs);
        });
        console.log('--- PERSONAL INPUTS ---');
        console.log(personalInputs);
        // Update total monthly amount for section
        let sum = [...personalInputs].reduce((a , b) => a + b, 0);
        personalMonthly.innerHTML = addComma(sum);
        personalMonthlyTotal = sum;
        updateDisplay();

        console.log(`Personal monthly total = ${personalMonthlyTotal}`);
        console.log(`New overall monthly total = ${monthlyTotal}`);
        chartData.splice(2, 1, personalMonthlyTotal);
        console.log(chartData);
        myChart.update();
    })
});
// Loan Section Inputs
loanInputList.forEach(input => {
    // Starting input array values for section all at 0
    let inputString = input.value;
    let inputNum = parseInt(inputString, 10);
    loanInputs.push(inputNum);

    input.addEventListener('change', () => {
        let newInputs = [];
        // Update all input values and push to sections input array
        loanInputList.forEach(input => {
            let newInputValue = input.value ? input.value : 0;
            let newInputNum = parseInt(newInputValue, 10);
            newInputs.push(newInputNum);
            loanInputs.splice(0, loanInputs.length, ...newInputs);
        });
        console.log('--- LOAN INPUTS ---');
        console.log(loanInputs);
        // Update total monthly amount for section
        let sum = [...loanInputs].reduce((a , b) => a + b, 0);
        loanMonthly.innerHTML = addComma(sum);
        loanMonthlyTotal = sum;
        updateDisplay();

        console.log(`Loan monthly total = ${loanMonthlyTotal}`);
        console.log(`New overall monthly total = ${monthlyTotal}`);
        chartData.splice(3, 1, loanMonthlyTotal);
        console.log(chartData);
        myChart.update();
    })
});

// ***** Trying to make dynamic function to update monthly total
// function updateMonthly(monthlyElement, monthlyTotal, sum) {
//     monthlyElement.innerHTML = sum;
//     monthlyTotal = sum;
//     console.log(monthlyElement);
//     console.log(monthlyTotal);
//     console.log(sum);
// }


// ***** Category Tabs *****
function changeActive(button) {
    allTabButtons.forEach(button => {
        button.classList.remove('activeTab');
    })
    button.classList.add('activeTab');
}
function changeActiveInputs(id) {
    allInputSections.forEach(section => {
        section.classList.remove('activeSection');

        if (section.id == `${id}InputBox`) {
            section.classList.add('activeSection');
        }
    })
}
allTabButtons.forEach(button => {
    button.addEventListener('click', () => {
        changeActive(button);
        changeActiveInputs(button.id)
    })
});



// ***** Pie Chart *****

function addData(array) {
    chartData.array.datasets.forEach((datasest) => {
        dataset.data.push(array);
    });
    chartData.updata();
}


const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Housing Monthly', 'Transportation Monthly', 'Food & Health Monthly', 'Loans & Other Monthly'],
        datasets: [{
            data: chartData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1,
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label;
                        let value = context.parsed;
                        // let value = context.formattedValue;
        
                        if (!label)
                            label = 'Unknown'
        
                        let sum = 0;
                        let dataArr = context.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += Number(data);
                        });
        
                        let percentage = ((value / sum) * 100).toFixed(2) + '%';
                        return label + ": " + percentage;
                    }
                }
            }
        }]
    }, options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                // display: false
            }
        }
    }
});

console.log(
    ((2500 / 3000) * 100).toFixed(2)
);
