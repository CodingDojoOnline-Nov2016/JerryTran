// Get and Print Average
// Analyze an array's values and print the average

function printAverage(arr)
{
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    var avg = sum / (arr.length);
    console.log(avg);
}

printAverage([2,3,4])
