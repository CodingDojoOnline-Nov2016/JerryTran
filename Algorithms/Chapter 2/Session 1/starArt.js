// Star Art
// Assume that you have a text field that is exactly 75 characters long. You want
// to fill it with spaces and asterisks ('*'), sometimes called stars. You should
// print the given number of asterisks consecutively. Depending on which function
// is called, those stars should be left-justified (first star would be very first
// character in the text field), or right-justified (last star would be very last
// character in the text field, with potentially some spaces at the beginning of
// the text field before the block of stars start), or centered in the 75-character
// text field (with the same number of spaces on either side of the block of stars,
// plus/minus one).

//      Write a function drawLeftStars(num) that accepts a number and prints that
//      many asterisks
//      Write a function drawRightStars(num) that prints 75 characters total. The
//      stars should build from right side. The last numcharacters should be asterisks;
//      the other remaining of the 75 should be spaces.
//      Write a function drawCenterStars(num) that prints 75 characters total. The
//      stars should be centered in the 75. The middle numcharacters should be
//      asterisks, the rest of the 75 characters should be spaces.

function drawLeftStars(num)
{
    var textField="";
    while(textField.length <= 75)
    {
        if(num > 0)
        {
            textField += "*";
            num -=1;
        }
        else
        {
            textField += " ";
        }
    }
    return textField;
}

console.log(drawLeftStars(10))

function drawRightStars(num)
{
    var textField="";
    while(textField.length <= 75)
    {
        if(num > 0 )
        {
            textField= "*" + textField;
            num --;
        }
        else
        {
            textField = " " + textField;
        }
    }
    return textField;
}

console.log(drawRightStars(10))

function drawCenterStars(num)
{
    var textField="";
    var spaces = (75 - num) / 2;
    while(textField.length <= 75)
    {
        if(spaces > 0)
        {
            textField += " ";
            spaces --;
        }
        else if(num > 0)
        {
            textField += "*";
            num --;
        }
        else
        {
            textField += " ";
        }
    }
    return textField;
}

console.log(drawCenterStars(10))
