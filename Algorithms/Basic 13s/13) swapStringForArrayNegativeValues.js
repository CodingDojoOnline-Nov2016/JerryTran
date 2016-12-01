// Swap String for Array Negative Values
// Given an array of numbers, replace any negative values with the string 'Dojo'

function swapString(arr)
{
    var string = "Dojo";
    for (var i = 0; i < arr.length; i++)
    {
        if(arr[i] < 0)
        {
            arr[i] = string;
        }
    }
    console.log(arr);
}

swapString([2,3,-1,-4,2])
