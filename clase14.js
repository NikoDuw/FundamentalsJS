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

const INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365


const aumentarDePeso = (pesona) => pesona.peso += INCREMENTO_PESO
const adelgazar = (pesona) => pesona.peso -= INCREMENTO_PESO

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META =nicolas.peso -3
const META1 =berthold.peso -3
var dias = 0

while (nicolas.peso > META || berthold.peso > META1) 
{
    // aumenta de peso
    if (comeMucho()) 
    {
        aumentarDePeso(nicolas)
        aumentarDePeso(berthold)
    }
    // adelagazar
    if (realizaDeporte()) 
    {
        adelgazar(nicolas)
        adelgazar(berthold)
    }
    dias += 1
}

console.log(`pasaron ${dias} días hasta que ${berthold.nombre} adelgazó 3 Kg`);
console.log(`pasaron ${dias} días hasta que ${nicolas.nombre}  adelgazó 3 Kg`);