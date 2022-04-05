'use strict';
console.log(visualViewport);

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
    dispMonthTotal.innerHTML = monthlyTotal;
    dispFundTotal.innerHTML = fundTotal;
    dispLength.innerHTML = fundLength;
}

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
            let newInputValue = input.value;
            let newInputNum = parseInt(newInputValue, 10);
            newInputs.push(newInputNum);
            housingInputs.splice(0, housingInputs.length, ...newInputs);
        });
        console.log('--- HOUSING INPUTS ---');
        console.log(housingInputs);
        // Update total monthly amount for section
        let sum = [...housingInputs].reduce((a , b) => a + b, 0);
        housingMonthly.innerHTML = sum;
        housingMonthlyTotal = sum;
        updateDisplay(housingMonthlyTotal, fundLength);

        console.log(`Housing monthly total = ${housingMonthlyTotal}`);
        console.log(`New overall monthly total = ${monthlyTotal}`);
        chartData.splice(0, 1, housingMonthlyTotal);
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
            let newInputValue = input.value;
            let newInputNum = parseInt(newInputValue, 10);
            newInputs.push(newInputNum);
            transportInputs.splice(0, transportInputs.length, ...newInputs);
        });
        console.log('--- TRANSPORT INPUTS ---');
        console.log(transportInputs);
        // Update total monthly amount for section
        let sum = [...transportInputs].reduce((a , b) => a + b, 0);
        transportMonthly.innerHTML = sum;
        transportMonthlyTotal = sum;
        updateDisplay();

        console.log(`Transport monthly total = ${transportMonthlyTotal}`);
        console.log(`New overall monthly total = ${monthlyTotal}`);
        chartData.splice(1, 1, transportMonthlyTotal);
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
            let newInputValue = input.value;
            let newInputNum = parseInt(newInputValue, 10);
            newInputs.push(newInputNum);
            personalInputs.splice(0, personalInputs.length, ...newInputs);
        });
        console.log('--- PERSONAL INPUTS ---');
        console.log(personalInputs);
        // Update total monthly amount for section
        let sum = [...personalInputs].reduce((a , b) => a + b, 0);
        personalMonthly.innerHTML = sum;
        personalMonthlyTotal = sum;
        updateDisplay();

        console.log(`Personal monthly total = ${personalMonthlyTotal}`);
        console.log(`New overall monthly total = ${monthlyTotal}`);
        chartData.splice(2, 1, personalMonthlyTotal);
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
            let newInputValue = input.value;
            let newInputNum = parseInt(newInputValue, 10);
            newInputs.push(newInputNum);
            loanInputs.splice(0, loanInputs.length, ...newInputs);
        });
        console.log('--- LOAN INPUTS ---');
        console.log(loanInputs);
        // Update total monthly amount for section
        let sum = [...loanInputs].reduce((a , b) => a + b, 0);
        loanMonthly.innerHTML = sum;
        loanMonthlyTotal = sum;
        updateDisplay();

        console.log(`Loan monthly total = ${loanMonthlyTotal}`);
        console.log(`New overall monthly total = ${monthlyTotal}`);
        chartData.splice(3, 1, loanMonthlyTotal);
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
                        let value = context.formattedValue;
        
                        if (!label)
                            label = 'Unknown'
        
                        let sum = 0;
                        let dataArr = context.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += Number(data);
                        });
        
                        let percentage = (value * 100 / sum).toFixed(2) + '%';
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
