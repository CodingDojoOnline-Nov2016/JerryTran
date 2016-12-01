// Change is inevitable (especially when you break a twenty!). Make
// generateCoinChange(cents). Accept a number of american cents, compute and print
// how to represent that amount with the smallest number of coins possible. Common
// American coins are
//      Penny (1 cent)
//      Nickel(5 cents)
//      Dime(10 cents)
//      Quarter(25 cents)

function generateCoinChange(num)
{
    var penny = 0;
    var nickel = 0;
    var dime = 0;
    var quarter = 0;

    while (num)
    {
        if(num - 25 >= 0)
        {
            num -= 25;
            quarter ++;
        }
        else if(num - 10 >= 0)
        {
            num -= 10;
            dime ++;
        }
        else if(num - 5 >= 0)
        {
            num -= 5;
            nickel ++;
        }
        else
        {
            penny = num;
            num = 0;
        }
    }
    console.log("Quarters = " + quarter);
    console.log("Dimes = " + dime);
    console.log("Nickels = " + nickel);
    console.log("Pennies = " + penny);
}

generateCoinChange(94)


function coinChange2(cents)
{
    var Q = D = N = P = 0;
    var qrem = cents % 25
    var drem = qrem % 10
    var nrem = drem % 5
    Q = Math.trunc(cents/25)
    D = Math.trunc(qrem/10)
    N = Math.trunc(drem/5)
    P = nrem
    console.log(Q, D, N, P)
}
