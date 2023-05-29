"use strict";

function soundMaker(sound, times) {

    // closure
    // whenever we define a function, we have access to 3 levels of scope:
    // 1) arguments passed into the function itself
    // 2) variables defined within the function
    // 3) has access to any variables declared when function is defined,
    // these variables are called free variables, and makeSound captures it
    function makeSound() {
        console.log(`${sound}`);
    }

    for(let i = 0; i < times; i++) {
        makeSound()
    }
}

// soundMaker("woof" , 5);


function summation(arr) {
    let sum = 1;

    // closure, because it captures the arr and sum free variable when it was
    // defined
    function summer(){
        for(let i = 0; i < arr.length; i++) {
            sum *= arr[i];
        }
    }

    summer();
    return sum;
}

// console.log(summation([1,2,3,4,])); 

let callback = function() {
    console.log("It has been 5 seconds!");
};

let timeToWait = 5000; // milliseconds

// global.setTimeout(callback, timeToWait in milliseconds)
// global.setTimeout(function () {
//     console.log("It has been 5 seconds!");
// }, 5000);
// ^ this is ES5 syntax

// ES6:
global.setTimeout(() => {
    console.log("It has been 5 seconds!")
}, 5000);
// ^^ preferred syntax