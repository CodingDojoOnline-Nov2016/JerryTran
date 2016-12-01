// Max, Min, Average
// Given an array, print the max, min and average values for that array.

function maxMinAvg(arr)
{
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for(var i = 1; i < arr.length; i++)
    {
        if(max < arr[i])
        {
            max = arr[i];
        }
        if(min > arr[i])
        {
            min = arr[i];
        }
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log("Max = " + max);
    console.log("Min = " + min);
    console.log("Average = " + avg);
}

maxMinAvg([1,3,5,2,4])
