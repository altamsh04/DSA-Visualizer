// Array list default inputs
let inputNumbers = [10, 5, 23, 54, 89, 100];
let linearSearchContainer = document.querySelector('.linear-search-container');
let alertTextMessage = document.getElementById('alertTextMessage');
// Render array list on document
function renderArray() {
    linearSearchContainer.innerHTML = '';
    alertTextMessage.textContent = '';
    inputNumbers.forEach((item, index) => {
        let inputNumberButton = document.createElement('button');
        inputNumberButton.textContent = item;
        inputNumberButton.id = index;
        inputNumberButton.classList.add('input-numbers-btn');
        linearSearchContainer.appendChild(inputNumberButton);
    });
}
renderArray();

// Get number to search element in array list
let searchInputNumber = document.getElementById('searchInputNumber');
searchInputNumber.addEventListener('click', function() {
    renderArray();
    let inputNumberValue = document.getElementById('inputNumber').value;
    linearSearch(parseInt(inputNumberValue), inputNumbers);
});

// 
let submitInputNumber = document.getElementById('submitInputNumber');
submitInputNumber.addEventListener('click', function() {
    let inputList = document.getElementById('inputList').value;
    let newArrayNumbers = inputList.split(',').map(Number);
    inputNumbers.length = 0;
    if (newArrayNumbers.length > 10) {
        alertTextMessage.textContent = "Array size must lesser than or equal to 10";
    }
    else {
        inputNumbers = newArrayNumbers;
        renderArray();
    }
});

// Perform linear search operation on array list items
function linearSearch(searchNum, arr) {
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
            const element = document.getElementById(i);
            element.classList.add('selected-input-number');

            if (arr[i] == searchNum) {
                found = true;
                setTimeout(() => {
                    element.classList.remove('selected-input-number');
                    element.classList.add('input-number-found');
                    alertTextMessage.textContent = `Element present at index ${i}`;
                }, 1000);
                return;
            } else {
                setTimeout(() => {
                    element.classList.remove('selected-input-number');
                }, 1000);
            }

            // If this is the last iteration and the number was not found
            if (i === arr.length - 1 && !found) {
                setTimeout(() => {
                    alertTextMessage.textContent = 'Element not present in that array';
                }, 1000);
            }
        }, i * 1000);

        if (arr[i] == searchNum) {
            break;
        }
    }
}
