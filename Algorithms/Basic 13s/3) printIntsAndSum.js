// Print Ints and Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far

function printIntsAndSum()
{
    var sum = 0;
    for(var i = 0; i <= 255; i++)
    {
        sum += i;
        console.log("i = " + i);
        console.log("Current Sum = " + sum);
    }
}

printIntsAndSum()
