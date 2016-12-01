// Find and Print Max
// Given an array, find and print its largest element.

function findMax(arr)
{
    var max = arr[0];

    for (var i = 1; i < arr.length; i++)
    {
        if(max < arr[i])
        {
            max = arr[i];
        }
    }
    console.log(max);
}

findMax([3,1,6,3,2])
