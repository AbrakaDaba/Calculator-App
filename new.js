let arr = [];
let arr2 = [1, 2, 3];

console.log(arr2[0]);


arr.push(4);
console.log(arr[0]);


arr[1] = 5;
console.log(arr);

let newArr = ["Heloo", 1, true, arr2, ["a", "b", "c"]]; 
let x = 5;
let y = 5;

console.log(x === y);

let newArr1 = ["Heloo", 1, true];
let newArr2 = newArr1;
let newArr3 = ["Heloo", 1, true];
let newArr4 = [...newArr1];
console.log(newArr4);

console.log(newArr1 === newArr4);

newArr2[0] = "Good by";
console.log(newArr1 === newArr2);
console.log(newArr1);

let [a,b] = newArr1;
console.log(a, b);

// OBJECTS

let obj = {

}

let d = "greetings"

let obj2 = {
    greetings : "Hello",
    y : "World"
}

console.log(obj2.x);
console.log(obj2[d]);


