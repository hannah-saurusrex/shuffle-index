const fruits = [
    "apple",
    "banana",
    "watermelon",
    "orange",
    "apple",
    "orange",
    "grape",
    "apple"
];

// remove duplicates first option
const uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits);

//OR you can do it with the spread operator
const uniqueFruits2 = [...new Set(fruits)];
console.log(uniqueFruits2);

//replace a specific index value in an array
fruits.splice(0, 2, "potato", "tomato");
console.log(fruits);



const friends = [
    { name: "John", age: 22 },
    { name: "Peter", age: 23 },
    { name: "Colin", age: 31},
    { name: "Mark", age: 24 },
    { name: "Maria", age: 22 },
    { name: "Monica", age: 21 },
    { name: "Martha", age: 19 },
];

//instead of .map(), use Array.from() to get the names out of the array
const friendsNames = Array.from(friends, ({name}) => name);
console.log(friendsNames);

const friendsAges = Array.from(friends, ({age}) => age);
console.log(friendsAges);

// empty an array
// friends.length = 0;
// console.log(friends);

//convert an array to an object
const fruitsObj = { ...fruits };
console.log(fruitsObj);

//fill an array with data
const newArray = new Array(10).fill("Hannah");
console.log(newArray);

//merge arrays together
const fruity = ["banana", "orange", "apple", "necterine", "avocado"];
const vegetables = ["squash", "brussels sprouts", "onion", "carrot", "celery"];
const meat = ["pork", "beef", "chicken"];

const food = [...fruity, ...vegetables, ...meat];
console.log(food);

//find duplicate values in two arrays
const firstArray = [0, 2, 4, 6, 8, 10, 12];
const secondArray = [0, 2, 3, 5, 6, 7, 8, 10];

const duplicates = [...new Set(firstArray)].filter(item => secondArray.includes(item));
console.log(duplicates);

//remove false values from an array
const falsyArray = [0, "blue", "", NaN, 9, "true", undefined, true, "white", false];
const trueArray = falsyArray.filter(Boolean);
console.log(trueArray);

//get random values from an array
const colors = ["blue", "orange", "yellow", "purple", "red", "green"];
const randColors = colors[(Math.floor(Math.random() * (colors.length)))];
console.log(randColors);

//shuffle the above colors array
function shufflle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // while there are still values, shuffle
    while (0 !== currentIndex) {
        
        //pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        //now swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}