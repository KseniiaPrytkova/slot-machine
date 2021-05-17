function isEnoughMoney(amount) {
    if (amount < 1 || amount > 5000) {
        alert('You are not deserve to play with such a money.');
        return false;
    }
    return true;
}