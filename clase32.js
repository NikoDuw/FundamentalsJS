// almacenacmiento de la url a la cual accederemos
const API_URL = 'https://swapi.dev/api/'
// extraccion de la información de la url seccion enfocada
const PEOPLE_URL = 'people/:id'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const options = { croosDomain: true }

const onPeopleResponse = function (persona)
{
    console.log(`Hola, yo soy, ${persona.name}`)
}

function obtenerPersonaje(id)
{
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, options, onPeopleResponse)
}

contador = 5

for(i = 0; i < contador; i ++)
{
    obtenerPersonaje(i)
}

// se inician los request en este orden pero no se saben en cual llegan
// obtenerPersonaje(1)
// obtenerPersonaje(2)
// obtenerPersonaje(3)
