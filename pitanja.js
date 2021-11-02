let f = "Fizz";
let b = "Buzz";
let fb = "FizzBuzz";
let arr = []; 

function startPrint(){
    for (let i = 1; i<=100; i++){
        console.log(arr[i]);
        if (i%3 == 0 && i%5 == 0){
            arr.push(fb); 
        }else if(i%5 == 0){
            arr.push(b); 
        }else if(i%3 == 0){
            arr.push(f); 
        }else{
            arr.push(i);       
        }        
    }
    // printRes()
}

function printRes(){
    for(let j = 0; j<arr.length; j++){
        console.log(arr[j]);
    }
}

startPrint();
