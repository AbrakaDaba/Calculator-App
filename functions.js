// "use strict"
////////////////////////////
// // Samopozivajuca F-ja //
////////////////////////////
// (function daba(){
//     let x = 3;
//     let y =5;
//     console.log(x+y);
// })()

//////////////////////////////////////////////
// Function Declaration(Function Statement) //
//////////////////////////////////////////////
// function myFun(x){
//     return x;
// }

/////////////////////////////////////////////////////////////////////
// Function Expression with declared function (example: Recursion) //
/////////////////////////////////////////////////////////////////////
// var ref = function myExpFun(){
//     return;
// }

///////////////
// Recursion //
///////////////
// function countDownFrom(number) { 
//     if (number === 0) {
//         return; 
//     } 
//     console.log(number); 
//     countDownFrom(number - 1);
// }
// countDownFrom(5); // 5 // 4 // 3 // 2 // 1 
// console.log(console.time(myFun(5)))

/////////////////////////////////////////////////
// Function Expression with anonimous function //
/////////////////////////////////////////////////
// var ref = function (){
//     return;
// }

////////////////////////////////////////////////////////////////
// Function created via construcor Function, f-body is string;// 
////////////////////////////////////////////////////////////////
// var myNewFun = new Function("msg, msg2", "return msg + ' ' + msg2");
// console.log(myNewFun("Hello", "World"));

///////////////////////
// Callback function //
///////////////////////
// function cbFun(){ 
//     document.body.style.backgroundColor = "#003";
// }
// window.setTimeout(cbFun, 4000);


//////////////////////
// Closure function //
//////////////////////
// function closure(i){ 
//     console.log(i);
//   blok = document.createElement("div");
//   blok.innerHTML = "Klikni me.";
//   blok.onclick = function(){     // anonimna funkcija je closure
//   blok.innerHTML = "Ovo je BLOK " + i;  // rezultat neće biti ono što želimo
// };
//   document.body.appendChild(blok);
// }
// function napravi(N){
//   var blok;
//   for (let i=1; i<=N; i++) {
//     setTimeout(function (){ 
//         console.log(i);
//     //   blok = document.createElement("div");
//     //   blok.innerHTML = "Klikni me.";
//     //   blok.onclick = function(){     // anonimna funkcija je closure
//     //   blok.innerHTML = "Ovo je BLOK " + i;  // rezultat neće biti ono što želimo
//     // };
//     //   document.body.appendChild(blok);
//     }, 1000);
// }
// }

// function foo(i){
//     setTimeout(function() { console.log(i) }, 2000);
// }

// for (let i = 1; i <= 2; i++) {
//     foo(i);
// }
//???





// // Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// JS Pitanja 5.11
// Sta je Currying tehnika? Kako se closures nadovezuju na ovu temu?
// Opisati izvrsavanje i redosled izvrsavanja ovog koda, liniju po liniju. Sta ce biti rezultat izvrsavanja console.log naredbi? Zbog cega je funkcija za sabiranje dva broja napisana na ovakav nacin a ne kao jednostavna funkcija koja prihvata 2 argumenta i vraca njihovu sumu?

// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// add5 = makeAdder(5);
// add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add5(7));
// console.log(add10(2));
// console.log(add10(4));

// The "currying" is the process of taking the function of multiple arguments and converting it into a serious of functions that each take a single argument and return a function of a single argument, or in the case of the final function, return the actual result.
// Closures functions can access all the variables defined in outer functions.


//////////////////////////////////////////////////////


// Data je funkcija za racunanje popusta

// function discount(price, discount) {
//     return price * discount;
// } 
// // pozivanje funkcije za racunanje popusta od 10%: 
// const newPrice = discount(500, 0.1);

// Prepraviti ovu funkciju uz pomoc currying tehnike tako da ne mora svaki put da se unesu i cena i procenat kao argumenti da bi se izracunao popust od 10%.
// function price(price) {
//     return function (disc) {
//         return price * disc;
//     }
// } 

// discount = price(500);
// console.log(discount(0.1));

// Sta su pure funkcije? Koja 2 kriterijuma moraju da ispunjavaju pure funkcije?
// A pure function is a function which:
// Given the same input, will always return the same output.
// Produces no side effects.


//////////////////////////////////////////////////////


// Uporediti ovaj kod:

// const add = (x, y) => x + y;
// console.log(add(3, 5));

// Sa ovim kodom:

// let x = 3;
// const add = (y) => {
//   return x += y;
// };
// console.log(add(5));
// console.log(add(5));

