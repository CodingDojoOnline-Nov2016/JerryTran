// Reducing an array's length immediately shortens it by that amount. Given array
// arr and number x, remove all except the last x elements, and return arr (changed
// and shorter). Given ([2,4,6,8,10],3), change the array to [6,8,10] and return it.

function popFront(arr)
{
    var holder = arr[0];
    for(var i = 0; i < arr.length - 1; i++)
    {
        arr[i] = arr[i + 1];
    }
    arr.length -= 1;
    return holder;
}

function onlyKeepTheLastFew(arr, x)
{
    while(arr.length > x)
    {
        popFront(arr);
    }
    return arr;
}

console.log(onlyKeepTheLastFew([2,4,6,8,10],3))
