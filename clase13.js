var nicolas =
{
    nombre: 'Nicolas',
    apellido: 'Dussan',
    edad: 27,
    peso: 75 
}

var berthold =
{
    nombre: 'Berthold',
    apellido: 'Molina',
    edad: 17,
    peso: 77
}

console.log(`Al inicio del año ${nicolas.nombre} pesaba ${nicolas.peso} Kg`);
console.log(`Al inicio del año ${berthold.nombre} pesaba ${berthold.peso} Kg`);


// function aumentarDePeso(persona)
    // {
        // return persona.peso +=200
    // }

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365


const aumentarDePeso = (pesona) => pesona.peso += INCREMENTO_PESO
const adelgazar = (pesona) => pesona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_AÑO;  i++ )
{
    var random = Math.random()
    if (random < 0.25) 
    // Aumenta de peso
    {
        aumentarDePeso(nicolas)
        aumentarDePeso(berthold)
    }
    else if (random < 0.5)
    // disminuye de peso
    {
        adelgazar(nicolas)
        adelgazar(berthold)
    }
}


console.log(`Al final del año ${nicolas.nombre} pesa ${nicolas.peso.toFixed(1)} Kg`);
console.log(`Al final del año ${berthold.nombre} pesa ${berthold.peso.toFixed(1)} Kg`);
