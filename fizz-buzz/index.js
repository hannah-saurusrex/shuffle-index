//fizz buzz

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else if ( 1 % 3 === 0) {
        console.log("fizz");
    } else {
        console.log(i);
    }
}