// almacenacmiento de la url a la cual accederemos
const API_URL = 'https://swapi.dev/api/'
// extraccion de la información de la url seccion enfocada
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const options = { croosDomain: true }

const onPeopleResponse = function (persona)
{
    console.log(`Hola, yo soy, ${persona.name}`)
}

$.get(lukeUrl, options, onPeopleResponse)