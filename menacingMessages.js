// separate file - to split logic and error handling (to avoid mess in one file)

function isEnoughMoney(amount) {
    // if (!Number.isInteger(amount) || amount < 1 || amount > 5000) {
    if (isNaN(amount) || amount < 1 || amount > 5000) {
        alert('You are not deserve to play with such money. Valid nterval: [1...5000].');
        return false;
    }
    return true;
}

function isWon(amount) {
    if (amount > 5000) {
        alert('You won. Enough!');
        return false;
    }
    return true;
}
