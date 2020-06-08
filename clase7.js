var nicolas =
{
    nombre: 'Nicolás',
    apellido: 'Dussán',
    edad: 27
}

var berthold =
{
    nombre: 'Berthold',
    apellido: 'Molina',
    edad: 27
}

function imprimirNombreEnMayusculas(persona)
{
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(nicolas)
imprimirNombreEnMayusculas(berthold)
imprimirNombreEnMayusculas({nombre: 'Pepito'})

function imprimirNombreYEdad({nombre, edad})
{
    //function one
    // Hola, me llamo Nicolas y tengo 27 años
    // Hola, me llamo Berthold y tengo 27 años
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);
}

function imprimirNombreYEdad(persona)
{
    var {nombre} = persona;
    var {edad} = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);
}


imprimirNombreYEdad(nicolas)
imprimirNombreYEdad(berthold)