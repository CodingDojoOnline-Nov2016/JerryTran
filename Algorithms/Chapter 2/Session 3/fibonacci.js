// Create a function to generate Fibonacci numbers. In this famous mathematical
// sequence, each number is the sum of the previous two, starting with values 0
// and 1. Your function should accept one argument, an index into the sequence
// (where 0 corresponds to the inital value, 4 corresponds to the value four later
// etc.).

function fibonacci(num)
{
    if(num === 0)
    {
        return 0;
    }
    else if(num === 1)
    {
        return 1;
    }
    else
    {
        var a = 0;
        var b = 1;
        num = num - 2;
        while (num >= 0)
        {
            var sum = a + b;
            a = b;
            b = sum;
            num --;
        }
        return b;
    }
}

console.log(fibonacci(0))

function recurFib(n, a, b)
{
    a = a || 0;
    b = b|| 1;
    if(!n)
    {
        return a;
    }
    return recurFib(n-1, b, a+b);
}

console.log(recurFib(7))
