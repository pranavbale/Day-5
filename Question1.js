// Question : Do the below programs in anonymous function & IIFE


// a: Print odd numbers in an array
// anonymous function
let oddNumber = function(arr) {
    for (let i = 0; i < arr.length; i++) { // itrating throw the array
        if (arr[i] % 2 != 0) { // check the element is odd or not
            console.log(arr[i]); // print the odd element of an array
        }
    }
}
let arr = [1, 2, 32, 24, 55, 34, 67, 34];
oddNumber(arr)
    // output :
    // 1
    // 55
    // 67

// IIFE function
(function(arr) {
    for (let i = 0; i < arr.length; i++) { // ltrating throw the array
        if (arr[i] % 2 != 0) { // check the element is odd or not
            console.log(arr[i]); // print the odd element of an array
        }
    }
}(arr));
// output:
// 1
// 55
// 67

// -----------------------------------------------------------------------------------------------------------------
// b: Convert all the strings to title caps in a string array
// anonymous function
let titleCaps = function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); //convert a text in to title Caps
}
console.log(titleCaps('javaScript')); // call the function and print the output
// output:
// Javascript

// IIFE function
(function(txt) {
    let str = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    console.log(str);
}('javaScript'));
// output:
// Javascript

// -----------------------------------------------------------------------------------------------------------------
// c: Sum of all numbers in an array
// anonymous function
let add = function(array) {
    let sum = 0; // declaring the sum variable to store the sum of element of array
    array.forEach(element => { // itrate the array
        sum += element; // addition the elements of the array
    });
    return sum;
}
console.log(add(arr));
// output:
// 249

//IIFE function
(function(array) {
    let sum = 0; //declaring the sum variable to store the sum of element of array
    array.forEach(element => { // itrating the array
        sum += element; // addition of element of an array
    });
    console.log(sum); // print the addition of the element of array
}(arr));
// output:
// 249

// -----------------------------------------------------------------------------------------------------------------
// d: Return all the prime numbers in an array
// anonymous function
let primeNumbers = function(array) {
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

//IIFE function
(function(array) {
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
}(arr1));
// output:
// 11
// 1
// 67
// 89

// -----------------------------------------------------------------------------------------------------------------
// e : Return all the palindromes in an array
// anonymous function
let isPalindrome = function(array) {
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

// IIFE function
(function(array) {
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
}(arr2));
// output:
// 234
// 654

// -----------------------------------------------------------------------------------------------------------------
// f: Return median of two sorted arrays of the same size.
// anonymous function
let median = function(arr1, arr2) {
    //Sort the array
    let arr = [...arr1, ...arr2].sort((a, b) => a - b);
    //Get the floor value
    let half = arr.length / 2 | 0;
    //If odd then return middle element
    if (arr.length % 2) return arr[half];
    //If even then return the average of two mid elements
    return (arr[half] + arr[half - 1]) / 2;
}
let arr3 = [1, 12, 15, 26, 38];
let arr4 = [2, 13, 17, 30, 45];
let med = median(arr3, arr4);
console.log(med);
// output:
// 16

// IIFE function
(function(arr1, arr2) {
    //Sort the array
    let arr = [...arr1, ...arr2].sort((a, b) => a - b);
    //Get the floor valueṇ
    let half = arr.length / 2 | 0;
    //If odd then return middle element
    if (arr.length % 2) {
        console.log(arr[half]);
    }
    //If even then return the average of two mid elements
    else {
        console.log((arr[half] + arr[half - 1]) / 2);
    }
}(arr3, arr4));

// -----------------------------------------------------------------------------------------------------------------
// g: Remove duplicates from an array
// anonymous function
let removeDuplicates = function(arr) {
    let unique = []; //creating a empty array
    for (i = 0; i < arr.length; i++) {
        // finding the element in an array if not present then add it
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
let arr5 = [23, 45, 32, 13, 45, 55, 23]
console.log(removeDuplicates(arr5));
// output:
// [ 23, 45, 32, 13, 55 ]

// IIFE function
(function(arr) {
    let unique = []; //creating a empty array
    for (i = 0; i < arr.length; i++) {
        // finding the element in an array if not present then add it
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    console.log(unique);
}(arr5));
// output:
// [ 23, 45, 32, 13, 55 ]

// -----------------------------------------------------------------------------------------------------------------
// h: Rotate an array by k times
// anonymous function
let rotateArray = function(nums, k) {
    // it rotated the array k time every time last element insert at first position
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
}
let arr6 = [34, 45, 67, 78, 89, 91];
console.log(rotateArray(arr6, 2));
output: [89, 91, 34, 45, 67, 78]

//IIFE function
(function(nums, k) {
    // it rotated the array k time every time last element insert at first position
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    console.log(nums);
}(arr6, 2));
// output:
// [ 67, 78, 89, 91, 34, 45 ]