let arr1 = [1, 2, 3];

for(let i = 0; i<arr1.length; i++){
    // console.log(arr1[i] = arr1[i]*2);
}
// console.log(arr1);

arr1.forEach((element, index) => {
    // console.log(arr1[index] = element * 2);
});
// console.log(arr1);


let maped = arr1.map(el => el * 2);
console.log(arr1, maped);

let filtered = arr1.filter(el => el>1);
console.log(filtered);

