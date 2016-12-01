// Create function clockHandAngles(seconds) that, given the number of seconds since
// 12:00:00, will print the angles (in degrees) of the hour, minute, and second
// hands. As a  quick review, there are 360 degrees in a full rotation.

function clockHandAngles(seconds)
{
    var hr = min = hrDeg = minDeg = secDeg = 0;

    if(seconds >= 3600)
    {
        hr = seconds/3600;
        hrDeg = (hr/12) * 360;
        if(hrDeg > 360)
        {
            hrDeg = hrDeg % 360;
        }
        seconds = seconds % 3600;
    }
    if(seconds >= 60)
    {
        min = seconds/60;
        minDeg = (min/60) * 360;
        seconds = seconds % 60;
    }
    secDeg = (seconds/60) * 360;

    hrDeg = hrDeg.toFixed(3);
    minDeg = minDeg.toFixed(3);
    secDeg = secDeg.toFixed(3);

    console.log("Hour hand: " + hrDeg + " degs. Minute hand: " + minDeg + " degs. Second hand: " + secDeg + " degs.");
}

clockHandAngles(119730)
