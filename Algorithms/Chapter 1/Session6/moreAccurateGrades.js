// For an additional challenge, add '-' signs to scores in the bottom two percent
// of A, B, C, and D scores, and '+' signs to the top two percent of B, C, and D
// scores.

function moreAccurateGrades(grade)
{
    if(grade >= 93)
    {
        console.log("A");
    }
    else if(grade >= 90)
    {
        console.log("A-");
    }
    else if(grade >= 88)
    {
        console.log("B+");
    }
    else if(grade >= 83)
    {
        console.log("B");
    }
    else if(grade >= 80)
    {
        console.log("B-");
    }
    else if(grade >= 78)
    {
        console.log("C+");
    }
    else if(grade >= 73)
    {
        console.log("C");
    }
    else if(grade >= 70)
    {
        console.log("C-");
    }
    else if(grade >= 68)
    {
        console.log("D+");
    }
    else if(grade >= 63)
    {
        console.log("D");
    }
    else if(grade >= 60)
    {
        console.log("D-");
    }
    else
    {
        console.log("F");
    }
}

moreAccurateGrades(92)
