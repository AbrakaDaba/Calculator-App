let nums = document.querySelectorAll(".calc .calc__num"); 
let operators = document.querySelectorAll(".calc .calc__operator");  
let btnDivide = document.querySelector(".calc__divide");
let btnMultiply = document.querySelector(".calc__multiply");
let btnResult = document.querySelector(".calc__result");
let btnClear = document.querySelector(".calc__clear");
let btnPlus = document.querySelector(".calc__add");
let btnMinus = document.querySelector(".calc__substract");
let display = document.querySelector(".calc__display");
 
let counter= 0;
let displayArr = [];


function printNum(nums, i){ 
    counter++; 
    display.value += nums[i].innerHTML; 
    displayArr.push(parseInt(nums[i].innerHTML));
    console.log(displayArr);
}


function printOperator(operators, j){  
    if (counter !== 0){
        counter++;
        checkInput(operators, j);
    }     
}


function clearInput(){
    display.value = "";
    counter = 0;
    displayArr = [];
}


function checkInput(operators, j){ 
    displayArr.push(operators[j].innerHTML);
    console.log(displayArr[displayArr.length - 1]);
    
    if (isNaN(displayArr[displayArr.length - 1])){
        // return;
        displayArr.pop();  
        console.log(displayArr);
        console.log('not num');
        
    }else{  
        display.value += operators[j].innerHTML;
        displayArr.push(operators[j].innerHTML); 
        console.log('num');
         
    }
}


for(let i=0; i<nums.length; i++){
    nums[i].addEventListener("click", function(){
        printNum(nums, i);
    })
}

for(let j=0; j<operators.length; j++){
    operators[j].addEventListener("click", function(){
        printOperator(operators, j);
    })
}

    btnClear.addEventListener("click", clearInput);
   
