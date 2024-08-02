// Video 19 - Functions

function myName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("S");
}

myName()

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(5, 10)

console.log("Result: ", result);

function loginMessage(username = "Haris"){
    if(!username){
        console.log("Enter Username");
        return
    }
    return `${username} logged in`
}

console.log(loginMessage("Haris again"))