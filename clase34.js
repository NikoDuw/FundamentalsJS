// almacenacmiento de la url a la cual accederemos
const API_URL = 'https://swapi.dev/api/'
// extraccion de la información de la url seccion enfocada
const PEOPLE_URL = 'people/:id'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const options = { croosDomain: true }


function obtenerPersonaje(id, callback)
{
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, options, function (persona)
    {
        console.log(`Hola, yo soy, ${persona.name}`)
        if (callback)
        {
            callback()
        }
    })
}

obtenerPersonaje(1, function()
{
    obtenerPersonaje(2, function()
    {
        obtenerPersonaje(3, function()
        {
            obtenerPersonaje(4, function()
            {
                obtenerPersonaje(5, function()
                {
                    obtenerPersonaje(6, function()
                    {
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})