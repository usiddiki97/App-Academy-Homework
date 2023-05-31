// PHASE 1

function madLib(verb, adjective, noun) {
    console.log(`We shall ${verb.toUpperCase()} the ${(adjective +" " + noun).toUpperCase()}.`);
}

// madLib('make', 'best', 'guac');

function isSubstring(searchString, subString) {
    return searchString.includes(subString);
}

// isSubstring("time to program", "time");
// isSubstring("Jump for joy", "joys");

// PHASE 2

function fizzBuzz(array) {
    const fizzBuzzArr = [];

    array.forEach((el) => {
        if ((el % 3 === 0) ^ (el % 5 === 0)) {
            fizzBuzzArr.push(el);
        }
    });
    return fizzBuzzArr;
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfNPrimes(n) {
    let sum = 0;
    let primeCount = 0;
    let i = 2;
    
    while (primeCount < n) {
        if (isPrime(i)) {
            sum += i;
            primeCount ++;
        }
        i++;
    }
    return sum;
}