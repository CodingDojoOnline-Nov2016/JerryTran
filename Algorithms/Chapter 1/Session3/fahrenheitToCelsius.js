// Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit,
// and returns the equivalent temperature as expressed in Celsius degrees. For review,
// Fahrenheit = (9/5 * Celsius) + 32

function fahrenheitToCelsius(fDegrees)
{
    var celsius = (fDegrees - 32) / (9/5);

    console.log(celsius)
}

fahrenheitToCelsius(45)
