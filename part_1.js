// 1. Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

var num = 5;

function sigma(num) {
  var sum = 0;
  for (var i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
sigma(num);

var num = 5;

/* The example below produces the same result by creating and iterating through an array. However, this is not good practice, as it's not the simplest way to achieve the result / is too time complex. Note the value of i after leaving the 1st for loop is 6 (though 6 does not satisfy the for loop's condition, i nevertheless increments to 6) and no longer has reference to the index of the array created. In order to access each index of the array you created, you have to iterate through it again, in this example, using j as the new index...

function sigma(num) {
  var arr = [];
  for (var i = 0; i <= num; i++) {
    arr.push(i);
  }
  var sum = 0;
  for (var j = 0; j<arr.length; j++) {
    sum += arr[j];
  }
  return sum;
}
sigma(num);

*/

// 2. Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

var num = 5;

function factorial(num) {
  var product = 1;
  for (var i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}
factorial(num);

// 3. Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

/* sequence: 0,1,1,2,3,5,8,13,21,34..toExponential
index        0,1,2,3,4,5,6,07,08,09,10 */

n - 1 + n - 2;

var n = 7;

function fibonacci(n) {
  var a = 0;
  var b = 1;
  var c = 1;
  for (var i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return f;
}
fibonacci(n);

/* fibonacci using recursion */

function Fib(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return Fib(n - 2) + Fib(n - 1);
}

n = Fib(5);

console.log(n);

// 4. Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

var arr = [42, true, 4, "Liam", 7];

function secondToLast(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr.length <= 2) {
      return null;
    } else return arr[arr.length - 2];
  }
}
secondToLast(arr);

// 5. Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

var arr = [5, 2, 3, 6, 4, 9, 7];
var n = 3;
function nthToLast(arr, n) {
  for (var i = 0; i < arr.length; i++);
  if (arr.length <= n) {
    return null;
  } else return arr[arr.length - n];
}

nthToLast(arr, n);

// 6. Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

var arr = [3, 2, 9, 8, 7];

function secondLargest(arr) {
  var max = arr[0];
  var max2 = arr[0];
  if (arr.length < 2) {
    return null;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max2 = max;
      max = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
  }
  if (max2 == max) {
    return null;
  }
  return max2;
}
secondLargest(arr);

// 7. Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

// pseudo code: create a for loop that will iterate through the existing array; push all existing elements to the end of the array, then reassign values so they are in order, each element adjacent to its duplicate.
// Step 1: push all elements of the existing array to the end of the array.

var arr = [4, "Ulysses", 42, false];
var x = arr.length;
var temp = 0;
function doubleTrouble(arr, x) {
  for (var i = 0; i < x; i++) {
    arr.push(arr[i]);
    console.log(arr);
  }
}
doubleTrouble(arr, x);

/*

arr.push(arr[0]);

console.log(arr);

arr.push(arr[1]);

console.log(arr);

arr.push(arr[2]);

console.log(arr);

arr.push(arr[3]);

console.log(arr);

[arr[1], arr[arr.length - 4]] = [arr[arr.length - 4], arr[1]];

console.log(arr);

[arr[3], arr[arr.length - 2]] = [arr[arr.length - 2], arr[3]];

console.log(arr);

[arr[5], arr[arr.length]] = [arr[arr.length], arr[5]];

console.log(arr);

????????? */
