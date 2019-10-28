// given a string, print the second occurance of the letter "t"; letter case does not matter

function myFunction() {
    var str = "this is my test string!";
    var n = str.indexOf("t");
    var times = 0;
    index = null;

    while (times < n && index !== -1) {
        index = str.indexOf(str);
        times++;
    }
    document.getElementById("demo").innerHTML = n;
    return index;
}

