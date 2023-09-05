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



/* Question 3:  This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it. */

  const solve = (x, y) => x / y;
let result = solve(25, 5)
console.log(result);
