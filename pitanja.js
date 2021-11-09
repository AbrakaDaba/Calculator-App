

// for (let i = 1; i<=100; i++){
//     console.log(i%3==0? "fizz" && i%5==0? "fizzbuzz": "buzz" : i)     
// } 
 

let f = "Fizz";
let b = "Buzz";
let fb = "FizzBuzz";
let arr = [];

for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        arr.push(fb);
    }else if(i % 5 == 0){
        arr.push(b);
    }else if(i % 3 == 0){
        arr.push(f);
    }else{
        arr.push(i); // [1]
}

console.log(arr[i-1]);
// console.log(i);

}
