// Create a function that accepts an array, and prints "yummy" each time one of
// the values is equal to "food". If no array elements are "food", then print
// "I'm hungry" once.

function alwaysHungry(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] === "food")
        {
            var food = true;
            console.log("yummy");
        }
    }
    if(food !== true)
    {
        console.log("I'm hungry");
    }
}

alwaysHungry([3,1])
