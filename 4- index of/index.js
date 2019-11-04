// given a string, print the second occurance of the letter "t"; letter case does not matter

// function myFunction() {
//     var str = "this is my test string!";
//     var n = str.indexOf("t");
//     var times = 0;
//     index = null;

//     while (times < n && index !== -1) {
//         index = str.indexOf(str);
//         times++;
//     }
//     document.getElementById("demo").innerHTML = n;
//     return index;
// }

var sentence = "this is my test string!";

var searchTerm = "t";
var indexOfFirst = sentence.indexOf(searchTerm);

console.log("the index of the search term " + searchTerm + " from the beginning is " + indexOfFirst);
// expected output is 0

console.log("the index of the 2nd occurrence of the search term " + searchTerm + " is " + sentence.indexOf(searchTerm, (indexOfFirst + 1)));
// expected output is 11 (start at position 0, and spaces count for 1);


   

