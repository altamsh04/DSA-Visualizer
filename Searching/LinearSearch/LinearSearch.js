// Array list default inputs
let inputNumbers = [10, 5, 23, 54, 89, 100];
let searchContainer = document.querySelector('.linear-search-container');
let alertTextMessage = document.getElementById('alertTextMessage');

// Render array list on document
function renderArray() {
    searchContainer.innerHTML = '';
    alertTextMessage.textContent = '';
    inputNumbers.forEach((item, index) => {
        let numberedItemContainer = document.createElement('div');
        numberedItemContainer.classList.add('linear-search-container-with-index');

        let button = document.createElement('button');
        let indexLabel = document.createElement('label');

        button.textContent = item;
        indexLabel.textContent = index;
        
        button.id = index;
        button.classList.add('input-numbers-btn');

        numberedItemContainer.appendChild(indexLabel);
        numberedItemContainer.appendChild(button);

        searchContainer.appendChild(numberedItemContainer);
    });
}
renderArray();

// Get number to search element in array list
let searchInputNumber = document.getElementById('searchInputNumber');
searchInputNumber.addEventListener('click', function() {
    renderArray();
    let targetValue = document.getElementById('inputNumber').value;
    linearSearch(parseInt(targetValue), inputNumbers);
});

// Take user input for new array
let submitInputNumber = document.getElementById('submitInputNumber');
submitInputNumber.addEventListener('click', function() {
    let inputList = document.getElementById('inputList').value;
    let newNumbers = inputList.split(',').map(Number);
    inputNumbers.length = 0;
    
    // Prevent over limit and set to only array size 10
    if (newNumbers.length > 10) {
        alertTextMessage.textContent = "Array size must lesser than or equal to 10";
    }
    else {
        inputNumbers = newNumbers;
        renderArray();
    }
});

// Perform linear search operation on array list items
function linearSearch(searchTarget, numberArray) {
    let found = false;
    for (let i = 0; i < numberArray.length; i++) {
        setTimeout(() => {
            const buttonElement = document.getElementById(i);
            buttonElement.classList.add('selected-input-number');

            if (numberArray[i] == searchTarget) {
                found = true;
                setTimeout(() => {
                    buttonElement.classList.remove('selected-input-number');
                    buttonElement.classList.add('input-number-found');
                    alertTextMessage.textContent = `Element present at index ${i}`;
                }, 1000);
                return;
            } else {
                setTimeout(() => {
                    buttonElement.classList.remove('selected-input-number');
                }, 1000);
            }

            // If this is the last iteration and the number was not found
            if (i === numberArray.length - 1 && !found) {
                setTimeout(() => {
                    alertTextMessage.textContent = 'Element not present in that array';
                }, 1000);
            }
        }, i * 1000);

        if (numberArray[i] == searchTarget) {
            break;
        }
    }
}
