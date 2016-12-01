// Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end

function shiftArray(arr)
{
    for (var i = 0; i < arr.length; i++)
    {
        arr[i] = arr[i + 1];
    }
    arr.length -= 1;
    arr.push(0);
    console.log(arr);
}

shiftArray([1,2,3,4,5])
