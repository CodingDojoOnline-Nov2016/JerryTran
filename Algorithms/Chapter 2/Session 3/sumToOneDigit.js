// Kaitlin sees beauty in numbers, but also believes that less is more. Implement
// sumToOne(num) that sums a given integer's digits repeatedly until the sum
// is only one digit. Return that one-digit result.

function sumToOne(num)
{
    var sum = 0;
    if(num < 10)
    {
        return num;
    }
    num += "";
    var arr = [];
    for(var i = 0; i < num.length; i++)
    {
        arr.push(num.charAt(i));
    }
    for(var i = 0; i < arr.length; i++)
    {
        sum += parseInt(arr[i]);
    }
    return sum;
}

console.log(sumToOne(39))
