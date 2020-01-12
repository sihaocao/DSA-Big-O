// Dog search
// Question 1a) The Big O for the first scenario would be Constant Time 0(1), since regardless of how many dogs there are
// in the room, it will take the same amount of time to find a dog of the same breed as mine if I just
// yell my question out to everyone.

// Question 1b) The Big O for the second scenario would be Linear Time O(n), since run times are directly proportional
// to the size of the input, for example, if there are 5 dogs, it will take that long to ask each owner what breed the
// dog is. If there are 100 dogs, it will take that long to ask each owner about the breed.

// Question 2) The Big O of this function is O(1). It will take the same amount of time no matter the input.
// This is because the input is always just 1 number long.

// Question 3) This algorithm requires 2 levels of looping over an input, so this would be Polynomial Time O(n^2).

// Question 4) This algorithm is doubling every number in an array, so this would be Linear Time O(n),
// The running time is directly proportional to the size of the input.

// Question 5) This algorithm is checking if each element in an array matches another input.
// So this would be Linear Time O(n), running time is directly proportional to the size of the input.

// Question 6) This algorithm is taking one array, going through each element and then going through each
// element of the same array again and pairing each element, these are nested loops, so
// this would be Polynomial Time O(n^2).

// Question 7) The following algorithm pushes some number to an array based on the current index of the for loop. 
// It performs one action per number for each number between 1 and the input, so this is linear complexity O(n).

// Question 8) The Big O is O(n). This algorithm attempts to find the highest value of an array. 
// Best case scenario is the highest number is first, worst case scenario it is last. 
// In either case, it performs one action per index in the array, so it has linear time complexity.

// Question 9) This algorithm is finding a random number in an array, so it would be Constant Time O(1). The algorithm
// will take the same amount of time no matter the size of the input.

// Question 10) This algorithm checks to see if an input is a prime number, 
// first checking to make sure the number is not 1 or a decimal. 
// This has linear time complexity O(n); if the number being checked increases by 1, 
// the number of cycles the algorthm runs through also increases by 1.

// Recursion Problem 1: countingSheep
// Time Complexity: Linear Time Complexity O(n), directly proportional to size of input
function countingSheep(num) {
    let ticks = 0;
    for (let i = num; i >= 0; i--) {
        ticks++;
        if (i === 0) {
            return 'All sheep jumped over the fence'
        } else {
            return `${num} - Another sheep jumped over the fence`
        }
    }
    return ticks;
}

// Recursion Problem 2: powerCalculator
// Time Complexity: Linear Time Complexity O(n), running time directly proportional to size of input
function powerCalc(base, exp) {
    let ticks = 1;
    let prod = base;
    if (exp < 0) {
        return 'Exponent should be greater than or equal to 0'
    } else {
        for (let i = 1; i < exp; i++) {
            ticks++;
            prod = prod * base;
        }
    }
    return {
        prod,
        ticks
    }
}

// Recursion Problem 3: reverseString
// Time Complexity: Linear Time Complexity O(n), running time directly proportional to size of input
function reverseString(string) {
    const arr = string.split('');
    let reverseOrder = [];
    for (let i=(arr.length-1); i>=0; i--) {
        reverseOrder.push(arr[i])
    }
    reverseOrder.join('')
    return reverseOrder
}

// Recursion Problem 4: triangleNumber
// Time Complexity: Exponential Time Complexity O(2^n), running times grow rapidly with any increase in input size
function triangleNumber(num) {
    let total = 0;
    for (let i = 0; i <= num; i++) {
        total += i;
    }
    return total;
}

// Recursion Problem 5: stringSplitter
// Time Complexity: Linear Time Complexity O(n), running time directly proportional to size of input
function stringSplitter(str) {
    let splitString = [];
    for (let i = 0; i < str.length; i++) {
        splitString.push(str.charAt(i))
    }
    return splitString;
}

// Recursion Problem 6: fibonacci
// Time Complexity: Exponential Time Complexity O(2^n), running times grow rapidly with any increase in input size
function fibonacci(num) {
    if (num <= 2) {
      return 1
    }
    let num1 = 1;
    let num2 = 1;
    let sum;
    let ticks = 1;
    for (let i = 3; i <= num; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
      ticks++;
    }
    return {
      sum,
      ticks
    }
}

// Recursion Problem 7: factorial
// Time Complexity: Logarithmic Time Complexity O(log n), takes longer with larger input, but cuts problem size
// in half with each iteration
function factorial(num) {
    let product = 1;
    let ticks = 1;
    for (let i = 0; i < num; i++) {
        product *= i + 1;
        ticks++;
    }
    return {
      product,
      ticks
    }
}