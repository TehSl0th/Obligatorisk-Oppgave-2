function selectBar(i) {
    chosenBar != i ? chosenBar = i : chosenBar = null;
    show();
}

function deleteBar() {
    numbers.splice(chosenBar, 1);
    chosenBar = null;
    show();
}

function editBar() {
    if (inputValue >= 1 && inputValue <= 10) {
        numbers[chosenBar] = inputValue;
        chosenBar = null;
    }
    else {
        alert("Du har ikke lov til å bruke tall under 1 eller tall over 10");
        chosenBar = null;
    }
    show();
}
function addBar() {
    if (inputValue >= 1 && inputValue <= 10) {
        numbers.push(inputValue);
    }
    else {
        alert("Du har ikke lov til å bruke tall under 1 eller tall over 10");
    }
    show();
}