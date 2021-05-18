// separate file - to split logic and error handling (to avoid mess in one file)

function isEnoughMoney(amount) {
    // if (!Number.isInteger(amount) || amount < 1 || amount > 5000) {
    if (isNaN(amount) || amount < 1 || amount > 5000) {
        alert('You are not deserve to play with such a money.');
        return false;
    }
    return true;
}
