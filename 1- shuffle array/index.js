// shuffle an array using the fisher-yates model
function shuffle(array) {
    let counter = array.length;

    //while there are elements in the array
    while (counter > 0) {
        //pick a random index
        let index = Math.floor(Math.random() * counter);

        //decrease counter by 1
        counter--;

        //now swap the last element in the array with the counter. Meaning, take the thing you just found and put it in last place
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

// how to find duplicates in an array
function findDups(array1) {
    var object = {};
    var result = [];

    array1.forEach(function (item) {
        if(!object[item])
        object[item] = 0;
        object[item] += 1;
    })
    
    for (var prop in object) {
        if (object[prop] >= 2) {
            result.push(prop);
        }
    }
    return result;
}

console.log(findDups([1, 3, 1, 4, 5, 4, 6, 6, 7, 3]));

// alternate way to find duplicates in an array
var method2 = function(a) {
    var counts = [];
    for(var i = 0; i <= a.length; i++) {
        if(counts[a[i]] === undefined) {
            counts[a[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}
