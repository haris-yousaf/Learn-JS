// For Loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
}

//Nested For Loop
for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}:`);
   for (let j = 1; j <= 10; j++) {
    console.log(i + '*' + j + ' = ' + i*j );
   }   
}

// Break is used to exit the loop once condition is true
// Continue is used to skip the condition it is applied on then continues the loop