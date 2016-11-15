// For [1,3,5,7,9,13], print values that are greater than its 2nd value.
// Return how many values this is.

function valuesGreaterThanSecond(arr)
{
    var count = 0;
    var arr2 = [];
    var second = arr[1]
    for(var i = 0; i < arr.length; i ++)
    {
        if(second < arr[i])
        {
            count++;
            arr2.push(arr[i]);
        }
    }

    console.log(arr2);
    console.log("There are " + count + " values greater than its second value!");
}

valuesGreaterThanSecond([1,3,5,7,9,13])

function greaterThan(arr)
{
    var count = 0;
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[1] < arr[i])
        {
            console.log(arr[i]);
        }
    }
    return count;
}

var run = greaterThan([1,3,5,7,-9,13])
