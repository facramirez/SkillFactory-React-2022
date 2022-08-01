// alert("Hola, estás en la web");

const myFirstVariable = "Hello World";
const numberAsString = "5";
const numberAsNumber = 5;
const boolean = true; //true or false
const nullValue = null;
const undefinedValue = undefined;

console.log(myFirstVariable);
console.log(numberAsNumber);
console.log(typeof myFirstVariable);
console.log(typeof numberAsString);
console.log(typeof numberAsNumber);
console.log(typeof boolean);
console.log(typeof nullValue);
console.log(typeof undefinedValue);

const myFirstArray = [1, 2, 3, 4, 5];
const mySecondArray = ["a", "b", "c", "d", "e"];

console.log(myFirstArray.length);
console.log(mySecondArray);

const lengthOfFirstArray = myFirstArray.length;
console.log(lengthOfFirstArray);

const myFirstObject = {
    name: "Juan",
    age: 30,
    isMarried: false,
};

console.log(typeof myFirstArray);
console.log(Array.isArray(myFirstArray)); //True
console.log(typeof myFirstObject);
console.log(Array.isArray(myFirstObject)); //False
console.log(myFirstObject);

console.log("Acá mostramos el objeto", myFirstObject);

console.log("Acá mostramos el array", myFirstArray);

const theObject = {
    name: "Tomi",
};
