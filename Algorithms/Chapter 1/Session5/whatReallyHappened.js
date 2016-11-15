// Change whatHappensToday() function to create whatReallyHappensToday(). In this
// new function test for each disaster independently, instead of assuming exactly
// one disaster will happen. In other words, with this new function, all five
// might occur today - or none.

// 10% chance of volcano, 15% chance of tsunami, 20% chance of
// earthquake, 25% chance of blizzard, and 30% of meteor strike

function whatReallyHappensToday()
{
    var disaster = [];
    var volcano = Math.random();
    var tsunami = Math.random();
    var earthquake = Math.random();
    var blizzard = Math.random();
    var meteor = Math.random();

    if(volcano < .10)
    {
        disaster.push("Volcano");
    }
    if(tsunami < .15)
    {
        disaster.push("Tsunami");
    }
    if(earthquake < .20)
    {
        disaster.push("Earthquake");
    }
    if(blizzard < .25)
    {
        disaster.push("Blizzard");
    }
    if(meteor < .30)
    {
        disaster.push("Meteor");
    }

    if(disaster.length > 0)
    {
        console.log("Kenny died of the following cause(s): " + disaster);
    }
    else
    {
        console.log("Kenny lives.");
    }
}

whatReallyHappensToday()
