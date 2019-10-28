// get a random integer from 1-10
const num = Math.ceil(Math.random() * 10);
console.log(num);

const gnum = prompt("Guess a number between 1 & 10");
if (gnum == num) {
    console.log("matched!")
} else {
    console.log("Sorry, the number was " + gnum);
}
