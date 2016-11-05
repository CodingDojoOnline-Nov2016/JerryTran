// Using FOR, print multiples of 3 from -300 to 0
// Skip -3 and -6.

function multiplesThree()
{
    for(var i = -300; i <=0 ; i = i + 3)
    {
        if(i === -3 || i === -6)    // If i is -3 or -6, continue to next value.
        {
            continue;
        }
        else
        {
                console.log(i);
        }
    }
}

multiplesThree()
