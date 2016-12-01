// Zero Out Negative Numbers
// Return the given array, after setting any negative values to Zero

function zeroNegative(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] < 0)
        {
            arr[i] = 0;
        }
    }
    console.log(arr);
}

zeroNegative([3,-1,4,-10,0])
