// Cómo crear variables privadas con closures

const person = () => {
    // Convertir a una variable "privada"
    // hacer que solo mediante la funcion se pueda cambiar el estado y no desde a fuera sin funciones osea prácticamente directamente cambiarle su valor
    let guardarNombre = "Name";
    // asegurar los cambios de la variable privada la cual se puede modificar por métodos y jamás por valor directo
    const estadoNombre = () => {
        return guardarNombre;
    };
    // Creación de un pseudo-objeto para manipular estados
    return {
        getName: () => {
            return guardarNombre;
        },
        setName: (nombre) => {
            guardarNombre = nombre;
        },
        estadoNombre
    };
};

nuevaPersona = person();
console.log(nuevaPersona.getName());
nuevaPersona.setName('Rene');
console.log(nuevaPersona.getName());
console.log(nuevaPersona.estadoNombre());