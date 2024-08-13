let inputNumbers = [10, 5, 23, 54, 89, 100];
let searchContainer = document.querySelector('.binary-search-container');
let alertTextMessage = document.getElementById('alertTextMessage');

function renderArray() {
    searchContainer.innerHTML = '';
    alertTextMessage.textContent = '';
    inputNumbers.sort((a, b) => a - b);

    inputNumbers.forEach((item, index) => {
        let numberedItemContainer = document.createElement('div');
        numberedItemContainer.classList.add('binary-search-container-with-index');

        let button = document.createElement('button');
        let indexLabel = document.createElement('label');
        let icon = document.createElement('i');


        button.textContent = item;
        indexLabel.textContent = index;
        
        button.id = index;
        button.classList.add('input-numbers-btn');

        icon.id = `icon-${index}`;
        icon.classList.add('fa-solid', 'fa-arrow-up');
        icon.style.display = 'none';

        numberedItemContainer.appendChild(indexLabel);
        numberedItemContainer.appendChild(button);
        numberedItemContainer.appendChild(icon);

        searchContainer.appendChild(numberedItemContainer);
    });
}
renderArray();

let searchInputNumber = document.getElementById('searchInputNumber');
searchInputNumber.addEventListener('click', function() {
    renderArray();
    let searchValue = document.getElementById('inputNumber').value;
    binarySearch(parseInt(searchValue), inputNumbers);
});

let submitInputNumber = document.getElementById('submitInputNumber');
submitInputNumber.addEventListener('click', function() {
    let inputList = document.getElementById('inputList').value;
    let userInputArray = inputList.split(',').map(Number);
    inputNumbers.length = 0;
    
    if (userInputArray.length > 10) {
        alertTextMessage.textContent = "Array size must be less than or equal to 10";
    } else {
        inputNumbers = userInputArray;
        renderArray();
    }
});

// Perform binary search operation on array list items
function binarySearch(searchTarget, numberArray) {
    numberArray.sort((a, b) => a - b);
    console.log(numberArray);
    let low = 0;
    let high = numberArray.length - 1;
    let found = false;

    function greyOutButtons(start, end) {
        for (let i = start; i <= end; i++) {
            const button = document.getElementById(i);
            button.classList.add('greyed-out');
        }
    }

    function step(low, high) {
        if (low > high) {
            if (!found) {
                setTimeout(() => {
                    alertTextMessage.textContent = 'Element not present in that array';
                }, 1000);
            }
            return;
        }

        let mid = Math.floor((low + high) / 2);

        setTimeout(() => {
            const buttonElement = document.getElementById(mid);
            buttonElement.classList.add('selected-input-number');
            
            const iconElement = document.getElementById(`icon-${mid}`);
            iconElement.style.display = 'block';

            if (numberArray[mid] === searchTarget) {
                found = true;
                setTimeout(() => {
                    buttonElement.classList.remove('selected-input-number');
                    iconElement.style.display = 'none';
                    buttonElement.classList.add('input-number-found');
                    alertTextMessage.textContent = `Element present at index ${mid}`;
                }, 1000);
            } else {
                setTimeout(() => {
                    buttonElement.classList.remove('selected-input-number');
                    iconElement.style.display = 'none';
                    if (numberArray[mid] < searchTarget) {
                        greyOutButtons(low, mid);
                        step(mid + 1, high);
                    } else {
                        greyOutButtons(mid, high);
                        step(low, mid - 1);
                    }
                }, 1000);
            }
        }, 1000);
    }

    step(low, high);
}