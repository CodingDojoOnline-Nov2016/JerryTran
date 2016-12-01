// Print Odds 1-255
// Print all odd integers from 1 to 255

function printOdds()
{
    for(var i = 1; i < 256; i++)
    {
        if(i % 2 !== 0)
        {
            console.log(i);
        }
    }
}
