// Write a function that determines whether a given year is a leap year.
// If a year is divisible by four, it is a leap year, unless it is divisible by
// 100. HOWEVER, if it is divisible by 400, then it IS a leap year.

function leapYear(year)
{
    if(year % 100 === 0 && year % 400 === 0)
    {
        console.log(year + " is a leap year");
    }
    else if(year % 100 === 0)
    {
        console.log(year + " is not a leap year");
    }
    else if(year % 4 === 0)
    {
        console.log(year + " is a leap year");
    }
    else
    {
        console.log(year + " is not a leap year");
    }
}

leapYear(1900)

// Code created during lecture
function isLeapYear(year)
{
    if(year % 100 === 0 && year % 400 !== 0)
    {
        console.log("Not a leap year!");
    }
    else if(year % 4 === 0)
    {
        console.log("IS a leap year!");
    }
    else
    {
        console.log("Not a leap year!");
    }
}

isLeapYear(1900)
