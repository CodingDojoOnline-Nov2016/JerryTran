// From Star Art, derive the following that will accept and draw the given characters,
// not just asterisks:
//      drawLeftChars(num, char)
//      drawRightChars(num, char)
//      drawCenterChars(num, char)
// For all three of these, you can safely assume that 'char' is a string with
// length 1.

function drawLeftChars(num, char)
{
    var textField = "";
    while (textField.length <= 75)
    {
        if(num > 0)
        {
            textField += char;
            num --;
        }
        else
        {
            textField += " ";
        }
    }
    return textField;
}
console.log(drawLeftChars(10, "^"))

function drawRightChars(num, char)
{
    var textField = "";
    while(textField.length <= 75)
    {
        if(num > 0)
        {
            textField = char + textField;
            num --;
        }
        else
        {
            textField = " " + textField;
        }
    }
    return textField;
}
console.log(drawRightChars(10, "^"))

function drawCenterChars(num, char)
{
    var textField = "";
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
            textField += char;
            num --;
        }
        else
        {
            textField += " ";
        }
    }
    return textField;
}
console.log(drawCenterChars(10, "^"))
