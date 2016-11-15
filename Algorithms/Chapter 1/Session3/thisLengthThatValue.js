// Given two numbers, return array of length num1 with each value num2. Print "Jinx!"
// if they are the same.

function thisLengthThatValue(num1, num2)
{
    var arr = [];
    for(var i = 0; i < num1; i++)
    {
        if(num1 !== num2)
        {
            arr.push(num2);
        }
        else
        {
            arr.push("Jinx!");
        }
    }
    console.log(arr)
}

thisLengthThatValue(3,3)
