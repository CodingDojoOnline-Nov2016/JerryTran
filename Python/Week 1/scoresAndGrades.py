# Create a program that prompts the user ten times for a test score between 60
# and 100. Each time as score is generated, your program should display what the
# grade is for a particular score. Here is the grade table:
#       Score 60-69; Grade - D
#       Score 70-79; Grade - C
#       Score 80-89; Grade - B
#       Score 90-100; Grade - A

def scoresAndGrades():
    print "Enter your score"
    print 'Scores and Grades'
    for num in range(10):
        score = raw_input()
        if (int(score) >= 90):
            grade = 'A'
        elif (int(score) >= 80):
            grade = 'B'
        elif (int(score) >= 70):
            grade = 'C'
        elif (int(score) >= 60):
            grade = 'D'
        else:
            grade = 'F'
        print 'Score: ', score, "Your grade is", grade
    print 'End of the program. Bye!'

scoresAndGrades()
