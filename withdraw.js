document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const perviousWithdrawTotalString = withdrawTotalElement.innerText;
    const perviousWithdrawTotal = parseFloat(perviousWithdrawTotalString);
     
    const newWithdrawTotal = perviousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = newWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const perviousBalanceTotalString = balanceTotalElement.innerText;
    const perviousBalanceTotalAmount = parseFloat(perviousBalanceTotalString);

    const newBalanceTotal = perviousBalanceTotalAmount - newWithdrawTotal;
    balanceTotalElement.innerText = newBalanceTotal;
})