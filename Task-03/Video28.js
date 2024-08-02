// While Loop
let myArray = ['flash', 'batman', 'superman']

let arr = 0
while (arr < myArray.length) {
    console.log(`Superhero ${arr} is ${myArray[arr]}`);
    arr = arr + 1
}

// Do-While
let score = 1

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);