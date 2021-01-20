// Debugger will be a great tool to develop your own abilities

var a = 'Hello World';

function hello() {
    let b = 'Hello World';
    const c = 'Hello World';
    if (true) {
        let d = 'Hello World!!';
        debugger
    }
}

hello();


const papa = () => {
    var cantidadHijos = 0;
    const crearEngendro = (nuevoEngendro) => {
        cantidadHijos += nuevoEngendro;
        console.log(`Cantidad de engendros: ${cantidadHijos}`);
    }
    return crearEngendro;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(2);// 2
traigamosHijosAlMundo(1); // 3
traigamosHijosAlMundo(10); // 13
