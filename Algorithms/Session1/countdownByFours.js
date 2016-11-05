// Log positive numbers starting at 2016, counting down by fours (excluding 0)
// without a FOR loop

function countdownByFours()
{
    var i = 2016;
    while (i > 0)
    {
        console.log(i);
        i = i - 4;
    }
}

countdownByFours()
