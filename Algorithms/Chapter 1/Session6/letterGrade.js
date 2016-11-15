// Write a function that assigns and prints a letter grade, given an integer
// represengint a score from 0 to 100?
// 90+ get an "A"
// 80-89 "B"
// 70-79 "C"
// 60-69 "D"
// Below 60 "F"

function letterGrade(grade)
{
    if(grade >= 90)
    {
        console.log("A");
    }
    else if(grade >= 80)
    {
        console.log("B");
    }
    else if(grade >= 70)
    {
        console.log("C");
    }
    else if(grade >= 60)
    {
        console.log("D");
    }
    else
    {
        console.log("F");
    }
}

letterGrade()
