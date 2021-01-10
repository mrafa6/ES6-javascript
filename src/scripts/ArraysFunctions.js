const student = [
    { id: 101, name: 'Ramesh', score: 78, color: 'blue', house: 'Aravali' },
    { id: 102, name: 'Suresh', score: 88, color: 'green', house: 'Nilgiri' },
    { id: 103, name: 'Virat', score: 55, color: 'green', house: 'Udaygiri' },
    { id: 104, name: 'Goutam', score: 89, color: 'blue', house: 'Udaygiri' },
    { id: 105, name: 'Rajat', score: 48, color: 'red', house: 'Nilgiri' },
    { id: 106, name: 'Seema', score: 92, color: 'yellow', house: 'Aravali' },
    { id: 107, name: 'Sunita', score: 66, color: 'black', house: 'Shivalik' },
    { id: 108, name: 'Anita', score: 75, color: 'white', house: 'Shivalik' }
];

function filterByScore(x) {
    let result = student.filter((s) => s.score > x);
    console.log(result);
    return result;
}
function filterByHouse(h) {
    let result = student.filter((s) => s.house === h);
    console.log(result);
    return result;
}

const someFunction = (x) => {
    let result = student.some((s) => s.score < x);
    console.log(`Some function : if some student has socre less than ${x} -- ${result}`);
}
const everyFunction = (x) => {
    let result = student.every((s) => s.score > x);
    console.log(`Every function : if every student has score greater than ${x} -- ${result}`);
    return result;
}


// You must remember that a reducer will only return one value only hence the name reduce.
/**
 * The arr.reduce() method in JavaScript is used to reduce the array to a single value 
 and executes a provided function for each value of the array(from left - to - right) 
 and the return value of the function is stored in an accumulator.
 syntax -- array.reduce( function(total, currentValue, currentIndex, arr), initialValue )
 
 function(total, currentValue, index, arr): It is the required parameter and used to run for each element of array. It contains four parameter which are listed below:
total: It is required parameter and used to specify the initialValue, or the previously returned value of the function.
currentValue: It is required parameter and used to specify the value of the current element.
currentIndex: It is optional parameter and used to specify the array index of the current element.
arr: It is optional parameter and used to specify the array object the current element belongs to.
initialValue: It is optional parameter and used to specify the value to be passed to the function as the initial value.*/ 
const numArray = [2, 3, 5, 7, 9, 11, 23, 45, 67, 78];
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function reduceFunction(initialValue) {
    let result = numArray.reduce((accumulator, currentValue, currentIndex, arr) => accumulator + currentValue, initialValue);
    console.log(`Reduce function result - ${result}`);
}

reduceFunction(100);
someFunction(35);
everyFunction(60);
filterByScore(75);
filterByHouse('Aravali');


