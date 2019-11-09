// find the nth interation of the fibonacci sequence
// fibonacci sequence 0, 1, 2, 3, 5, 8, 13, 21, 34

const fib = (num) => {
    // initialize, or save first and second indexes
    var a = 0;
    var b = 1;

    // now store the sum
    var c = 0;

    // iterate until the given number
    for (var i = 2; i <= num; i++) {
        //sum the last two numbers
        c = a + b;
        // assign the last value to the first
        a = b;
        // assign the sum to the last
        b = c;
    }
    // if the num is 0 then return a; else return b;
    return num ? b : a;
}

console.log(fib(10));


// reverse characters in an array
const colors = ["orange", "blue", "yellow", "purple"];
// make a new variable that will hold the reversed items
const reversedColors = colors.reverse();
console.log(reversedColors);