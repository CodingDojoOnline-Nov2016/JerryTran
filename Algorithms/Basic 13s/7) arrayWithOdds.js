// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive)

function arrayOdds()
{
    var arr = [];
    for (var i = 1; i <= 255; i++)
    {
        if(i % 2 !== 0)
        {
            arr.push(i);
        }
    }
    console.log(arr);
}

arrayOdds()
