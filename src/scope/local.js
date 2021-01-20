
const helloWorld = () => {
    let hello = 'Hello World';
}

console.log(hello);


var scope = "I am global";


// This is named lexical scope | ámbito léxico
const functionScope = () => {
    var scope = "I am just a local";
    const func = () => {
        return scope
    }
    console.log(func());
}

functionScope()
console.log(scope);