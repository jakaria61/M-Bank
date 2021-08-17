const depsitBtn = document.getElementById('deposit-button');
depsitBtn.addEventListener('click', function () {
    changeValue('deposit')
})
const withdrawBtn = document.getElementById('withdraw-button');
withdrawBtn.addEventListener('click', function () {
    changeValue('withdraw')
});

function changeValue(type) {
    const inputValue = document.getElementById(`${type}-input`);
    const inputValueText = inputValue.value;
    inputValue.value = '';
    const newInputValue = parseFloat(inputValueText);
    if (newInputValue > 0) {

        const previousValue = document.getElementById(`${type}-total`);
        const previousValueText = previousValue.innerText;
        const previousAmount = parseFloat(previousValueText);
        console.log(previousAmount);
        const total = previousAmount + newInputValue;
        previousValue.innerText = total;

        const totalBalance = document.getElementById('balance-total');
        const totalBalanceText = totalBalance.innerText;
        const totalBalanceAmount = parseFloat(totalBalanceText);
        if (type == 'withdraw') {
            if (totalBalanceAmount < newInputValue) {
                UnexpectInput('withdraw');
            }
            else {
                totalBalance.innerText = totalBalanceAmount - newInputValue;
            }
        }
        else {
            totalBalance.innerText = totalBalanceAmount + newInputValue;
        }
    }
    else {

        UnexpectInput();
    }
}
function UnexpectInput(type) {
    const warning = document.getElementById('warning');
    warning.style.backgroundColor = 'pink';
    warning.style.textAlign = 'center'
    warning.style.border = '2px solid green'
    warning.style.borderRadius = '8px '
    warning.style.color = 'red '
    warning.style.fontFamily = 'cursive '
    warning.style.fontSize = '26px'
    if (type == 'withdraw') {
        warning.innerText = 'You have not sufficient balance';
    }
    else {
        warning.innerText = 'Please enter valid number';
    }
}