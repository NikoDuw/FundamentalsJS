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
// var esMayorDeEdad =function (persona)
// {
    // return persona.edad >= MAYORIA_DE_EDAD
 // }

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
    
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

const permitirAcceso = ({edad}) => edad >= MAYORIA_DE_EDAD

// function permitirAcceso(persona)
// {
    // if(!esMayorDeEdad(persona))
    // console.log('Acceso denegado');
    // else
    // {
        // console.log('Acceso Consedido');
    // }
// }

function imprimirIngreso(persona)
{
    if(permitirAcceso(persona))
    {
        console.log(`${persona.nombre} ingreso concedido`);
    }
    else
    {
        console.log(`${persona.nombre} ingreso denegado`);
    }
}