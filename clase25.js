class Person 
{
    constructor(name,lastName,age, heigth)
    {
        this.name = name
        this.lastName = lastName
        this.age = age
        this.heigth = heigth
    }

    greet() 
    {
        console.log(`Hi, my name is ${this.name} ${this.lastName}, and i have ${this.age} years old and measure ${this.heigth} mts`)
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
    greet()
    {
        console.log(`Hola, me llamo ${this.name} ${this.lastName} y soy desarrollador/a`)
    }
}
    console.log('Second test run')