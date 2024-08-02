// Video 17 - Objects Part 02
// Nested Objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = Object.assign({}, obj1, obj2, obj4)      //Method 01 to combine objects
const obj3 = {...obj1, ...obj2, ...obj4}                //Method 02 to combine objects - Spread
console.log(obj3)


// Video 18

const {name: userObjectName} = userObject               //De-Structuring
console.log(userObjectName)