var queueCasesCount = 0;
var completedCasesCount = 0;
var casesPerRefresh = 1;
var casesPerComplete = 1;

const refreshButton = document.querySelector('#queueSpan');
const completeCaseButton = document.querySelector('#casesCompletedSpan');


function updateResources() {
    refreshButton.textContent = queueCasesCount;
    completeCaseButton.textContent = completedCasesCount;
}

function refreshQueue(amount) {
    queueCasesCount
}