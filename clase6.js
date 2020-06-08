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

// function imprimirNombreEnMayusculas(nombre)
// {
    // nombre = nombre.toUpperCase()
    // console.log(nombre);    
// }

// imprimirNombreEnMayusculas(nicolas.nombre)
// imprimirNombreEnMayusculas(berthold.nombre)


// function imprimirNombreEnMayusculas(persona)
// {
    // var nombre = persona.nombre.toUpperCase()
    // console.log(nombre);    
// }

// function imprimirNombreEnMayusculas(persona)
// {
    // console.log(persona.nombre.toUpperCase())
// }

function imprimirNombreEnMayusculas({nombre})
{
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(nicolas)
imprimirNombreEnMayusculas(berthold)
imprimirNombreEnMayusculas({nombre: 'Pepito'})
