// Print integers 1 to 100. If the integer is divisible by 5, print "Coding"
// instead of the integer. If it is divisible by 10, also print "Dojo".

function printDojo()
{
    for(var i = 1; i <= 100; i++)
    {
        if(i % 5 === 0 && i % 10 === 0)
        {
            console.log("CodingDojo");
        }
        else if(i % 5 === 0)
        {
            console.log("Coding");
        }
        else
        {
            console.log(i);
        }
    }
}

printDojo()
