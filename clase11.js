var nicolas =
{
    nombre: 'Nicolas',
    apellido: 'Dussan',
    edad: 27,
}

var berthold =
{
    nombre: 'Berthold',
    apellido: 'Molina',
    edad: 17,
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona)
{
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona)
{
    if(esMayorDeEdad(persona))
    {
        console.log(`${persona.nombre} es Mayor de edad`);        
    }
    else
    {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

// imprimirSiEsMayorDeEdad(persona)