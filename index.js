/* Questions no.1: Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0 */

/* function paperwork(n, m) {
    if (n < 0 || m < 0) {
      return 0;
    } else {
      return n * m;
    }
  } */

/* Question 2:    The code provided is supposed replace all the dots . in the specified String str with dashes - 
                  But it's not working properly. */
/*   var replaceDots = function(str) {
    return str.replaceAll('.', '-');
  }
  let str1 = replaceDots("one.two.three");
  console.log(str1); */

/* Question 3:  This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning 
correct values. Fix it. */
/* const solve = (x, y) => x / y;
let result = solve(25, 5)
console.log(result); */

/* Question 4:write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
the string should start with a 1. a string with size 6 should return :'101010'.
with size 4 should return : '1010'. with size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers. */
/* function stringy(number){

  let str = '';
  for(i=0; i<number; i++){
      if(i%2 === 0){
          str =  str + '1';
      }else{
          str += '0';
      }
  }
  return str;
} 
let result = stringy(6);
console.log(result); */

/* Question 5: This function should return an object, but it's not doing what's intended. What's wrong? */

/* function mystery() {
  var results =
    {sanity: 'Hello'};

    return results;
} 
let output = mystery();
console.log(output);  */

/* Question 6: Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake. */
/* function greet(name){
  if(name === "Johnny"){
    return "Hello, " + name + " my love!";
  }else{
    return "Hello, " + name;
  }
}
let message = greet("Johnny");
let message1 = greet("Jimmy");
console.log(message);
console.log(message1); */

/* Question 7: This function should return an object, but it's not doing what's intended. What's wrong? */
/* function mystery() {
  var results =
    {sanity: 'Hello'};

    return results;
} 

let output = mystery();
console.log(output);  */

/* Question 8: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.  */
/* function evenOrOdd(number) {
    if(number%2 === 0){
        return 'Even';
    }else{
        return 'Odd';
    } 
}
let result = evenOrOdd(6);
console.log(result); */

/* Question 9: The function is not returning the correct values. Can you figure out why? */

/* function getPlanetName(id){
  let name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
    default:
      name= "Invalid statement";
      break;
  }
  return name;
} 
let receiveName = getPlanetName();
console.log(receiveName); */

/* Question 10: The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again! */

/* function sayHello(name) {
  return 'Hello ' +name;
}
let greet = sayHello("Mr. Ben");
console.log(greet);  */

/* Question 11: While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
The function receives one parameter health which will always be a whole number between -10 and 10. */

/* function checkAlive (health) {
  if (health > 0) {
    return true;
  } else if (health <= 0) {
    return false;
  }
}
console.log(checkAlive()); */

/*Question 12: Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them. */

/* function between(a, b) {
  const array = [];
  for(a=a; a<b+1; a++){
    array.push(a);
  }
  return array;
}
let receives = between(-25,-5);
console.log(receives); */

/* Question 13: Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string. */

/* function fakeBin(str){
    const replaceZero = str.replace(/[0-4]/g, '0');
    const replaceOne = replaceZero.replace(/[5-9]/g, '1');
    return replaceOne;
  }
let recieve = fakeBin('724165843239347');
console.log(recieve); */

/*Question 14:  We need a function that can transform a number (integer) into a string.
What ways of achieving this do you know? */

/* function numberToString(num) {
    let text = num.toString();
    return text;
}
let recieve = numberToString(4);
console.log(recieve);
console.log(typeof recieve); */

/* Question 15: You get an array of numbers, return the sum of all of the positives ones.
    Example [1,-4,7,12] => 1 + 7 + 12 = 20
    Note: if there is nothing to sum, the sum is default to 0. */

/* function positiveSum(arr){
    let sum = 0;
    let check;

    for(let i=0; i<arr.length; i++)
    {
      if(arr[i] <= 0){
        check = false;
      }
      else if(!check){
      sum = sum + arr[i];
      }
    }
    return sum;
}
let arryForSum = [2,2,2,-2,2,3,-10,10,4,-4,5,-5,6];
let receive  = positiveSum(arryForSum);
console.log(receive); */

/* Question 16: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */

/* function removeChar(str){
  if(str.length >= 2){
    return (str.substring(1, str.length-1));
  }
 };
removeChar('eloquent');
removeChar('country');
removeChar('c2');
removeChar(''); */

/* Question 17: Create a method to see whether the string is ALL CAPS. */

/* function uppercase(){
  let str = "JAVA SCRIPT"
  return str === String(str).toUpperCase()
}
console.log(uppercase()); */

/* Question 18: Given a array of strings, return a new array that only includes those that are 5 characters or fewer in length. */

