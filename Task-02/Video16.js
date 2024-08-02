const symb = Symbol("key1")
const userObject = {
    "name": "Haris",
    [symb]: "A symbol value", //How to use symbol datatype
    "age": 22,
    "email": "harisyousaf@gmail.com"
}

console.log(userObject.email)
console.log(userObject[symb])

userObject.greetings = function(){
    console.log(`Hello ${this.name}`)
}

console.log(userObject.greetings())