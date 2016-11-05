// Based on earlier "Countdown By Fours", given lowNum, highNum, and mult
// print multiples of mult from highNum down to lowNum, using a FOR loop.

function flexibleCountdown(lowNum, highNum, mult)
{
    for(var i = highNum; i >= lowNum; i--)
    {
        if(i % mult === 0)
        {
            console.log(i);
        }
    }
}

flexibleCountdown(3,12,4)
