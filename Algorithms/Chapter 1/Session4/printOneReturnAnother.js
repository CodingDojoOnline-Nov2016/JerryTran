// Build a function that takes array of numbers. The function should print second-to-last
// value in the array, and return the first odd value in the array.

function printOneReturnAnother(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 !== 0)
        {
            var odd = arr[i];
            break;
        }
    }
    console.log(arr[arr.length-2] + " is the second-to-last value in the array");
    return odd;
}

printOneReturnAnother([3,2,4,5,6]);
