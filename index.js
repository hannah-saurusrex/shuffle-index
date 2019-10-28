var array = ['1','2','3','4','5','6','7','8','9'];

function shuffle(array) {
    let counter = array.length;

    //while there are elements in the array
    while (counter > 0) {
        //pick a random index
        let index = Math.floor(Math.random() * counter);

        //decrease counter by 1
        counter--;

        //now swap the last element in the array with the counter
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

console.log(shuffle);
