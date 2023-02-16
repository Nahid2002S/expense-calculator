function costCalculator(elementId){
    const itemCost = document.getElementById(elementId);
    const itemCostStr = itemCost.value;
    const itemCostNum = parseInt(itemCostStr);
    return itemCostNum;
}

function totalCostCalculator(){
    const foodCost = costCalculator('food');
    const rentCost = costCalculator('rent');
    const clothesCost = costCalculator('clothes');

    const totalCost = foodCost + rentCost + clothesCost;
    const totalExpense = document.getElementById('expense');
    totalExpense.innerText = totalCost;
    return totalCost;
}

function haveBalance(){
    const totalCost = totalCostCalculator();

    const totalIncome = costCalculator('income');
    if(totalIncome < totalCost){
        alert('You Cannot Cost More Than Income');
    }
    const balance = totalIncome - totalCost;
    return balance;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    const balance = haveBalance();
    const newBalance = document.getElementById('have-balance');
    newBalance.innerText = balance;
});

document.getElementById('save-btn').addEventListener('click', function(){
    const savingField = costCalculator('saving');
    if(savingField > 100){
        alert('Your Saving Amount More Than Your Income!!! Be Careful!!!');
        percentage = 0000;
    }
    const totalIncome = costCalculator('income');
    const savingAmount = document.getElementById('saving-amount');
    const percentage = (totalIncome / 100) * savingField ;
    console.log(percentage);
    savingAmount.innerText = percentage;

    const totalCost = totalCostCalculator();
    
    const balance = haveBalance();
    const remainingBalance = balance - percentage;
    const remainingField = document.getElementById('remaining');
    remainingField.innerText = remainingBalance;
})