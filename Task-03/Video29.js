//for-of loop
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(`Number is ${num}`);
}

// Maps
const map = new Map()
map.set('PK', "Pakistan")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


//for-in loop
const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    console.log(`${key} is short for ${myObject[key]}`);
}


//for-each loop
const languages = ["js", "ruby", "java", "python", "cpp"]

languages.forEach( (language) => {
    console.log(language);
} )

languages.forEach( (language, index)=> {
    console.log(language, index);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((lang) => {
    console.log(lang.languageName)
})