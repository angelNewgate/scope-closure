
const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruits();

const anotherFunction = () => {
    // Var te permite re-declarar la variable con un nuevo valor.
    var x = 1;
    var x = 1;
    // Con let solo se puede declarar una variable una vez, y definir varias veces.
    let y = 1;
    y = 2;
    // Con const no se puede hacer ninguna de las anteriores, el valor se mantiene constante
    const z = 3;
    // const z = 2;
    // z = 1;
    console.log(x);
    console.log(y);
    console.log(z);
}

anotherFunction();