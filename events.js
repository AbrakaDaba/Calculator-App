

const x = document.querySelector('.calc__btn');
x.addEventListener("click", changeColor);  


function changeColor(ev){
    console.log(ev, ev.currentTarget);
    console.log(this); // clicked btn
    this.style.background = "black";
    this.removeEventListener("click", changeColor);
}

// changeColor();


let calc = document.querySelector('.calc');
let p = document.querySelector('.calc__logo');

function myAlert(ev){
    console.log(ev.target, ev.currentTarget, this);
    // ev.stopPropagation(); // stop bubbling;
}

function myAlert2(ev){
    console.log(ev.target, ev.currentTarget, this);
}

calc.addEventListener("click", myAlert2, true);
p.addEventListener("click", myAlert, true);