// Da li su obe add funkcije pure funkcije? Objasniti razliku izmedju njih.
// Prva je Pure, druga ne. Prva ne menja vrednosti variabli, druga da.



//////////////////////////////////////////////////////



// Sta je IIFE (Immediately Invoked Function Expression)? Istraziti sta je, kako radi i napisati jedan ili dva primera u kodu.
// Local scope, self invoked. 
// (function(){})();



//////////////////////////////////////////////////////



// Objasniti izvrsavanje narednog koda, liniju po liniju kako bi se izvrsavao. Sta je rezultat nakon svakog console.log izvrsavanja? Zasto?

// let counter = (function() {
//   let privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function() {
//       changeBy(1);
//     },
//     decrement: function() {
//       changeBy(-1);
//     },
//     currentValue: function() {
//       return privateCounter;
//     }
//   };   
// })();

// console.log(counter.currentValue()); // 0
// counter.increment(); // privateCounter = 1
// counter.increment(); // privateCounter = 2
// console.log(counter.currentValue()); // 2
// counter.decrement(); //privateCounter = 1
// console.log(counter.currentValue()); // 1



//////////////////////////////////////////////////////



// !!!Sta ce biti rezultat datih console.log naredbi?

let arr = [];
for (var i = 0; i < 3; i++) { 
    arr[i] = function () {
        let x = i;
        console.log(x);
    }
}
// console.log(i);
console.log(arr);
arr[0](); // 3?
arr[1](); // 3?
arr[2](); // 3?

// Da li je ovo bio ocekivani rezultat? Zasto se ovo dogodilo? Sta ce se desiti ako umesto var stavimo let? Sta smo sada dobili kao rezultat? // 0 // 1 // 2
// arr[0](); // 0
// arr[1](); // 1
// arr[2](); // 2



///////////////////////////////////////////////////////



// Sta ce ispisati naredne console.log naredbe?

// console.log(this === window); // true
// function isThisWindow() {
//   return this === window;
// }

// console.log(isThisWindow()); // true Window poziva funkciju i on je u ovom slucaju this



//////////////////////////////////////////////////////



// Sta je ‘use strict’? Gde sve moze da se doda u kodu?
// The "use strict" directive is only recognized at the beginning of a script or a function.
// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode)
// Using a variable, without declaring it, is not allowed
// Deleting a variable (or object or function) is not allowed
// If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window)

// Sta ce ispisati console.log naredbe iz prvog zadatka ako se doda ‘use script’?
// Reference error , not defined



//////////////////////////////////////////////////////



// Sta ce se ispisati u narednim primerima koda. Zasto?
// Reference error , not defined

// let a = {
//   x: 5,
//   getX: function() {
//     return this.x;
//   }
// }
// console.log(a.getX()); // 5


// let b = {
//   x: 5,
//   getX: function() {
//     return this.x;
//   }
// }
// let bx = b.getX;
// console.log(bx()); // this is global / undefined


// let c = {
//   x: 5,
//   getX: function() {
//     return function() {
//       return this.x;
//     };
//   }
// }
// console.log(c.getX()()); //this is window - global object?


// let d = {
//   x: 5,
//   getX: function() {
//     return function() {
//       return this.x;
//     };
//   }
// }
// let dx = d.getX();
// console.log(dx.call(d)); //this becomes d-object



//////////////////////////////////////////////////////



// Koja je razlika izmedju call, apply i bind metoda? Sta su rezultati narednih console.log naredbi? Zasto?
// With call(), an object can use a method belonging to another object.
// The call() method takes arguments separately. 
// The apply() method is very handy if you want to use an array instead of an argument list.
// The apply() method takes arguments as an array.
// In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.
// bind() changes this



// function nameAge(name, age) {
//   this = myCity;
//   return `My name is ${name}, I am ${age} years young and I come from ${this.city}`;}

// let myCity = {
//   city: "Belgrade",
// }
// var arrr= ["Nis", 50];
// console.log('example1: ', nameAge('Pera', 20)); // cool, cool, undefined
//console.log('example2: ', nameAge.call(myCity)); // prosledili smo this. cool, two parameters are missing, undefined
// console.log('example3: ', nameAge.call(myCity, 'Pera', 20)); //cool, cool, cool
// console.log('example4: ', nameAge.call(myCity, ['Pera', 20])); //cool, cool?, undefined ARGUMENTI !!!!!!!!!!!!!!!!!!
// console.log('example5: ', nameAge.call(myCity, ...arrr));// ?  ...['Pera', 20] === 'Pera', 20  // DESTRUCTURING
// console.log('example6: ', nameAge.apply(myCity, ['Pera', 20])); // 
// nameAge.bind(myCity); // not assigned to some variable, so nothing will happen
// console.log('example7: ', nameAge('Pera', 20));
// let nameAgeBelgrade = nameAge.bind(myCity);
// console.log(typeof nameAgeBelgrade,'example8: ', nameAgeBelgrade('Pera', 20));

