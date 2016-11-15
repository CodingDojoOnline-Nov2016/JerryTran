// Given array, create a function to return a new array where each value in the
// original has been doubled. Calling double([1,2,3]) should return [2,4,6]
// without changing original.

function double(arr)
{
    var arr2 = [];
    for(var i = 0; i < arr.length; i++)
    {
        arr2.push((arr[i] * 2));
    }
    console.log(arr);
    console.log(arr2);
}

double([1,2,3]);
