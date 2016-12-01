// Sigma
// Implement function sigma(num) that given a number, returns the sum of all
// positive integers up to number (inclusive).

function sigma(num)
{
    var sum = 0;
    for (var i = 1; i <= num; i++)
    {
        sum += i;
    }
    return sum;
}

console.log(sigma(10))

function sigma2(num)
{
    num = num;
    var sum = 0;
    while( num > 0)
    {
        sum += num;
        num -= 1;
    }
    return sum;
}

console.log(sigma2(10))
