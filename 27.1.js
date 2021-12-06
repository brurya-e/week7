// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.

// const greaterThanTen = (number) => {
//     return new Promise((resolve, reject) => {
//         if (number > 10)
//             resolve();
//         else    
//             reject();

//     });
// };

// greaterThanTen().then(() => {
//     console.log("greater Than Ten");
// })
// greaterThanTen().catch(() => {
//         console.log(" not greater Than Ten");
// });


// greaterThanTen(12);



const func = (number = 2) =>{
    return new Promise((resolve,reject)=>{
        if (number > 10)
        resolve();
        else
        reject();
    });
}
func(number = 2)
.then(() => {
    console.log("greater");
})
.catch(() => {
        console.log("not greater");
});

