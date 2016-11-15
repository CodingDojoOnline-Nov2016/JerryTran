// If there is a 10% chance of volcano, 15% chance of tsunami, 20% chance of
// earthquake, 25% chance of blizzard, and 30% of meteor strike, write function
// whatHappensToday() to print the outcome.

function whatHappensToday()
{
    if(Math.random() < .10)
    {
        console.log("Volcano");
    }
    else if(Math.random() < .25)
    {
        console.log("Tsunami");
    }
    else if(Math.random() < .45)
    {
        console.log("Earthquake");
    }
    else if(Math.random() < .70)
    {
        console.log("Blizzard");
    }
    else if(Math.random() < 1.00)
    {
        console.log("Meteor Strike");
    }
    console.log(Math.random());
}

whatHappensToday()
