// Video 20

function calculateCartPrice(...num1){                       //Rest
    return num1
}

console.log(calculateCartPrice(100, 200, 300, 400))

const user = {
    username: "Haris",
    price: 500
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));