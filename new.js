//Write a function named calculateAverage. The function should take the array [12, 45, 78, 23] as input and return the average of the numbers.


let arr = [12, 45, 78, 23];

function calculateAverage(array) {
    let s = 0;

    for (let i = 0; i < array.length; i++) {
        s = s + array[i];

    }
    let avg = s / array.length;
    return avg;
}

// let result = calculateAverage(arr);
// console.log(result);


//Write a function named isEven. The function should take the number 34 as input and return "Even" if the number is even, and "Odd" if the number is odd.

let numberCheck = 34;

function isEven(n) {
    if (n % 2 == 0) {
        return "The Number is Even";
    } else {
        return "The Number is odd";
    }
}
// let result = isEven(numberCheck);
// console.log(result);


//Write a function named findMax. The function should take the array [4, 16, 1, 9, 23] as input and return the largest number from the array.

let arrays = [4, 16, 1, 9, 23];

function findMax(arrays) {
    let a = arr[0];
    for (let array of arrays) {

        if (array > a) {
            a = array;
        }


    }

    return a;

}
let result = findMax(arrays);
console.log(result);


//Write a function named concatStrings. The function should take two strings ('Frontend', 'Development') as input and return a single concatenated string.


function concatStrings(a, b) {
    let concatString = a.concat(" ", b);

    return concatString;

}
// let result = concatStrings('Frontend', 'Development');

// console.log(result);


//Write a function named factorial. The function should take the number 6 as input and return the factorial of the number.


function factorial(f) {
    let factorial = 1;


    for (let i = 1; i <= f; i++) {

        factorial = i * factorial;
        console.log(i);





    }

    return factorial;

}

// let result = factorial(6);
// console.log(result);