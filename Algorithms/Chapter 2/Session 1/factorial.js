// Factorial
// Write a function, factorial(num) that, given a number, returns the product
// (multiplication) of all positive integers from 1 up to number (inclusive).

function factorial(num)
{
    var product = 1;
    for(var i = 1; i <= num; i++)
    {
        product = i * product;
    }
    console.log(product);
}

factorial(10)

function factorial2(num)
{
    var product = 1;
    while(num > 0)
    {
        product *= num;
        num --;
    }
    return product;
}

console.log(factorial2(10))
