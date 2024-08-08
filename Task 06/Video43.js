//        OBJECTS         //

function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, age){
    this.username = username
    this.age = age
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Age is ${this.age}`);
}

const Haris = new createUser("Haris", 25)
const Yousaf = createUser("Yousaf", 20)

Haris.printMe()



//        PROTOTYPING         //

// let myName = "haris     "
// let myField = "SE     "

// console.log(myName.trueLength);


let myHeros = ["ironman", "spiderman"]


let heroPower = {
    ironman: "suit",
    spiderman: "webs",

    getSpiderPower: function(){
        console.log(`Spidermans' power is ${this.spiderman}`);
    }
}

Object.prototype.haris = function(){
    console.log(`Haris is present in all objects`);
}

Array.prototype.haris2 = function(){
    console.log(`Haris2 says hello`);
}

// heroPower.haris()
// myHeros.haris()
// myHeros.haris2()
// heroPower.haris2()


// Inheritance

const User = {
    name: "Haris",
    email: "harisy260.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Another Haris     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()