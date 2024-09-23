//problem -1


let fruits = ["apple", "banana", "cherry"];

// console.log(fruits.toString());

//problem--2


let arrElement = [10, 20, 30, 40, 50];

// console.log("Third element is ",
//     arrElement[2]);

//problem--3


let color = ["red", "green", "blue"];

// console.log(color.join("-"));

//problem--4


let numArray = [1, 2, 3, 4, 5];

// console.log(numArray);

numArray.pop();
// console.log("remove last element",
//     numArray);


//problem--5

let fruitsArray = ["apple", "banana"];

// console.log(fruitsArray);
fruitsArray.push("grape");

// console.log("add new element in the last :",
//     fruitsArray);

//problem--6


let vehicle = ["car", "bike", "bus"];

// console.log(vehicle);

vehicle.shift();

// console.log("remove first element :", vehicle);

//problem--7


let waterVehicle = ["boat", "ship"];

// console.log(waterVehicle);


waterVehicle.unshift("plane");
waterVehicle.unshift("train");
// console.log(waterVehicle);

//problem--8

let animal = ["dog", "cat", "bird"];

// console.log(animal);

animal.splice(1, 1);

// console.log(animal);


// problem--9


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// console.log("Merge two array ", arr1.concat(arr2));


// problem--10

let array = ["a", "b", "c", "d", "e", "f"];

// console.log(array);

array.splice(2, 3);

// console.log(array);

// problem--11

let number = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "nineth"];
// console.log(number);

// console.log("index 4 is ",
//     number[3]);


// problem--12


let longString = "apple banana cherry  date Apple Banana Cherry Date Elderberry fennel Fig Grape Honeydew Kiwi"

// console.log(longString.indexOf("fennel"));


// problem--13

let fruitsList = ["apple", "banana", "cherry", "date", "fig"];

// console.log(fruitsList);
fruitsList.pop();
fruitsList.pop();
// console.log("After removing last two element :",
//     fruitsList);

//problem--14


let animalList = ["dog", "cat", "fish", "bird"];

// console.log(animalList);
let newString = animalList.toString();

// console.log("Array to String ", newString);

//problem--15


let newFruits = ["apple", "orange", "banana", "grape"];

// console.log(newFruits);

let newFruitsList = newFruits.join(" - ");
// console.log("New Fruits List", newFruitsList);


//problem--16

let arrayLetter = ["b", "c", "d"];

// console.log(arrayLetter);
arrayLetter.unshift("a", "b", "c");
// console.log(arrayLetter);


// problem--17


let numberArray = [1, 2, 3, 4, 5];

// console.log(numberArray);

delete numberArray[3]

// console.log(numberArray);


//problem--18

let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6];

let newConcatArray = arrOne.concat(arrTwo);
let element = newConcatArray.slice(0, 4);
// console.log(element);

//problem--19

let letterArray = ["a", "b", "c", "d", "e"];

// console.log(letterArray);
delete letterArray[1];
delete letterArray[2];
// console.log(letterArray);
letterArray[1] = "x";
letterArray[2] = "y";
// console.log(letterArray);

// problem--20

let arrayHave = [10, 20, 30, 40, 50];

// console.log(arrayHave);


let arrayNew = arrayHave.slice(1, 4);

// console.log(arrayNew);






// problem--21

let numberArrayList = [1, 2, 3, 4, 5];
let makeString = numberArrayList.join();
// console.log(makeString);

let arrayNumber = makeString.split();
// console.log(arrayNumber);

//problem--22


let arrayPrint = ["a", "b", "c", "d", "e", "f"];

console.log(arrayPrint);
console.log("First Element of an Array : ", arrayPrint.at(0));
console.log("Last Element of an Array : ", arrayPrint.at(5));