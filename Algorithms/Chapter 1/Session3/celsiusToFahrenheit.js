// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius,
// and returns the equivalent temperature expressed in Fahrenheit degrees.

function celsiusToFahrenheit(cDegrees)
{
    var fahrenheit = ((9/5) * cDegrees) + 32

    console.log(fahrenheit)
}

celsiusToFahrenheit(29)

// Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation
// can be complex, so for this challenge just try a series of celsius integer values starting
// at 200, going downward (descending), checking whether it is equal to the corresponding
// Fahrenheit value.

function equateFahrenheitCelsius()
{
    for(var i = 200; i > -200; i--)
    {
        var fahrenheit = ((9/5) * i + 32)
        var celsius = (i - 32) / (9/5);

        if(fahrenheit === celsius)
        {
            console.log("Fahrenheit and Celsius equate at " + i + " degrees");
        }
    }
}

equateFahrenheitCelsius();
