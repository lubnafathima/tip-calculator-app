'use strict';
let labelBill = document.querySelector(".label-bill");
let billValue = document.querySelector(".bill-value");
let labelPeople = document.querySelector(".label-people");
let peopleValue = document.querySelector(".people-value");
let tips = document.querySelectorAll(".tips-btn");
let tipsInput = document.querySelector(".tips-input");
let lbh2 = document.querySelector(".lb-h2");
let taOutput = document.querySelector(".ta-output");
let toOutput = document.querySelector(".to-output");
let resetBtn = document.querySelector(".reset-btn");

function onFocus(a,b) {
    a.addEventListener("focus", () => {
        b.style.outline = "2px solid var(--Strong-cyan)";
        b.style.borderRadius = "5px";
    });    
};
onFocus(billValue,labelBill);
onFocus(peopleValue,labelPeople);
onFocus(tipsInput,tipsInput);

tips.forEach((i) => {
    i.addEventListener('click', function() {
        document.querySelector('.active').classList.remove('active');
        i.classList.add('active');
    });
});

function removeTip() {
    document.querySelector('.active').classList.remove('active');
    tipsInput.classList.add('.active');
}
console.log(tipsInput)
function ValueData() {
    let newbillValue = parseFloat(billValue.value);
    console.log(newbillValue);
    let newPeopleValue = parseInt(peopleValue.value);
    console.log(newPeopleValue);
    let newTipsInput = parseFloat(tipsInput.value);
    console.log(newTipsInput);
    let newTips = parseFloat(document.querySelector(".active").textContent);
    console.log(newTips);
    if(newbillValue && newPeopleValue && newTips) {
        let tipAmount = ((newbillValue / 100 * newTips) / newPeopleValue);
        tipAmount = tipAmount.toFixed(2);
        console.log(tipAmount);
        let total = (newbillValue / newPeopleValue);
        total = total.toFixed(2);
        console.log(total);
        taOutput.innerHTML = '$' + tipAmount;
        toOutput.innerHTML = '$' + total;
    } else {
        console.log("not");
    }
}
peopleValue.onblur = ValueData;
tipsInput.onblur = removeTip;
// console.log(peopleValue);

resetBtn.addEventListener("click", () => {
    billValue.value = '0';
    peopleValue.value = '0';
    tipsInput.placeholder = "Custom"
    document.querySelector('.active').classList.remove('active');
});