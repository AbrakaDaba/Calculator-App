let nums = document.querySelectorAll(".js-num"); 
let operators = document.querySelectorAll(".js-operator");  
let btnDivide = document.querySelector(".calc__btn--divide");
let btnMultiply = document.querySelector(".calc__btn--multiply");
let btnResult = document.querySelector(".calc__btn--result");
let btnClear = document.querySelector(".calc__btn--clear");
let btnPlus = document.querySelector(".calc__btn--add");
let btnMinus = document.querySelector(".calc__btn--substract");
let btnMinusPlus = document.querySelector(".calc__btn--minus-plus");
let display = document.querySelector(".calc__display");
// let btnP = document.getElementsByClassName("calc__btn--num")[0];



let counter= 0; // typing start position
let isNumPositive = true;

var finalNums=[];
let displayArr = []; 
let currentResult = 0;

btnMinusPlus.addEventListener('click' ,checkMinusPlus);

function checkMinusPlus(){ 
    if(display.value.slice(0,1) !== "-" && display.value!== 0){ 
        display.value = "-" + display.value;
        // currentResult += "-";
        // console.log(currentResult);
        isNumPositive = false;
        console.log(isNumPositive);
    }else{ 
        display.value = display.value.substring(1);
        isNumPositive = true;
        console.log(isNumPositive);
    }
}



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




function prepareNumsAndOperators(){ 
    if(display.value == "NaN" || display.value == ""){ // clicking "=" when display is cleared
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
    console.log(display.value[0]);
    console.log(finalNums, finalNums[0]);
    (display.value[0] !== "-")? isNumPositive = true: isNumPositive = false;
    finalNums[0] = Math.abs(finalNums[0])
    isNumPositive? finalNums[0] = finalNums[0]: finalNums[0] = finalNums[0] * -1;
    console.log(isNumPositive, finalNums, finalNums[0]); 
    console.log(`display Array: ` + displayArr);    
    console.log(`finalNUms: ` + finalNums); 
    console.log(`finalOperators: ` + finalOperators); 
    currentResult = finalNums[0];
    console.log("currentResult: " + currentResult);
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
    console.log("currentResult: " + currentResult);
    finalNums[0] = currentResult;
    finalNums = [finalNums[0]];
    displayArr = [finalNums[0]];
    console.log(`finalNUms: ` + finalNums);
    console.log(`finalNUms type: ` + typeof finalNums);
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


function clearDisplay(){
    display.value = "";
    counter = 0;
    displayArr = [];
    finalNums = [];
    console.log(finalNums);
    
}

btnClear.addEventListener("click", clearDisplay);
btnResult.addEventListener("click", prepareNumsAndOperators);
   
