/* 
1: add even listener to the deposit button
2: get deposit amount from the deposit input field
2.5: make sure convert string deposit amount to a number type
3 : clear deposit field after getting the value
4 : get the pervious total
5 : calculate new deposit total and set the value to the deposit total
6 : current balace total
7 : calculate the new balance and set it to the balance total element
*/
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');
    const perviousDepositTotalString = depositTotalElement.innerText;
    const perviousDepositTotal = parseFloat(perviousDepositTotalString);
     
    const newDepositTotal = perviousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const perviousBalanceTotalString = balanceTotalElement.innerText;
    const perviousBalanceTotalAmount = parseFloat(perviousBalanceTotalString);

    const newBalanceTotal = perviousBalanceTotalAmount + newDepositTotal;
    balanceTotalElement.innerText = newBalanceTotal;
})