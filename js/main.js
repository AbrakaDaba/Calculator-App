let nums = document.querySelectorAll(".calc .calc__num"); 
let operators = document.querySelectorAll(".calc .calc__operator");  
let btnDivide = document.querySelector(".calc__divide");
let btnMultiply = document.querySelector(".calc__multiply");
let btnResult = document.querySelector(".calc__result");
let btnClear = document.querySelector(".calc__clear");
let btnPlus = document.querySelector(".calc__add");
let btnMinus = document.querySelector(".calc__substract");
let display = document.querySelector(".calc__display");
let finalNums;
let btnP = document.getElementsByClassName("calc__num")[0];
console.log(btnP);
 


let counter= 0; // typing start position
let displayArr = []; 
let currentResult;


function printNum(nums, i){ 
    counter++; 
    display.value += nums[i].innerHTML; 
    displayArr.push(parseInt(nums[i].innerHTML));
}


function printOperator(operators, j){  
    console.log(operators[j].innerHTML);
    if (counter !== 0){
        counter++;
        checkInput(operators, j);
    } 
}


function checkInput(operators, j){     
    if (isNaN(displayArr[displayArr.length - 1])){
        display.value = display.value.slice(0, -1); // if last typed char is operator, delete it...
        display.value += operators[j].innerHTML; // ...and put new one on its place
        displayArr.pop();
        displayArr.push(operators[j].innerHTML);
    }else{ 
        display.value += operators[j].innerHTML;
        displayArr.push(operators[j].innerHTML);
    }
}


function clearDisplay(){
    display.value = "";
    counter = 0;
    displayArr = [];
}


function prepareNumsAndOperators(){ 
    if(display.value == "NaN" || display.value == ""){ // clicking "=" when display is cleared
        console.log(display.input);
        display.value =""; 
    }else{
        finalNums = [];
        let finalOperators = [];
        let number = "";
        for(i=0;i<displayArr.length; i++){
            if (isNaN(displayArr[i])){
                finalNums.push(parseInt(number));
                finalOperators.push(displayArr[i]);
                number = ""; 
            }else{
                number+= displayArr[i];
            }
        }
        finalNums.push(parseInt(number));
        displayResult(finalNums, finalOperators);
    }
}



function displayResult(finalNums, finalOperators){
    currentResult = finalNums[0];
    for(i=0; i<finalNums.length - 1; i++){
        if(finalOperators[i]){
            switch(finalOperators[i]){
                case "+":
                    currentResult += finalNums[i+1];
                    break;
                case "-":
                    currentResult -= finalNums[i+1];
                    break;
                case "*":
                    currentResult *= finalNums[i+1];
                    break;
                case "/":
                    currentResult /= finalNums[i+1];
                    break;
            } 
        }
    }
    display.value =  currentResult;
    // displayArr = [currentResult];
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

btnClear.addEventListener("click", clearDisplay);
btnResult.addEventListener("click", prepareNumsAndOperators);
   
