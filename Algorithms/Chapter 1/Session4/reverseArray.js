// Given array, write a function that reverses values, in place.
// Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3]

function reverse(arr)
{
    var x = arr.length;
    for(i = 0; i < x; i++)
    {
        var temp = arr[i];
        arr[i] = arr[x-1];
        arr[x-1] = temp;
        x--;
    }
    console.log(arr);
}

reverse([1,4,6,3])
