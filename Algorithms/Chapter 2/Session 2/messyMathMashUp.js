// Create a function messyMath(num) that will return the following sum:
// add all integers from 0 up to the given num, except for the following special
// cases of our count value:
//      1. If current count (not num) is evenly divisible by 3, don't add to sum;
//          use continue to skip to the next value of count;
//      2. Otherwise, if current count is evenly divisible by 7, include it twice
//          in sum instead of once;
//      3. Regardless of the above, if current count is exactly 1/3 of num, return
//          -1 immediately.

function messyMathMashUp(num)
{
    var sum = 0;
    for(var count = 0; count <= num; count++)
    {
        if(num % 3 === 0)
        {
            continue;
        }
        else if(num % 7 === 0)
        {
            sum += count * 2;
        }
        else if(count * 3 === num)
        {
            return -1;
        }
        else
        {
            sum += count;
        }
    }
}

console.log(messyMathMashUp(9))