/* const array1 = ["dog", "wolf", "family", "eaten", "computer", "bed", "pen", "song"]

function funcfilter(arr){
    return arr.length < 5;
}
const output = array1.filter(funcfilter);
console.log(output); */

/* Question 19: given an array of people objects, return a new array that has filtered out all those who don't belong to the club. */

/* const array = [
  {name: "Paris hilten", member: true},
  {name: "Brad Pitt", member: false},
  {name: "Iron Man", member: true},
  {name: "Simsons", member: false},
]

function clubPeople(arr){
  return arr.member === false;
}

const output = array.filter(clubPeople);
console.log(output); */

/* Question 20: calculate and print the sum of an array of numbers using forEach method  */

/* const numbers = [10,20,30,40,50]
let sum = 0;
numbers.forEach(function(number){
        sum += number;
})
console.log(sum); */

/* const numbers = [10,20,30,40,50];
let square = 0;
numbers.forEach(function(number){
        square *= number;
})
console.log(square); */

/* Question 21: create a new array containing each number of squared using 'forEach'.  */

/* const array1 = [ 22, 56, 11, 90, 20];
let squaredArray = [];

array1.forEach(function(array){
  squaredArray.push(array * array)
});
console.log(squaredArray); */

/* Question 22: create a new array of strings, using 'forEach' count the number of times a specific string appears.  */
/* const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'orange', 'orange', 'orange'];

let fruitCount = 0;
fruits.forEach(function(ele){
  if(ele === 'orange'){
    fruitCount++;
  }
});
console.log(fruitCount); */

/* Question 22: using 'forEach' count every element in array how many times it appears.  */
/* const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'orange', 'orange', 'orange'];

const fruitCounts = {};

fruits.forEach(function(fruit) {
  if (fruitCounts[fruit]) {
    fruitCounts[fruit]++;
  } else {
    fruitCounts[fruit] = 1;
  }
});
console.log(fruitCounts); */

/* Question 23: using 'forEach' calculate the area and store into another array.  */
/* var images = [
  {height: 10, width: 30},
  {height: 20, width: 90},
  {height: 54, width: 32},
];
var areas = [];

images.forEach(function(image){
  areas.push(image.height * image.width)
});

console.log(areas); */

/* Question 24: White a function that takes an array of numbers as input and filters out all the even number using 'forEach'. The filtered
numbers should be stored in a array. */

/* let Array1 = [ 12,3,18,2,7,13,19,20 ];

let evenArray = [];

Array1.forEach(function(array){
  if(array%2==0){
    evenArray.push(array)
  }
});
console.log(evenArray); */

/* Question 25: White a function that takes an array of numbers as input and filters out all the even number using 'filter'.*/

/* let Array1 = [12, 3, 18, 2, 7, 16, 4, 13, 19, 20];

let filtered = Array1.filter(function (array) {
  return array % 2 === 0;
});
console.log(filtered); */

/* Question 26: For given array with prices of 5 items {250, 645, 300, 900, 50}. All items have am offer of 10% off on them
Change the array to store final price after applying offer. */

/*let items = [250, 645, 300, 900, 50];
 let i = 0;
console.log(items);
for (let val of items) {
  let offer = val / 10;
  items[i] = items[i] - offer;
  console.log(`value after offer = ${items[i]}`);
  i++;
} */

/* Question 27: create an array to store companies "bloomberg", "microsoft", "uber", "google", "IBM", "netflix", and perform following tasks on it
-remove first company from array
-remove uber and add ola in its place
-add amazon at the end */

/* let companies = ["Bloomberg", "Microsoft", "Uber", "google", "IBM", "netflix"];
companies.shift(0);
companies.push("Amazon");
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies); */

/* Question 28: Write a function that takes an integer minutes in prompt and converts it into seconds. */

/* let min = prompt("enter minutes");
function seconds(min) {
  return min * 60;
}
let result = seconds(min);
console.log("There are " + result + " seconds in " + min + " minutes"); */

/* Question 29: Write an arrow function that takes an integer as an arguement and return the next number of it. */

/* const arrowfunc = (num) => {
  console.log(++num);
};
arrowfunc(99); */


/* Question 30: Create a function that takes the age in years and returns the age in days. */
/* const arrAgeCount = (age = 18) => {
  return age * 365;
};
let ageInDays = arrAgeCount(18);
console.log(ageInDays); */


/* Question 31: create a function that takes an array containing only numbers and return the first element.  */
/* const arrfunc = (arr) => {
  return arr[0];
};

let index = arrfunc([80, 100, -606]);
console.log(index); */


/* Question 32: create a function that takes takes voltage and current and returns the calculated power. */
const calcPower = (voltage, current) => {
  return voltage * current;
};
let power = calcPower(480, 20);
console.log(power);