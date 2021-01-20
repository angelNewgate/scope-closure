// Esto es el hoisting. Eleva las variables.

a = 2;
var a;
console.log(a); // 2



/*************** */
console.log(b); // undefined
var b = 1;



/***************** */

nameOfDog('Elmo');// Elmo

function nameOfDog(name) {
    console.log(name);
}
