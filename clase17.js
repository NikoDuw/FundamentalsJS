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


var personas = [nicolas,berthold,tatiana,angie,amparo,sophy]

for(var i = 0; i < personas.length; i++)
{
    var persona = personas[i];
    console.log(`La altura de ${persona.nombre} es de ${persona.altura} mts`);
    
}