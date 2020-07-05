var nicolas=
{
    nombre: 'Nicolas',
    apellido: 'Dussán',
    altura: 1.78,
    cantidadLibros: 100
}

var berthold=
{
    nombre: 'Berthold',
    apellido: 'Molina',
    altura: 1.81,
    cantidadLibros: 120
}

var tatiana=
{
    nombre: 'Tatiana',
    apellido: 'Ramirez',
    altura: 1.65,
    cantidadLibros: 80
}

var angie=
{
    nombre: 'Angie',
    apellido: 'Ramirez',
    altura: 1.68,
    cantidadLibros: 119
}

var amparo=
{
    nombre: 'Amparo',
    apellido: 'Molina',
    altura: 1.62,
    cantidadLibros: 200
}

var sophy=
{
    nombre: 'Sophy',
    apellido: 'Dussán',
    altura: 1.62,
    cantidadLibros: 20
}

var personas = [nicolas,berthold,angie,tatiana,amparo,sophy]
// var acum = 0
// 
// for (var i = 0; i < personas.length; i++)
// {
    // acum = acum + personas[i].cantidadLibros
// }
// console.log(`En total todos tienen ${acum} libros`);

// const reducer = (totalLibros, personas) => totalLibros + personas.cantidadLibros
const reducer = (totalLibros, {cantidadLibros}) => totalLibros + cantidadLibros


var totalLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalLibros} libros`);