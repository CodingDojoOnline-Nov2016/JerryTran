// Given an array, return the sum of the first value in the array, plus
// the array's length.

function firstPlusLength(arr)
{
    var sum = arr[0] + arr.length;
    console.log(sum);
}

firstPlusLength(["string",2,1,4,4,3,3,2])
// What happens if the array's first value is not a number,
// but a string (like "what?") or a boolean (like false).

// When the first value is a boolean, its value is given as either
// 1 (for True) or 0 (for false). The function will give arr[0] a value of 1
// or 0. When the first value is a string, the function will concatenate
// arr.length to the end of the string.
