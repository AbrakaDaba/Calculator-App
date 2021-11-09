
////////////////////////////
// // JS Pitanja 3.11. ////
///////////////////////////



// 1. Dat je sledeci niz inicijalne velicine 3: 
function task1(){  
    let arr = [1, 2, 3];
    // Koja ce biti velicina niza nakon sledece linije u kodu?  // 11
    arr[10] = 11;
    // Zasto? Sta se dogodilo? Da li je doslo do neke greske u kodu? // interpolation - empty elements(undefined)
    console.log(arr); //[1, 2, 3, empty × 7, 11]
}
// task1()


///////////////////////////////////////////////////////////////


// 2. Sta ce se desiti u narednim linijama koda?
function task2(){  
    const arr1 = [1, 2, 3, 4, 5, 6];
    arr1.length = 10; // adding empty elements to the end of array
    console.log(arr1); //[1, 2, 3, 4, 5, 6, empty × 4]
    const arr2 = [1, 2, 3, 4, 5, 6];
    arr2.length = 3; //cutting array
    console.log(arr2); //[1, 2, 3]
}
// task2()


///////////////////////////////////////////////////////////////


// 3. Da li je sledeci kod ispravan?
function task3(){  
    const arr1 = [1, 2, 3];
    const arr2 = arr1;
    arr1 = []; // cannot change constant variable through reassignment!
    arr2[0] = 0; // why can I change an element of the array if my variable is constant 
    console.log(arr1, arr2);// [0, 2, 3] [0, 2, 3]
// Da li postoji problem na nekoj od linija koda?
//The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable—just that the variable identifier cannot be reassigned.
}
// task3()


///////////////////////////////////////////////////////////////


// 4. Sta je rezultat sledeceg koda?
function task4(){  
    let arr1 = [1, 'foo', true];
    const arr2 = arr1;
    arr1[0] = 2;
    console.log(arr2);
    console.log(arr1 === arr2);//true / in this case both arrays refer to the same memory location.

    arr1 = []; 
    console.log(arr2);
    console.log(arr1 === arr2);//false in this case each of arrays has its own memory location
// WHY?
// reassignment of arr1 (line 42) takes arr1 to a new memory location 
}
// task4()


///////////////////////////////////////////////////////////////


// 5. Sta rade naredne linije koda:
function task5(){  
    let arr = ['Andjela', 'David', 'Dara'];
    const a = arr.push('Mare'); // adds element to the end of the array / returns array length
    console.log(a, arr);
    const b = arr.pop(); // deleting last element / returns popped element
    console.log(b, arr);
    const c = arr.unshift('Kaca'); //adds element to the beginning of an array / returns array length
    console.log(c, arr);
    const d = arr.shift(); //deleting element to the beginning of an array / returns added element
    console.log(d, arr);
}
// task5()


///////////////////////////////////////////////////////////////


// 6. Dat je niz imena: 
function task6(){  
    var name1; var name2; var name3;
    // Napraviti 3 varijable (name1, name2, name3) tako da se svakoj dodeli jedna vrednost iz niza.
    let names = ['Andjela', 'David', 'Dara'];
    for (i=0; i<names.length; i++){
        window["name" + (i + 1)] = names[i];
        // `name${i+1}` = names[i]; //doesn't work
    }
    console.log(name1, name2, name3);
}
// task6()


///////////////////////////////////////////////////////////////


// 7. Dat je niz
function task7(){  
    let arr = [1, 2, 3, 4, 5];
    // Napisati kod koji duplira vrednosti elemenata ovog niza u samom nizu
    // Napisati kod koji duplira vrednosti elemenata ovog niza u novom nizu
    arr.forEach((el, i) => {
        arr[i] = el*2;
    });
    console.log(arr);
    let newArr = [...arr] 
    newArr.forEach((el, i) => {
        newArr[i] = el*2;
    });
    console.log(arr, newArr);
}
// task7()


///////////////////////////////////////////////////////////////


// 8. Dat je niz:
function task8(){  
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // Napisati kod koji u novom nizu smesta samo parne elemente zadatog niza
    // Ocekivani rezultat: [2, 4, 6, 8, 10]
    let evenArr = [];
    arr.forEach(el =>{
        (el%2 == 0)? evenArr.push(el): "";
    })
    console.log(evenArr);
    filter
}
// task8()


///////////////////////////////////////////////////////////////


// 9. Dat je niz:
function task9(){  
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // Napisati kod vraca zbir svih elemenata niza
    let sum = 0;
    arr.forEach(element => {
        sum+=element;
    });
    console.log(sum);
// reduce
}
// task9()


///////////////////////////////////////////////////////////////


// 10. Dat je niz:
function task10(){  
    let arr = ['Andjela', 'David', 'Dara'];
    // Pretvoriti ovaj niz u string, tako da se izmedju reci nalazi karakter +
    // Ocekivan rezultat: “Andjela+David+Dara”
    arr = arr.join("--");
    console.log(arr);
}
// task10()


///////////////////////////////////////////////////////////////


// 11. Dat je niz pomesanih brojeva. 
// Napisati funkciju koja sortira brojeve, bez koriscenja sort metode
function task11(){  
    let arr = [3,6,2,8,9,-4,-8,1,-1,5];
    let newArr = [];
    for(i=0; i<arr.length; i++){
        console.log(arr);
        for(j=0; j<arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let num = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = num;
            }
        }    
    };
    console.log(arr);
}
// task11()


///////////////////////////////////////////////////////////////


