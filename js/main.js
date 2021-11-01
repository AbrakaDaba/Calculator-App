let nums = document.getElementsByClassName("calc__num");
let btnDivide = document.getElementById("calc__divide");
let btnMultiply = document.getElementById("calc__multiply");
let btnResult = document.getElementById("calc__result");
let btnClear = document.getElementById("calc__clear");
let btnPlus = document.getElementById("calc__add");
let btnMinus = document.getElementById("calc__substract");
let display = document.getElementsByClassName("calc__display")[0];


for(let i=0; i<nums.length; i++){
    nums[i].addEventListener("click", function(){
        printNum(nums, i);
    })
}

function printNum(nums, i){ 
    display.value += nums[i].innerHTML;
}