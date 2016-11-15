// Create a function that takes array of numbers. The function should print
// the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr)
{
    var low = arr[0];
    var high = arr[0]

    for(var i = 1; i < arr.length; i++)
    {
        if(low > arr[i])
        {
            low = arr[i];
        }
        if(high < arr[i])
        {
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}

printLowReturnHigh([2,1,4,6])
