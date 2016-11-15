// Create a function that accepts a number as an input. Return a new array
// that counts down by one, from the nummber (as the array's 'zero'th element)
// down to 0 (as the array's last element). How long is this array?

function countdown(num)
{
    var array = [];
    for(var i = num; i >= 0; i--)
    {
        if(i >= 0)
        {
            array.push(i);
            // array[array.length] = i;
        }
    }
    console.log(array.length);
    return array;
}

var info = countdown(10);
console.log(info);