// --------------------------------------------------------------------------------------------------------

// Napisati kod u JS-u koji dohvata:
// Sve elemente sa klasom ‘btn’, 
// console.log(document.getElementsByClassName('btn')[0]);
// console.log(document.querySelectorAll('.btn'));
// document.getElementsByClassName('btn');

// Prvi element sa klasom ‘btn’,
//document.getElementsByClassName('btn')[0];

// Element sa ID-em ‘unique’,
// document.getElementById('unique');

// Sve elemente koji su input
// document.getElementsByTagNames('input');

// Sve elemente koji su tekstualni input (<input type=”text” />);
// console.log(document.querySelector('input[type="text"]'));

// Sve elemente koji su tekstualni input i imaju name (<input type=”text” name=”email” />)
// document.querySelectorAll(input[type="text" name]);

// Sve elemente sa klasom ‘btn’ unutar klase ‘btn-wrapper’
// document.querySelectorAll(.btn-wrapper .btn);



//////////////////////////////////////////////////////



// Napisati funkciju toggle, koja svaki put kad se pozove toggle-uje klasu jednog elements (dakle prvi put kad se pozove ce dodati klasu, a drugi put kad se pozove ce tu klasu ukloniti itd.)

// let btn = document.querySelector('.bg-change');
// btn.addEventListener("click", changeColor);

// function changeColor(){
//  this.classList.toggle('blue');
// }

// function changeColor(){
//  if(this.classList.contains('blue')){
//      this.classList.remove('blue');
//     }else{
//      this.classList.add('blue');
//  };
// }



//////////////////////////////////////////////////////



// 	U pitanju je element:
// <button class=”btn”>I am a button</button>
// I klasa koja se toggle-uje je btn--red, koja farba dugme u crvenu boju
//  Dat je naredni html kod:
// <p>I am first</p>
// <p>I am second</p>
// Napisati u JS kodu funkciju koja kad se pozove rotira sadrzaj teksta unutar ovih p tagova (dakle ne treba da elementi zamene mesta u html-u, vec samo njihov tekst da zameni mesta).


// let btn = document.querySelector('.btn');
// let firstP = document.querySelector('[identity="first"]');
// let secondP = document.querySelector('[identity="second"]');
 
// btn.addEventListener("click", changeContent);


// function changeContent(){
//     let secondContent = secondP.innerHTML;
//     secondP.innerHTML = firstP.innerHTML;
//     firstP.innerHTML = secondContent; 
// }


//////////////////////////////////////////////////////



// Objasniti sta je BOM, i koja je razlika u odnosu na DOM? Koji sve dostupni objekti pripadaju BOM-u? Koji je glavni objekat?
// Navesti neke metode ili propertije window objekta
// Browser Object Model - represents browser window with all global functions, objects and  variables as well as propertise like document, innerHeight, alert, location, localStorage...
// Window is main global object

// Napisati funkciju koja racuna koren jednog broja i vraca duplirano resenje. Koji built-in objekat je koriscen prilikom racunanja korena?
// 	Primer - ulaz: 64, izlaz: 16 (koren od 64 je 8 pa duplirana vrednost)

// function littleFun(x){
//  return Math.sqrt(x) * 2;
// }
// console.log(littleFun(64));


// Napisati funkciju getCurrentDay koja unutar sebe kreira trenutni datum i vraca dan u nedelji u vidu teksta (‘Monday’ ili ‘Tuesday’ itd.). Koristiti switch prilikom odabira dana u nedelji. Koja built-in funkcija je koriscena prilikom dohvatanja trenutnog datuma?

// function getCurrentDay(){
//     let today = new Date().getDay();
//     console.log(today);
// }



// let randArr = ["papir", "kamen", "makaze"];
// let btn = document.querySelector('.btn');
// btn.addEventListener("click", playTheGame);

// function playTheGame(){
//     let rand = Math.ceil(Math.random() * 3 - 1);
//     console.log(randArr[rand]);
// }



class Calculator {
    constructor(a,b){
        this.result = a + b;
    }
    getResult(){
        return this.result;
    }
}
//predefinisani set propertija

let x = new Calculator(5, 3);

console.log(x.getResult());

