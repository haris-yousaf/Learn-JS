const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const user = {
    name: 'Haris',
    age: 22,
    isHuman: true,

    wrong: function(){
        console.log("This is wrong");
    }
}

console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, 'name', {
    // writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(user, "name"));

for (let [key, value] of Object.entries(user)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}