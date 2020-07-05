class Person 
{
    constructor(name,lastName,age, heigth)
    {
        this.name = name
        this.lastName = lastName
        this.age = age
        this.heigth = heigth
    }

    greet(fn) 
    {
        var { name, lastName, age, heigth } = this

        console.log(`Hi, my name is ${name} ${lastName}, and i have ${age} years old and measure ${heigth} mts`)
        if (fn)
        {
            fn(name, lastName)
        }
    }

    soyAlto()
    {
        return this.heigth > 1.70
    }
}
    console.log('Test run')

class Developer extends Person
{
    constructor(name, lastName, age, heigth)
    {
        super(name, lastName, age, heigth)
    }
    greet(fn)
    {
        // var name = this.name
        // var lastName = this.lastName
        var { name, lastName } = this
        
        console.log(`Hola, me llamo ${name} ${lastName} y soy desarrollador/a`)
        if (fn)
        {
            fn(name, lastName, true)
        }
    }
}
    console.log('Second test run')

function answerGreeting(name, lastName, isDev) 
{
    console.log(`Good day ${name} ${lastName}`)
    if (isDev) 
    {
        console.log(`I didn't know you were a developer`) 
    }
}

var nicolas = new Person('Nicolás', 'Dussán', 27, 1.78)
var tatiana = new Person('Tatiana', 'Ramirez', 23, 1.65)
var sophya  = new Developer('Sophya', 'Dussán Ramirez',0, 1.69)

nicolas.greet()
tatiana.greet(answerGreeting)
sophya.greet(answerGreeting)

nicolas.soyAlto()
tatiana.soyAlto()
sophya.soyAlto()