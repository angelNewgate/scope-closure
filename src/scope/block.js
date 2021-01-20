const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        // Las variables solo se declaran dentro de este bloque, al
        // usarse en otros bloques es como si no hubiesen sido declaradas.
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
    // console.log(fruits2);
    // console.log(fruits3);
}

fruits();

//global, la variable no se ve afectada porque let no se puede redefinir
let x = 2;
{
    //Local, la variable no se re-define
    let x = 1;
    console.log(x); // 1
}
console.log(x); // 2

/**************************** */
// En este caso al usar var, la variable se ve afectada por un cambio
// local dentro de un bloque.
var c = 2;
{
    var c = 1;
    console.log(c);//1
}
console.log(c);// 1



/************************** */

const otherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 500)
    }
};

otherFunction();