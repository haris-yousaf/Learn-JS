// Filter
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = Numbers.filter( (num) => {
    return num > 4
} )
console.log(newNumbers)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let myBooks = books.filter( (book) => book.genre === 'History')

  myBooks = books.filter( (book) => { 
    return book.publish >= 1995 && book.genre === "History"
})
console.log(myBooks);


//Map
const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = Nums.map( (num) => { return num + 10})
console.log(newNums)

const newNums2 = Nums
                .map((num) => num * 10 )
                .map( (num) => num + 1)                     //Chaining
                .filter( (num) => num >= 40)

console.log(newNums2);


// Reduce
const values = [1, 2, 3]

const Total = values.reduce(function (accumulator, currentValue) {
    console.log(`accumulator = ${accumulator} and currentValue = ${currentValue}`);
    return accumulator + currentValue
}, 0)
// const Total = values.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)   // Short-hand Reduce Method

console.log(Total)

const shoppingCart = [
    {
        item: "js course",
        price: 2999
    },
    {
        item: "py course",
        price: 999
    },
    {
        item: "mobile dev course",
        price: 5999
    },
    {
        item: "data science course",
        price: 12999
    },
]

const bill = shoppingCart.reduce((acc, total) => acc + total.price, 0)

console.log(bill);