// 12. Dat je string, npr:
// Napisati funkciju koja obrce zadati string (argument funkcije) i vraca takav obrnut string sa svim malim slovima.
// Ocekivani izlaz: tpircsavaj ecu alejdna i divad ,arad
function task12(){  
    let str = "Dara, David i Andjela uce JavaScript";

    // Way 0
    let arr = str.split("").reverse().join("").toLowerCase();
    console.log(arr);

    // Way 1
    str1 = [];
    for(i=0; i<str.length; i++){
        str1.unshift(str[i]);
    }
    str = str1.join("").toLowerCase();
    console.log(str);

    // Way2
    str = str.toLowerCase().split("").reverse().join("");
    console.log(str);
}
// task12()


///////////////////////////////////////////////////////////////


// 13. Napisati funkciju koja kao argumente prihvata niz arr i broj n, i koja vraca prvih n elemenata arr niza.
// Bonus - umesto prvih n elemenata vratiti prvih n zadnjih
function task13(){   
    function loodilo(arr, n){
        if(!arr.length || n<=0 || n>arr.length){
            console.log("Please provide correct data");
            return;
        }     
        for(i=0; i<n; i++){
            console.log(arr[i]);
        }
    }
    // loodilo([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
    loodilo([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
    loodilo([1, 2, 3, 4, 5, 6, 7, 8, 9], 0);
    loodilo([1, 2, 3, 4, 5, 6, 7, 8, 9], -5);
    loodilo([], 5);
    loodilo([1, 2, 3, 4, 5, 6, 7, 8, 9], 15);

    // Bonus
    function loodiloRev(arr, n){
        for(i=n-1; i<arr.length; i++){
            console.log(arr[i]);
        }
    } 
    loodiloRev([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
}
// task13();


///////////////////////////////////////////////////////////////


// 14. Napisati funkciju koja kao argument prihvata niz brojeva, i koja vraca novi niz koji sadrzi samo jedinstvene elemente (unikate)?
// Primer zadatog niza: [1,5,3,5,2,2,4,7,5,1,8];
// Dakle, niz koji vraca funkcija treba da sadrzi brojeve  3, 4, 7 i 8 (nebitan redosled).
function task14(){  
    let arr = [1,5,3,5,2,2,4,7,5,1,8]; 

    function uniqueElems(arr){
        let unbelivable = [];
        arr.forEach((el, i) => { 
            // console.log("indexof:", arr.indexOf(el),"i:", i,"el:", el);
            if(arr.indexOf(el) === i){
                unbelivable.push(el);
                // console.log(unbelivable);
            }else{
                    console.log(el, unbelivable.indexOf(el),unbelivable);
                    unbelivable.indexOf(el) !== -1 && unbelivable.splice(unbelivable.indexOf(el), 1)
                    console.log(unbelivable);
                }
            
        });
        return unbelivable;
    }

    console.log(uniqueElems(arr)); //[3,4,7,8] JUHHUUUUUU!!!!!!
}
// task14();


///////////////////////////////////////////////////////////////


// 15. Da li je sledeci kod ispravan?
function task15(){  
    const obj = {
        'key 1': 'I am the key to all success!',
        2: 5,
        '2': 7,
        true: true
    }
    //console.log(obj.'key 1'); // Uncaught SyntaxError: Unexpected string
    console.log(obj['key 1']); // I am the key to all success!
    //console.log(obj.2); // Uncaught SyntaxError: missing ) after argument list
    console.log(obj[2]); // 7
    //console.log(obj.'2'); // Uncaught SyntaxError: Unexpected string
    console.log(obj['2']); // 7
    console.log(obj.true); // true
    console.log(obj[true]); // true
}
// Ako jeste, kako se dohvataju ovakvi propertiji?
// Ako nije, zasto nije ispravno?
// "An object property name can be any valid JavaScript string, or anything that can be converted to a string, including the empty string. However, any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation."
// task15();


///////////////////////////////////////////////////////////////


// 16. Dat je objekat:
function task16(){  
    const person = {
      name: 'I am the key to all success!',
      age: 45,
      Address:  'Not made up 150, 12345, World'
    }
    // Obrisati adresu iz zadatog objekta
    person.Address = "";
    console.log(person);
    delete(person.Address);
    console.log(person);
}
// task16();


///////////////////////////////////////////////////////////////


// 17. Dat je niz objekata:
function task17(){  
    let netflixShows = [
      {
        title: "Squid game",
        watched: true,
      }, 
      {
        title: "The Witcher",
        watched: true,
      },
      {
        title: "You",
        watched: false,
      },
    ];
// Napisati funkciju koja prihvata objekat kao parametar i u slucaju da je serija pogledana ispisuje poruku “I finished watching naziv serije, and I     really enjoyed it!”, a u suprotnom ispisuje poruku “I have yet to watch naziv serije”.

    for (let i in netflixShows){
        let el = netflixShows[i];
        (el.watched == true)? 
        console.log(`I finished watching ${el.title}, and I really enjoyed it!`):
        console.log(`I have yet to watch ${el.title}`);  
    }

    function watchedOrNot(el, i, arr){
        (el.watched == true)? 
        console.log(`I finished watching "${el.title}", and I really enjoyed it!`):
        console.log(`I have yet to watch "${el.title}"`);  
    }
    netflixShows.forEach(watchedOrNot);
}
// task17();


///////////////////////////////////////////////////////////////


// 18. Sta ce da se desi u sledecem kodu:
function task18(){  
    let netflixShows = [
        {
            title: "Squid game",
            watched: true,
        }, 
        {
            title: "The Witcher",
            watched: true,
        },
        {
            title: "You",
            watched: false,
        },
    ];
    
    let latestShow = netflixShows[0];
    latestShow.watched = false;
    console.log(netflixShows);
    
    let newArrayOfNetflixShows = [...netflixShows]; 
    newArrayOfNetflixShows[0].title = "Black Mirror";
    console.log(netflixShows);
    console.log(newArrayOfNetflixShows); // Cool
}

// task18();
// F-je 
