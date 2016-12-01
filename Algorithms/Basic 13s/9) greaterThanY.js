// Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y

function greaterY(arr, y)
{
    var count = 0;
    for (var i = 0; i < arr.length; i++)
    {
        if(arr[i] > y)
        {
            count ++;
        }
    }
    console.log("Values Greater Than Y(" + y + "): " + count);
}

greaterY([3,2,5,7,10], 4)
