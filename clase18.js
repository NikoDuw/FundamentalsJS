var nicolas=
{
    nombre: 'Nicolas',
    apellido: 'Dussán',
    altura: 1.78
}

var berthold=
{
    nombre: 'Berthold',
    apellido: 'Molina',
    altura: 1.81
}

var tatiana=
{
    nombre: 'Tatiana',
    apellido: 'Ramirez',
    altura: 1.65
}

var angie=
{
    nombre: 'Angie',
    apellido: 'Ramirez',
    altura: 1.68
}

var amparo=
{
    nombre: 'Amparo',
    apellido: 'Molina',
    altura: 1.62
}

var sophy=
{
    nombre: 'Sophy',
    apellido: 'Dussán',
    altura: 1.62
}

// const esAlta = persona => persona.altura > 1.7
const esAlta = ({ altura }) => altura > 1.7


var personas = [nicolas,berthold,tatiana,angie,amparo,sophy]

// var personasAltas = personas.filter(function (persona){ return persona.altura > 1.8 })
var personasAltas = personas.filter(esAlta)

console.log(personasAltas);


const esBaja = ({ altura }) => altura < 1.7

var personasBajas = personas.filter(esBaja)

console.log(personasBajas)



