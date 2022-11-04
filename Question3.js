// Question : Do the below programs in arrow functions.

// a: Print odd numbers in an array
let oddNumber = (arr) => {
    for (let i = 0; i < arr.length; i++) { // itrating throw the array
        if (arr[i] % 2 != 0) { // check the element is odd or not 
            console.log(arr[i]); // print the odd element of an array 
        }
    }
}
arr = [1, 2, 32, 24, 55, 34, 67, 34];
oddNumber(arr)
    // output:
    // 1
    // 55
    // 67

// -----------------------------------------------------------------------------------------------------------------
// b: Convert all the strings to title caps in a string array
let titleCaps = (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); //convert a text in to title Caps
}
console.log(titleCaps('javaScript')); // call the function and print the output
// output:
// Javascript

// -----------------------------------------------------------------------------------------------------------------
// c: Sum of all numbers in an array
let add = (array) => {
    let sum = 0; // declaring the sum variable to store the sum of element of array
    array.forEach(element => { // itrate the array 
        sum += element; // addition the elements of the array 
    });
    return sum;
}
console.log(add(arr));
// output:
// 249

// -----------------------------------------------------------------------------------------------------------------
// d: Return all the prime numbers in an array
let primeNumbers = (array) => {
    let flag = false;
    let n = array.length;
    for (let j = 0; j < n; j++) {
        // if the element of array is lies between 0 to 10
        // it convert flag form false to true
        if (array[j] === 1)
            flag = true;
        else if (array[j] === 3)
            flag = true;
        else if (array[j] === 5)
            flag = true;
        else if (array[j] === 7)
            flag = true;
        // if the element of array is gratter than 10 then it
        // search for prime number and if present then 
        // convert flage value true to false
        else if (array[j] > 10) {
            flag = true;
            for (i = 2; i <= array[j] - 1; i++) {
                if (array[j] % i == 0) {
                    flag = false;
                }
            }
        }
        // Check the value of flag and display prime number
        if (flag == true) {
            console.log(array[j]);
            flag = false;
        }
    }
}
let arr1 = [11, 34, 1, 45, 27, 34, 67, 87, 89];
primeNumbers(arr1);
// output:
// 11
// 1
// 67
// 89

// -----------------------------------------------------------------------------------------------------------------
// e : Return all the palindromes in an array
let isPalindrome = (array) => {
    for (let i = 0; i < array.length; i++) {
        // reversed the array[i]
        let num = array[i];
        let rev_num = 0;
        while (num > 0) {
            rev_num = rev_num * 10 + num % 10;
            num = Math.floor(num / 10);
        }

        // Check if rev_num and array[i] are same or not.
        if (rev_num != array[i])
            console.log(array[i]);
    }
}
let arr2 = [121, 234, 232, 45654, 654, 676];
isPalindrome(arr2);
// output:
// 234
// 654