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

