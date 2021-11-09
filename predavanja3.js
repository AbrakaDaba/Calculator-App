// // let a = function(){
// //     return "Hello World";
// // } 

// // let b = a();
// // let c = a;
// // let d = function(x){
// //     return x();
// // }
// // let f = d(a);
// // console.log(f);


// function outer(){
//     let a = 5;
//     function inner(){
//         let g = 10;
//         console.log(g+a);
//         a++;
//         g++;
//     }
//     return inner;
// }

// let getInner = outer();

// getInner();
// // getInner();

// // let getAnotherInner = outer();
// // getAnotherInner();



// let arr = [1, 2, 3];

// arr.push(4);
// Array.from(arr);
// console.log(arr);


// function sum (a){
//     return function(b){
//         return function (c){
//             return a+b+c
//         }
//     };
// }

// // console.log(sum(1,2,3));

// // curryng
// let x = sum(1);
// console.log(x);

// let y = x(2);
// console.log(y);

// let z = y(3);
// console.log(z);
// console.log(sum(1)(2)(3));



let obj = {
    name: "David",
    getName: function(){
        // console.log(this);
        return function (age, city){
            return this.name + age + city;
        }
    }
}


let neka = obj.getName();

console.log(neka.call(obj, 100, "Tunguzija"));
console.log(neka.apply(obj,[50, "Bg"]));
let binded = neka.bind(obj);
console.log(binded(40, "kjhdsfkjash"));



// console.log(this);//BOM Browser Object Model
// console.log(obj.name, obj.getName()());

// function checkThis(){
//     return function (){
//         console.log(this === window);
//     }
//     console.log(this === window);
// }

// checkThis()();

let x = Symbol("Dabaa");
console.log();

let d = {
    [x]: "Uraaa"
}

console.log(d);
d[x] = "Huraaa"
console.log(d);