let ages = [3, 9, 23, 64, 2, 8, 28, 93, 37];
    console.log("1) ages: " + ages);

let lastElement = ages[ages.length - 1];

console.log("1.a,b) last element minus first element: " + (lastElement - ages[0]));


let sum = ages.reduce (function(accumulator, currentValue){
    return accumulator + currentValue;
    for (let i = 0; i < ages.length; i++);
});
console.log("1.c) average age: " + sum / ages.length);

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let lengths = names.map(function(element) {
    return element.length;
});

let total = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}); 
console.log("2.a) average length of names: " + total / names.length);

console.log("2.b) " + names.join(' '));

let nameLengths = [];

names.forEach(element => {
    nameLengths.push(element.length);
})
console.log("5) name lengths: " + nameLengths);

let sumOfNameLengths = nameLengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log("6) sum of name lengths: " + sumOfNameLengths);

function repeatString(word,n){
  console.log( "7) " + word.repeat(n));
}
  repeatString("Hello", 3);

  function createFullName (firstName, lastName){
      console.log("8) " + firstName + ' ' + lastName);
  }
  createFullName("Kathryn", "Butler");

  let numbers = [4, 10, 23, 15, 64];
  
  let sumOfNumbers = numbers.reduce (function(accumulator, currentValue){
    return accumulator + currentValue;
});

if (sumOfNumbers > 100) {
    console.log("9) True");
} else {
    console.log("9) False");
}

console.log("10) " + sumOfNumbers / numbers.length);

let newNumbers = [8, 22, 17, 5, 71];

let newSumOfNumbers = newNumbers.reduce (function(accumulator, currentValue){
    return accumulator + currentValue;
});

newSumOfNumbers / newNumbers.length;

if (sumOfNumbers > newSumOfNumbers) {
    console.log ("11) True");
} else {
    console.log ("11) False");
}


function willBuyDrink (isHotOutside , moneyInPocket) {
    if ((isHotOutside = true) && (moneyInPocket > 10.5)) {
        console.log ("12) willBuyDrink = True");
    } else {
        console.log ("12) willBuyDrink = False");
    }
}
willBuyDrink (true, 11);


var groceryList = ["bread", "bananas"];

function addToGroceryList(item) {
    groceryList.push(item);
}

function removeFromGroceryList(item) {
    for (var i=0; i<= groceryList.length; i++) {
        if (groceryList[i] ===item) groceryList.splice(i,1);
    }
}

addToGroceryList ("milk");
addToGroceryList ("pasta");
addToGroceryList ("sauce");
removeFromGroceryList ("bread");

console.log("13) Grocery List: " + groceryList);

//The functions add or remove items from the grocery list so you can keep track of what you need.