function Persona(nombre,apellido,edad, altura)
{
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura

    console.log('prueba de ejecucion');
}

// dentro del prototipo de persona va a existir un atributo saludar que va a ser una función
Persona.prototype.saludar = function ()
{
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
}

Persona.prototype.soyAlto = function ()
{
    if (this.altura >=1.70)
    {
        console.log('Soy alto');
    }
    else
    {
        console.log('No soy alta');
    }
}

// la palabra new seguida del prototipo(new Persona) logra que se cree un nuevo objeto
var nicolas = new Persona('Nicolás', 'Dussán', 27, 1.78)
var tatiana = new Persona('Tatiana', 'Ramirez', 23, 1.65)
var sophya = new Persona('Sophya', 'Dussán Ramirez',0, 1.69)


nicolas.saludar()
tatiana.saludar()
sophya.saludar()

nicolas.soyAlto()
tatiana.soyAlto()
sophya.soyAlto()