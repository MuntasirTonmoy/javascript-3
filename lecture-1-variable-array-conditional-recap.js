//* variable
//* variabe name should be specific like bottleColor not color cause color isn't specific

var bottleColor = 'yellow'; // as it's a string we have to put it in quote mark.
var waterQuantity = 1;
var isfull = false;

//* array

var items = ['bottle', 'mug', 'paper', 'pen'];
console.log(items.length);         // can know the array length.
items.indexOf('bottle');          // can know the index of the array 
//! index starts with 0 and if any element isn't in the array the output will be -1
items.push('pencil');           // can add element in the end of the array
items.pop();                   // remove the last element of the array
items.shift();                // remove the first element of the array
items.unshift('chalk');      // add an element in the start of array
console.log(items);


//* conditional

if (items.length > 5) {
    console.log('You have too many stuff');
}
else if (items.length == 4) {
    console.log('Your desk is ok.');
}
else {
    console.log('Your desk is fine.');
}




