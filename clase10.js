var nicolas =
{
    nombre: 'Nicolas',
    apellido: 'Dussan',
    edad: 27,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista:false,
    drone: true
}

function imprimirProfesiones(persona)
{
    console.log(`${persona.nombre} es :`)

    if (persona.ingeniero)
    {
        console.log('ingeniero');
    }

    if (persona.cocinero)
    {
        console.log('cocinero');
    }

    if (persona.cantante)
    {
        console.log('cantante');
    }

    if (persona.dj)
    {
        console.log('dj');
    }

    if (persona.guitarrista)
    {
        console.log('guitarrista');
    }

    if (persona.drone)
    {
        console.log('drone');
    }
}

imprimirProfesiones(nicolas)

function imprimirSiEsMayorDeEdad(persona)
{
    console.log(`${persona.nombre} es :`);

    if(persona.edad >= 18)
    {
        console.log('Es mayor de edad');        
    }
    else
    {
        console.log('Es menor de edad');
        
    }
}

imprimirSiEsMayorDeEdad(nicolas)