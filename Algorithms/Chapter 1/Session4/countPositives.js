// Given array of numbers, create function to replace last value with number of
// positive values.

function countPositives(arr)
{
    var count = 0;
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] > 0)
        {
            count ++;
        }
    }
    arr[arr.length -1] = count;
    console.log(arr);
}

countPositives([3,-1])
